var L = require('leaflet');

/**
 * This class provides common utility methods to manage specific geographic zone
 * as the main viewport. It means that all operations like fitBounds(bounds) or
 * setView(latlng, zoom) will takes into account the specified map zone and not
 * the whole map.
 */
var MapViewport = L.Class.extend({

    /**
     * Initializes this object.
     * 
     * @param options.map
     *            the Leaflet map object
     * @param options.viewport
     *            a L.Bounds instance defining the main visible zone on the map;
     *            see the #setViewport method
     * @param options.focus
     *            focus position on the map; when user uses #focusTo method then
     *            the specified lat/lng point is moved in the given position on
     *            the screen
     */
    initialize : function(options) {
        L.setOptions(this, options);
        var viewport = this.options.viewport;
        if (viewport) {
            this.setViewport(viewport);
        }
        if (this.options.focus) {
            this.setFocusPosition(this.options.focus);
        }
    },

    /**
     * Returns the map managed by this class. By default this method returns the
     * "options.map".
     */
    getMap : function() {
        return this.options.map;
    },

    /**
     * Defines the viewport for the map - the visible area of the map where data
     * should be focused and fitted. If a focus position is not defined then
     * this method sets the focus position to the center of the specified
     * viewport area.
     * 
     * @param viewport
     *            a L.Bounds instance defining the main visible zone on the map;
     *            this object defines top, right, left and bottom shift of the
     *            viewport on the visible map screen area
     */
    setViewport : function(viewport) {
        this._viewport = L.bounds(viewport);
    },

    /**
     * Returns the current viewport for the underlying map
     */
    getViewport : function() {
        if (this._viewport)
            return this._viewport;
        var map = this.getMap();
        return L.bounds([ 0, 0 ], map.getSize());
    },

    /**
     * Defines position on the map (in pixels) where map should be moved when
     * user tries to set view or focus on a specific geographic position.
     * 
     * @param options.focus
     *            focus position on the map; when user uses #focusTo method then
     *            the specified lat/lng point is moved in the given position on
     *            the screen
     */
    setFocusPosition : function(pos) {
        this._focusPos = L.point(pos);
    },

    /**
     * Returns the focus position on the map.
     */
    getFocusPosition : function() {
        var pos = this._focusPos;
        if (!pos) {
            var box = this.getViewport();
            pos = new L.Point((box.min.x + box.max.x) * 1 / 2,
                    (box.min.y + box.max.y) * 2 / 3, true);
        }
        return pos;
    },

    /**
     * Moves the map to the specified geographic position. If a focus position
     * is specified the requested geographic position is moved in this pixel
     * position on the map screen area. Otherwise the focus position defined by
     * the "setFocusPosition" is used.
     */
    focusTo : function(coords, focusPos, callback) {
        var that = this;
        if (typeof focusPos === 'function') {
            callback = focusPos;
            focusPos = null;
        }
        callback = this._checkCallback(callback);
        var map = this.getMap();
        focusPos = this._getAbsFocusPosition(focusPos);
        var shift = map.project(coords).subtract(focusPos);
        map.once('moveend', function(ev) {
            callback(null, ev);
        });
        map.panBy(shift);
    },

    /**
     * This method performs zoom (if necessary) and calls the specified callback
     * method. It is useful to be sure that the callback is really invoked
     * (which is not the case with the 'zoomend' Leaflet event).
     */
    zoomTo : function(zoom, focusPos, callback) {
        if (typeof focusPos === 'function') {
            callback = focusPos;
            focusPos = null;
        }
        callback = this._checkCallback(callback);

        focusPos = this._getAbsFocusPosition(focusPos);
        var map = this.getMap();
        var coords = map.unproject(focusPos);
        var hasChanges = (map.getZoom() !== zoom) || //
        (coords + '' !== map.getCenter() + '');
        if (hasChanges) {
            map.once('zoomend', callback);
            map.setZoomAround(coords, zoom);
        } else {
            callback();
        }
    },

    _getAbsFocusPosition : function(focusPos) {
        var map = this.getMap();
        var focusPos = focusPos || this.getFocusPosition();
        focusPos = map._getTopLeftPoint().add(focusPos);
        return focusPos;
    },

    /**
     * Zooms and moves the map viewport to fit in the specified geographic
     * bounds.
     */
    panInsideBounds : function(bounds, callback) {
        var that = this;
        var map = that.getMap();
        callback = that._checkCallback(callback);
        var zoom = map.getBoundsZoom(bounds, false);
        that.zoomTo(zoom, function() {
            var focusPos = that._getAbsFocusPosition();
            var coords = map.unproject(focusPos);
            var newCoords = map._limitCenter(coords, zoom, bounds);
            if (!coords.equals(newCoords)) {
                that.focusTo(newCoords, callback);
            } else {
                callback();
            }
        });
    },

    /** Checks the specified function and returns a non-empty callback. */
    _checkCallback : function(callback) {
        return callback || function() {
        };
    },

});

module.exports = MapViewport;
