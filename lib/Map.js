var L = require('leaflet');
var React = require('react');
var Promise = require('promise');
var MapViewport = require('./MapViewport');

module.exports = React.createClass({
    displayName : 'Map',

    getMapViewport : function() {
        return this._viewport;
    },

    isPointVisible : function(center) {
        var bounds = this.map.getBounds();
        return bounds.contains(center);
    },

    setCenter : function(center) {
        this.map.panTo(center);
    },

    fitToBounds : function(bbox) {
        return new Promise(function(resolve, reject) {
            try {
                var handler = function(err, result) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                };
                if (!bbox) {
                    // console.log('[ERROR][MapView] Bounding box is not defined',
                    // new Error().stack);
                    return handler();
                }
                var viewport = this.getMapViewport();
                if (isEmptyBox(bbox, 4)) {
                    var center = L.latLng(bbox[1], bbox[0]);
                    viewport.focusTo(center, handler);
                } else {
                    var bounds = L.latLngBounds(//
                    L.latLng(bbox[1], bbox[0]), //
                    L.latLng(bbox[3], bbox[2])//
                    );
                    viewport.panInsideBounds(bounds, handler);
                }
            } catch (err) {
                reject(err);
            }
        });
    },

    enqueueUpdate : function(key, action) {
        if (!this._layerUpdates) {
            this._layerUpdates = {};
        }
        this._layerUpdates[key] = action;
    },
    getInitialState : function() {
        return {
            showChildren : false
        };
    },
    /** Initializes this component. */
    componentWillMount : function() {
        var timeout = 50;
        this._onZoomEnd = debounce(this._onZoomEnd, timeout);
    },
    componentDidMount : function() {
        var container = this.getDOMNode();
        this.map = this._newMap(container);
        this._viewport = new MapViewport({
            map : this.map
        });
        var events = this.props.events || [];
        events.forEach(function(handler, key) {
            this.map.on(key, handler);
        }, this);
        this.map.on('zoomend', this._onZoomEnd, this);
        this._updateMapView();
        this._updateViewport();
        this._updateZoomStyles();
        this.setState({
            showChildren : true
        });
    },

    componentDidUpdate : function() {
        if (this._layerUpdates) {
            var map = this.map;
            var keys = Object.keys(this._layersKeys) || [];
            keys.forEach(function(key) {
                var action = this._layerUpdates[key];
                delete this._layerUpdates[key];
                action(map);
            }, this);
        }
        this._updateMapView();
    },
    componentWillUnmount : function() {
        var events = this.props.events || [];
        events.forEach(function(handler, key) {
            this.map.off(key, handler);
        }, this);
        this.map.off('zoomend', this._onZoomEnd, this);
        this.map.remove();
        delete this._viewport;
        delete this.map;
    },
    _updateCenterAndZoom : function() {
        var center = this.props.center || [ 0, 0 ];
        if (Array.isArray(center)) {
            center = L.latLng(center[1], center[0]);
        } else {
            center = L.latlng(center);
        }
        var zoom = this.props.zoom || 0;
        if (this._zoom === undefined || this._center === undefined
                || this._center + '' !== center + '' || this._zoom != zoom) {
            var latlng = (this._center + '' === center + '') //
            ? map.getCenter() : center;
            var z = (this._zoom === zoom) ? map.getZoom() : zoom;
            this.map.setView(latlng, z);
        }
        this._center = center;
        this._zoom = zoom;
    },
    _updateMapView : function() {
        var that = this;
        if (that.props.bbox) {
            that.fitToBounds(that.props.bbox);
        } else {
            that._updateCenterAndZoom();
        }
    },
    _newMap : function(container) {
        var options = L.Util.extend({}, {
            zoomControl : false,
            attributionControl : false,
        });
        var map = new L.Map(container, options);

        // Set the initial view of this map
        if (this.props.zoomControl !== false) {
            var zoomControlOptions = this.props.zoomControl || {};
            var zoomControl = L.control.zoom(options);
            map.addControl(zoomControl);
        }

        if (this.props.attribution !== false) {
            var attributionControlOptions = this.props.attribution || {};
            var attributionControl = L.control
                    .attribution(attributionControlOptions);
            map.addControl(attributionControl);
        }
        return map;
    },
    _updateZoomStyles : function() {
        var node = this.getDOMNode();
        var zoom = this.map.getZoom();
        var cls = [];
        for (var i = 0; i < zoom; i++) {
            cls.push('prev-zoom-' + i);
        }
        cls.push('zoom-' + zoom);
        var css = node.className;
        css = css.replace(/\s*zoom-\d+\s*/gim, '');
        css += ' ' + cls.join(' ');
        node.className = css;
    },

    /** Sets a new viewport bounding box for this map. */
    _updateViewport : function() {
        if (!this._viewport)
            return;
        var info = this._getViewportInfo();
        if (!this.info)
            return;
        var topLeft = info.topLeft;
        var bottomRight = info.bottomRight;
        if (!topLeft || !bottomRight)
            return;
        var focusPosition = info.focusPosition;
        var bounds = L.bounds(topLeft, bottomRight);
        this._viewport.setViewport(bounds);
        if (focusPosition) {
            this._viewport.setFocusPosition({
                top : focusPosition[1],
                left : focusPosition[0]
            });
        }
    },

    _getViewportInfo : function() {
        var viewport = this.props.viewportInfo;
        if (!viewport)
            return;
        return viewport;
    },

    _getChildrenComponents : function() {
        var children = [];
        var that = this;
        that._layersKeys = [];
        React.Children.map(this.props.children, function(child) {
            if (!React.isValidElement(child))
                return;
            var layerKey = child.props.layerKey;
            if (layerKey) {
                that._layersKeys.push(layerKey);
            }
            var key = child.key || layerKey;
            if (!key) {
                that._layerCounter = (that._layerCounter || 0) + 1;
                key = 'layer-' + that._layerCounter;
            }
            var ref = child.ref;
            var props = {
                parent : that,
                key : key,
                layerKey : layerKey,
                ref : ref
            };
            var newChild = React.cloneElement(child, props);
            children.push(newChild);
        });
        return children;
    },

    /** The main rendering method of this class. */
    render : function() {
        var children;
        if (this.state.showChildren) {
            children = this._getChildrenComponents();
        }
        return (React.DOM.div({
            key : this.props.key,
            className : this.props.className,
            style : this.props.style || {}
        }, children));
    },

    // -------------------------------------------------------------------

    /**
     * This method is called when the user changes the zoom level.
     */
    _onZoomEnd : function() {
        this._updateZoomStyles();
    },

// -------------------------------------------------------------------

});

function debounce(method, timeout) {
    var timerId;
    return function() {
        var that = this;
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        clearTimeout(timerId);
        timerId = setTimeout(function() {
            method.apply(that, args);
        }, timeout);
    };
}

/**
 * Returns <code>true</code> if the specified bounding box is empty.
 * 
 * @see http://gis.stackexchange.com/questions/8650/how-to-measure-the-accuracy-of-latitude-and-longitude/8674#8674
 */
function isEmptyBox(box, precision) {
    if (!box)
        return true;
    var first = round(box[0], precision);
    var second = round(box[1], precision);
    var third = round(box[2], precision);
    var fourth = round(box[3], precision);
    return (first === third && second === fourth);
    function round(val, precision) {
        precision = precision || 6;
        return (+val).toFixed(precision);
    }
}
