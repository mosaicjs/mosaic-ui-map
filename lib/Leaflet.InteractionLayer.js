var L = require('leaflet');

/**
 * 
 */
var InteractionLayer = L.Class.extend({

    includes : L.Mixin.Events,

    options : {
        resolution : 4,
        pointerCursor : true
    },

    /** Initializes this layer */
    initialize : function(options) {
        L.setOptions(this, options);
        // this._move = _.throttle(this._move, 20);
        // this._update = _.debounce(this._update, 10);
    },

    /**
     * This method is called when this layer is added to the map.
     */
    onAdd : function(map) {
        this._map = map;
        this._container = this._map._container;
        // this._update();
        map.on('click', this._click, this);
        map.on('mousemove', this._move, this);
        // map.on('moveend', this._update, this);
    },

    /**
     * This method is called when this layer is removed from the map.
     */
    onRemove : function() {
        var map = this._map;
        map.off('click', this._click, this);
        map.off('mousemove', this._move, this);
        // map.off('moveend', this._update, this);
        this._removeMouseCursorStyle();
    },

    /** Map click handler */
    _click : function(e) {
        this._objectForEvent(e, function(err, on) {
            if (err) {
                return ;
            }
            if (on.data) {
                this.fire('click', on);
            }
        }.bind(this));
    },

    /** Map move handler */
    _move : function(e) {
        this._objectForEvent(e, function(err, on) {
            if (err)
                return;
            if (on.data !== this._mouseOn) {
                if (this._mouseOn) {
                    this.fire('mouseout', {
                        latlng : e.latlng,
                        data : this._mouseOn
                    });
                    this._removeMouseCursorStyle();
                }
                if (on.data) {
                    this.fire('mouseover', on);
                    this._setMouseCursorStyle();
                }
                this._mouseOn = on.data;
            } else if (on.data) {
                this.fire('mousemove', on);
            }
        }.bind(this));
    },

    /**
     * Checks if the cursor style of the container should be changed to pointer
     * cursor
     */
    _setMouseCursorStyle : function() {
        if (!this.options.pointerCursor)
            return;
        if (!this._container._pointerCursorCount) {
            this._container._pointerCursorCount = 1;
            this._container.style.cursor = 'pointer';
        } else {
            this._container._pointerCursorCount++;
        }
    },

    /** Removes cursor style from the container */
    _removeMouseCursorStyle : function() {
        if (!this.options.pointerCursor)
            return;
        if (this._container._pointerCursorCount) {
            this._container._pointerCursorCount--;
            if (this._container._pointerCursorCount === 0) {
                this._container.style.cursor = '';
                delete this._container._pointerCursorCount;
            }
        }
    },

    /**
     * Returns an object from UTF grid corresponding to the coordinates of the
     * mouse event.
     */
    _objectForEvent : function(e, callback) {
        throw new Error('This method should be implemented ' + //
        'in subclasses.');
    },

});

module.exports = InteractionLayer;
