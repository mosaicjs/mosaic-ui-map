var L = require('leaflet');
var InteractionLayer = require('./Leaflet.InteractionLayer');

// Copied from the Leaflet.utfgrid implementation
GridLoader.ajax = function(url, cb) {
    // the following is from JavaScript: The Definitive Guide
    // and
    // https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest_in_IE6
    if (window.XMLHttpRequest === undefined) {
        window.XMLHttpRequest = function() {
            /* global ActiveXObject:true */
            try {
                return new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                throw new Error("XMLHttpRequest is not supported");
            }
        };
    }
    var response, request = new XMLHttpRequest();
    request.open("GET", url);
    request.onreadystatechange = function() {
        /* jshint evil: true */
        if (request.readyState === 4 && request.status === 200) {
            if (window.JSON) {
                response = JSON.parse(request.responseText);
            } else {
                response = eval("(" + request.responseText + ")");
            }
            cb(response);
        }
    };
    request.send();
    return request;
}

function now() {
    return new Date().getTime();
}
GridLoader.Slot = function() {
    this.isExpired = isExpired;
    this.finish = finish;
    this.onFinish = onFinish;
    this.cancel = cancel;
    // ------------------------------
    var timestamp;
    var finished = false;
    var listeners = [];
    var error;
    var data;
    function isExpired(time, timeout) {
        return time - timestamp > timeout;
    }
    function onFinish(listener) {
        timestamp = now();
        listeners.push(listener);
        notify();
    }
    function finish(err, d) {
        if (!finished) {
            finished = true;
            error = err;
            data = d;
        }
        notify();
    }
    function cancel() {
        finish(new Error('Cancelled'));
    }
    function notify() {
        if (!finished)
            return;
        for (var i = 0; i < listeners.length; i++) {
            try {
                listeners[i](error, data);
            } catch (e) {
            }
        }
        listeners = [];
    }
}

function GridLoader(options) {
    this.options = options || {};
    this.options.subdomains = this.options.subdomains || 'abc';
    var cache = {};
    var cacheTimeout = this.options.cacheTimeout || (60 * 1000) * 5; // 5 min
    this.loadTile = function(zoom, pos, callback) {
        var url = L.Util.template(this.options.url, L.Util.extend({
            s : L.TileLayer.prototype._getSubdomain.call(this, {
                x : pos.x,
                y : pos.y
            }),
            z : zoom,
            x : pos.x,
            y : pos.y
        }, this.options));
        var time = cleanCache();
        var key = zoom + '_' + pos.x + '_' + pos.y; // Cache key for this tile
        var slot = cache[key];
        if (!slot) {
            slot = cache[key] = new GridLoader.Slot();
            GridLoader.ajax(url, function(data) {
                slot.finish(null, data);
            }.bind(this));
        }
        slot.onFinish(callback);
    }.bind(this);

    this.setUrl = function(url) {
        this.options.url = url;
        this.clear();
    }
    
    this.clear = function() {
        prevTime = 0;
        cleanCache();
        cache = {};
    }
    var prevTime = 0;
    function cleanCache() {
        var time = now();
        if (time - prevTime > cacheTimeout) {
            var remove = [];
            for ( var key in cache) {
                var slot = cache[key];
                if (slot.isExpired(time, cacheTimeout)) {
                    slot.cancel();
                    remove.push(key);
                }
            }
            for (var i = 0; i < remove.length; i++) {
                delete cache[remove[i]];
            }
            prevTime = time;
        }
        return time;
    }

}

/**
 * The code of this class was mostly copied from the leaflet.utfgrid Leaflet
 * extension (MIT license, by David Leaver). The difference with the original
 * implementation is that 1) this class delegates tiles
 * loading/caching/canceling operations to an external "loader" instance (which
 * can be overloaded in the constructor); 2) this class notifies about loading
 * of tiles for each new screen using the "startLoading"/"endLoading" events; 3)
 * it loads tiles starting from the center of the current screen.
 */
var UtfGrid = InteractionLayer.extend({

    options : {
        resolution : 4,
        pointerCursor : true,
        tileSize : 256,
        subdomains : 'abc',
    },

    /** Initializes this layer */
    initialize : function(options) {
        var parent = InteractionLayer.prototype;
        parent.initialize.call(this, options);
        this.options.resolution = this.options.resolution || 4;  
        this.options.pointerCursor = this.options.pointerCursor || true;
        this._loader = this._newLoader();
    },

    _newLoader : function() {
        return this.options.loader || new UtfGrid.GridLoader(this.options);
    },

    /**
     * Returns an object from UTF grid corresponding to the coordinates of the
     * mouse event.
     */
    _objectForEvent : function(e, callback) {
        var map = this._map;
        var zoom = map.getZoom();
        var point = map.project(e.latlng);
        var pos = this._getTilePosition(point);
        this._loader.loadTile(zoom, pos, function(err, tile) {
            if (err) {
                callback(err);
                return;
            }
            var result;
            if (tile) {
                result = this._getTileObject(tile, point);
            }
            callback(null, {
                latlng : e.latlng,
                data : result
            });
        }.bind(this));
    },

    /**
     * Returns an object from the specified tile corresponding to the given
     * position.
     */
    _getTileObject : function(tile, point) {
        var gridX = this._getTileShift(point.x);
        var gridY = this._getTileShift(point.y);
        var idx = this._utfDecode(tile.grid[gridY].charCodeAt(gridX));
        var key = tile.keys[idx];
        var result = this._processData(tile.data[key]);
        return result;
    },

    /** Sets a new URL template. */
    setUrl : function(url) {
        if (this._loader.setUrl) {
            this._loader.setUrl(url);
        }
    },

    /**
     * Returns X/Y coordinates of the tile corresponding to the specified point
     * on the map
     */
    _getTilePosition : function(point) {
        var tileSize = this.options.tileSize;
        return L.point(Math.floor(point.x / tileSize), Math.floor(point.y
                / tileSize));
    },

    /**
     * Returns a list of all objects contained in the specified UTFGrid tile.
     */
    getTileObjects : function(tile) {
        var result = [];
        if (tile && tile.data) {
            var data = tile.data;
            result = Object.keys(data).map(function(key){
                return this._processData(data[key]);
            }, this);
        }
        return result;
    },

    /**
     * Pre-process individual data object before returning it to the caller.
     */
    _processData : function(data) {
        if (!data)
            return data;
        if (!this._processDataF) {
            this._processDataF = this.options.processData || //
            function(data) {
                return data;
            };
        }
        return this._processDataF(data);
    },

    /**
     * Returns position of the specified coordinates in a tile
     */
    _getTileShift : function(val) {
        var tileSize = this.options.tileSize;
        var resolution = this.options.resolution;
        return Math.floor((val - (Math.floor(val / tileSize) * tileSize)) / //
        resolution);
    },

    /**
     * Decodes the specified character and transforms it in an index
     */
    _utfDecode : function(ch) {
        if (ch >= 93) {
            ch--;
        }
        if (ch >= 35) {
            ch--;
        }
        return ch - 32;
    }

});

UtfGrid.GridLoader = GridLoader;

module.exports = UtfGrid;
