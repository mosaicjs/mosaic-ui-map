(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("promise"), require("leaflet"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["promise", "leaflet", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("promise"), require("leaflet"), require("react")) : factory(root["promise"], root["leaflet"], root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_46__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libDataSetLeafletAdapter = __webpack_require__(1);

	var _libDataSetLeafletAdapter2 = _interopRequireDefault(_libDataSetLeafletAdapter);

	var _libDataSetLeafletLayer = __webpack_require__(37);

	var _libDataSetLeafletLayer2 = _interopRequireDefault(_libDataSetLeafletLayer);

	var _libLeafletAdapter = __webpack_require__(2);

	var _libLeafletAdapter2 = _interopRequireDefault(_libLeafletAdapter);

	var _libLeafletClusterAdapter = __webpack_require__(40);

	var _libLeafletClusterAdapter2 = _interopRequireDefault(_libLeafletClusterAdapter);

	var _libLeafletInteractionLayer = __webpack_require__(41);

	var _libLeafletInteractionLayer2 = _interopRequireDefault(_libLeafletInteractionLayer);

	var _libLeafletPopupAdapter = __webpack_require__(36);

	var _libLeafletPopupAdapter2 = _interopRequireDefault(_libLeafletPopupAdapter);

	var _libLeafletTilesAdapter = __webpack_require__(42);

	var _libLeafletTilesAdapter2 = _interopRequireDefault(_libLeafletTilesAdapter);

	var _libLeafletUtfGrid = __webpack_require__(43);

	var _libLeafletUtfGrid2 = _interopRequireDefault(_libLeafletUtfGrid);

	var _libMapView = __webpack_require__(44);

	var _libMapView2 = _interopRequireDefault(_libMapView);

	var _libMapViewport = __webpack_require__(52);

	var _libMapViewport2 = _interopRequireDefault(_libMapViewport);

	var _libRegisterAdapters = __webpack_require__(53);

	var _libRegisterAdapters2 = _interopRequireDefault(_libRegisterAdapters);

	var _libTilesInfo = __webpack_require__(54);

	var _libTilesInfo2 = _interopRequireDefault(_libTilesInfo);

	exports['default'] = {
	    DataSetLeafletAdapter: _libDataSetLeafletAdapter2['default'],
	    DataSetLeafletLayer: _libDataSetLeafletLayer2['default'],
	    LeafletAdapter: _libLeafletAdapter2['default'],
	    LeafletClusterAdapter: _libLeafletClusterAdapter2['default'],
	    LeafletInteractionLayer: _libLeafletInteractionLayer2['default'],
	    LeafletPopupAdapter: _libLeafletPopupAdapter2['default'],
	    LeafletTilesAdapter: _libLeafletTilesAdapter2['default'],
	    LeafletUtfGrid: _libLeafletUtfGrid2['default'],
	    MapView: _libMapView2['default'],
	    MapViewport: _libMapViewport2['default'],
	    TilesInfo: _libTilesInfo2['default'],

	    registerAdapters: _libRegisterAdapters2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _LeafletAdapter2 = __webpack_require__(2);

	var _LeafletAdapter3 = _interopRequireDefault(_LeafletAdapter2);

	var _DataSetLeafletLayer = __webpack_require__(37);

	var _DataSetLeafletLayer2 = _interopRequireDefault(_DataSetLeafletLayer);

	var _DataSetClusteredLeafletLayer = __webpack_require__(38);

	var _DataSetClusteredLeafletLayer2 = _interopRequireDefault(_DataSetClusteredLeafletLayer);

	var DataSetLeafletAdapter = (function (_LeafletAdapter) {
	    _inherits(DataSetLeafletAdapter, _LeafletAdapter);

	    function DataSetLeafletAdapter() {
	        _classCallCheck(this, DataSetLeafletAdapter);

	        _get(Object.getPrototypeOf(DataSetLeafletAdapter.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(DataSetLeafletAdapter, [{
	        key: 'newMarker',
	        value: function newMarker() {
	            return null;
	        }

	        /**
	         * Returns a leaflet layer corresponding to the underlying item.
	         */
	    }, {
	        key: 'newLeafletLayer',
	        value: function newLeafletLayer() {
	            var dataSet = this.dataSet;
	            var LayerType = undefined;
	            if (dataSet.options.cluster) {
	                LayerType = _DataSetClusteredLeafletLayer2['default'];
	            } else {
	                LayerType = _DataSetLeafletLayer2['default'];
	            }
	            var options = {
	                dataSet: dataSet,
	                map: this.options.map,
	                mapLayout: this.options.mapLayout,
	                mapView: this.options.mapView,
	                selectedItems: this.options.selectedItems
	            };
	            return new LayerType(options);
	        }
	    }, {
	        key: 'dataSet',
	        get: function get() {
	            return this.item;
	        }
	    }]);

	    return DataSetLeafletAdapter;
	})(_LeafletAdapter3['default']);

	exports['default'] = DataSetLeafletAdapter;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _mosaicIntents = __webpack_require__(3);

	var _mosaicDataset = __webpack_require__(9);

	var _mosaicDatasetGeo = __webpack_require__(25);

	var _leaflet = __webpack_require__(35);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	var _LeafletPopupAdapter = __webpack_require__(36);

	var _LeafletPopupAdapter2 = _interopRequireDefault(_LeafletPopupAdapter);

	var LeafletAdapter = (function () {
	    function LeafletAdapter(options, item) {
	        _classCallCheck(this, LeafletAdapter);

	        this.options = options || {};
	        this.item = item || this.options.item;
	    }

	    _createClass(LeafletAdapter, [{
	        key: '_getPopupOffset',
	        value: function _getPopupOffset(layer) {
	            // Calculate the popup offset
	            var anchor = undefined;
	            if (layer._getPopupAnchor) {
	                anchor = layer._getPopupAnchor();
	            } else if (layer.options.icon) {
	                anchor = layer.options.icon.options.popupAnchor;
	            }
	            if (!anchor) {
	                anchor = [0, 0];
	            }
	            var offset = _leaflet2['default'].Popup.prototype.options.offset;
	            offset = _leaflet2['default'].point(anchor).add(offset);
	            return offset;
	        }
	    }, {
	        key: '_openPopup',
	        value: function _openPopup(layer) {
	            var that = this;
	            var intent = new _mosaicIntents.Intent({}, 'popup');
	            that._closePopup(layer).then(function () {
	                if (intent.handled) return;
	                if (!layer._popup) {
	                    layer._popup = new _leaflet2['default'].Popup({
	                        autoClose: true,
	                        closeOnClick: true,
	                        // keepInView : true,
	                        closeButton: true
	                    }, layer);
	                }
	                var latlng = undefined;
	                if (layer.getCenter) {
	                    latlng = layer.getCenter();
	                } else if (layer.getLatLng) {
	                    latlng = layer.getLatLng();
	                } else {
	                    latlng = that._getMarkerCoordinates();
	                }

	                layer._popup.options.offset = that._getPopupOffset(layer);
	                layer._popup.once('close', function () {
	                    intent.resolve(true);
	                });
	                //
	                layer._popup.setLatLng(latlng);
	                layer._popup.update();

	                var popupAdapter = that.item.getAdapter(_LeafletPopupAdapter2['default']);
	                var popupContent = popupAdapter.renderPopupContent({
	                    latlng: latlng
	                });
	                layer._popup.setContent(popupContent);

	                var onClose = undefined;
	                if (typeof layer.bindPopup) {
	                    layer.bindPopup(layer._popup);
	                    layer.openPopup();
	                    onClose = function () {
	                        layer.closePopup();
	                    };
	                } else {
	                    (function () {
	                        var map = layer._map;
	                        onClose = function () {
	                            map.removeLayer(layer._popup);
	                        };
	                        map.addLayer(layer._popup);
	                    })();
	                }
	                layer._popupIntent = intent;
	                intent.then(function () {
	                    delete layer._popupIntent;
	                });
	                intent.after(onClose, onClose);
	            });
	            return intent;
	        }
	    }, {
	        key: '_closePopup',
	        value: function _closePopup(layer) {
	            var promise = undefined;
	            if (layer._popupIntent) {
	                promise = layer._popupIntent.promise;
	                layer._popupIntent.resolve();
	            } else {
	                promise = Promise.resolve();
	            }
	            return promise;
	        }
	    }, {
	        key: 'selectLayer',
	        value: function selectLayer(layer) {
	            return this._openPopup(layer);
	        }
	    }, {
	        key: 'deselectLayer',
	        value: function deselectLayer(layer) {
	            return this._closePopup(layer);
	        }

	        /**
	         * Returns a Laflet L.LatLng object with coordinates of the marker position
	         * for this resource.
	         */
	    }, {
	        key: '_getMarkerCoordinates',
	        value: function _getMarkerCoordinates() {
	            var data = this.item.data;
	            if (data.type !== 'Feature') return;
	            if (!data.geometry || !data.geometry.type) return;
	            var adapter = this.item.getAdapter(_mosaicDatasetGeo.GeoJsonAdapter);
	            var center = adapter.center;
	            return _leaflet2['default'].latLng([center[1], center[0]]);
	        }

	        /**
	         * Returns a marker corresponding to the underlying resource.
	         */
	    }, {
	        key: 'newMarker',
	        value: function newMarker() {
	            var latlng = this._getMarkerCoordinates();
	            var options = {};
	            for (var key in this.options) {
	                options[key] = this.options[key];
	            }
	            var radius = 20;
	            var icon = new MarkerIcon({
	                // radius : radius + 'px',
	                // iconAnchor: [radius / 2, 0],
	                style: {
	                    border: '2px solid gray',
	                    backgroundColor: 'white'
	                }
	            });
	            var marker = _leaflet2['default'].marker(latlng, {
	                icon: icon,
	                riseOnHover: true
	            });
	            return marker;
	        }

	        /**
	         * Returns a leaflet layer corresponding to the underlying data item.
	         */
	    }, {
	        key: 'newLeafletLayer',
	        value: function newLeafletLayer() {
	            var data = this.item.data;
	            var options = {};
	            var result = _leaflet2['default'].GeoJSON.geometryToLayer(data, (function (json) {
	                return this.newMarker();
	            }).bind(this), _leaflet2['default'].GeoJSON.coordsToLatLng, options);
	            var selectedItems = this.options.selectedItems;
	            if (result && selectedItems) {
	                result.on('click', (function (ev) {
	                    selectedItems.toggle(this.item);
	                }).bind(this));
	            }
	            return result;
	        }
	    }, {
	        key: 'deleteLeafletLayer',
	        value: function deleteLeafletLayer(layer) {
	            this.deselectLayer(layer);
	        }
	    }]);

	    return LeafletAdapter;
	})();

	exports['default'] = LeafletAdapter;

	var MarkerIcon = (function (_L$DivIcon) {
	    _inherits(MarkerIcon, _L$DivIcon);

	    function MarkerIcon(options) {
	        _classCallCheck(this, MarkerIcon);

	        _get(Object.getPrototypeOf(MarkerIcon.prototype), 'constructor', this).call(this, options);
	    }

	    _createClass(MarkerIcon, [{
	        key: 'createIcon',
	        value: function createIcon(oldIcon) {
	            var icon = _get(Object.getPrototypeOf(MarkerIcon.prototype), 'createIcon', this).call(this, oldIcon);
	            var radius = this.options.radius || '25px';
	            icon.style.border = '1px solid gray';
	            icon.style.background = 'white'; // 'transparent';
	            icon.style.width = radius;
	            icon.style.height = radius;
	            icon.style.WebkitBorderRadius = radius;
	            icon.style.MozBorderRadius = radius;
	            icon.style.borderRadius = radius;
	            if (this.options.style) {
	                for (var key in this.options.style) {
	                    icon.style[key] = this.options.style[key];
	                }
	            }

	            return icon;
	        }
	    }]);

	    return MarkerIcon;
	})(_leaflet2['default'].DivIcon);

	LeafletAdapter.MarkerIcon = MarkerIcon;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libIntent = __webpack_require__(4);

	var _libIntent2 = _interopRequireDefault(_libIntent);

	var _libIntents = __webpack_require__(7);

	var _libIntents2 = _interopRequireDefault(_libIntents);

	var _libSingleton = __webpack_require__(8);

	var _libSingleton2 = _interopRequireDefault(_libSingleton);

	exports['default'] = {
	    Intent: _libIntent2['default'],
	    Intents: _libIntents2['default'],
	    Singleton: _libSingleton2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _promise = __webpack_require__(5);

	var _promise2 = _interopRequireDefault(_promise);

	var _events = __webpack_require__(6);

	var Intent = (function (_EventEmitter) {
	    _inherits(Intent, _EventEmitter);

	    function Intent(params, key) {
	        _classCallCheck(this, Intent);

	        _get(Object.getPrototypeOf(Intent.prototype), 'constructor', this).call(this);
	        var that = this;
	        that.params = params;
	        if (key) {
	            that.key = key;
	        }
	        that.handled = false;
	        that._after = [];
	        that._innerPromise = new _promise2['default'](function (resolve, reject) {
	            that.resolve = function (result) {
	                that.handled = true;
	                resolve(result);
	                return that;
	            };
	            that.reject = function (err) {
	                that.handled = true;
	                reject(err);
	                return that;
	            };
	        });
	        that.promise = that._innerPromise.then(function (res) {
	            if (that._after.length) {
	                return _promise2['default'].all(that._after).then(function () {
	                    return res;
	                }, function (err) {
	                    throw err;
	                });
	            }
	            return res;
	        });
	        that.finalize = that['finally'] = function (method) {
	            return that.then(function (result) {
	                try {
	                    method(null, result);
	                } catch (e) {}
	                return result;
	            }, function (err) {
	                try {
	                    method(err);
	                } catch (e) {}
	                throw err;
	            });
	        };
	    }

	    _createClass(Intent, [{
	        key: 'then',
	        value: function then(onResolve, onReject) {
	            return this.promise.then(onResolve, onReject);
	        }

	        /**
	         * The specified action will be executed just after the main promise is
	         * resolved.
	         */
	    }, {
	        key: 'after',
	        value: function after(onResolve, onReject) {
	            var res = this._innerPromise.then(onResolve, onReject);
	            this._after.push(res);
	            return res;
	        }
	    }]);

	    return Intent;
	})(_events.EventEmitter);

	exports['default'] = Intent;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function (n) {
	  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function (type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events) this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler)) return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        len = arguments.length;
	        args = new Array(len - 1);
	        for (i = 1; i < len; i++) args[i - 1] = arguments[i];
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    len = arguments.length;
	    args = new Array(len - 1);
	    for (i = 1; i < len; i++) args[i - 1] = arguments[i];

	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++) listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function (type, listener) {
	  var m;

	  if (!isFunction(listener)) throw TypeError('listener must be a function');

	  if (!this._events) this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    var m;
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function (type, listener) {
	  if (!isFunction(listener)) throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function (type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener)) throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type]) return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener || isFunction(list.listener) && list.listener === listener) {
	    delete this._events[type];
	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0) return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function (type) {
	  var key, listeners;

	  if (!this._events) return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else {
	    // LIFO order
	    while (listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function (type) {
	  var ret;
	  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.listenerCount = function (emitter, type) {
	  var ret;
	  if (!emitter._events || !emitter._events[type]) ret = 0;else if (isFunction(emitter._events[type])) ret = 1;else ret = emitter._events[type].length;
	  return ret;
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _events = __webpack_require__(6);

	var _Intent = __webpack_require__(4);

	var _Intent2 = _interopRequireDefault(_Intent);

	function Intents(obj) {
	    obj = obj || this;
	    _events.EventEmitter.apply(obj);
	}
	extend(Intents.prototype, {
	    intent: function intent(key, params) {
	        var intent = this._newIntent(key, params);
	        return this.fireIntent(key, intent);
	    },
	    action: function action(key, params, _action) {
	        if (_action === undefined) {
	            _action = params;
	            params = undefined;
	        }
	        var intent = this._newIntent(key, params);
	        return this.runAction(key, intent, _action);
	    },
	    fireIntent: function fireIntent(key, intent) {
	        try {
	            this.emit(key, intent);
	        } catch (err) {
	            intent.reject(err);
	        }
	        return intent;
	    },
	    runAction: function runAction(key, intent, action) {
	        try {
	            var that = this;
	            intent = that.fireIntent(key, intent);
	            if (!intent.handled) {
	                var result = action.call(that, intent);
	                if (result !== undefined && !intent.handled) {
	                    intent.resolve(result);
	                }
	            }
	        } catch (err) {
	            intent.reject(err);
	        }
	        return intent;
	    },
	    _newIntent: function _newIntent(key, params) {
	        return new _Intent2['default'](params, key);
	    }
	}, _events.EventEmitter.prototype);

	Intents.addTo = function (Type) {
	    extend(Type.prototype, Intents.prototype);
	};

	function extend(to) {
	    for (var i = 1; i < arguments.length; i++) {
	        var from = arguments[i];
	        for (var key in from) {
	            if (!to[key] && Object.prototype.hasOwnProperty.call(from, key)) {
	                to[key] = from[key];
	            }
	        }
	    }
	}

	exports['default'] = Intents;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _promise = __webpack_require__(5);

	var _promise2 = _interopRequireDefault(_promise);

	exports['default'] = {
	    singletonPromise: function singletonPromise(method) {
	        function runAction(params) {
	            params = params || {};
	            for (var key in params) {
	                runAction.params[key] = params[key];
	            }
	            if (!runAction.promise) {
	                runAction.promise = _promise2['default'].resolve().then(function (result) {
	                    delete runAction.promise;
	                    runAction.params = {};
	                    return method.call(that, params);
	                });
	            }
	            return runAction.promise;
	        }
	        runAction.params = {};
	        runAction.promise;
	        return runAction;
	    },
	    singletonAction: function singletonAction(that, actionName, action) {
	        function runAction(params) {
	            params = params || {};
	            for (var key in params) {
	                runAction.params[key] = params[key];
	            }
	            if (!runAction.intent) {
	                runAction.intent = that.action(actionName, runAction.params, function (n) {
	                    function clear() {
	                        if (n === runAction.intent) {
	                            runAction.params = {};
	                            delete runAction.intent;
	                        }
	                    }
	                    n.after(clear, clear);
	                    return action.call(that, n);
	                });
	            }
	            return runAction.intent;
	        }
	        runAction.params = {};
	        return runAction;
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libData = __webpack_require__(10);

	var _libData2 = _interopRequireDefault(_libData);

	var _libDataSet = __webpack_require__(16);

	var _libDataSet2 = _interopRequireDefault(_libDataSet);

	var _libDerivativeDataSet = __webpack_require__(21);

	var _libDerivativeDataSet2 = _interopRequireDefault(_libDerivativeDataSet);

	var _libDataSetFiltered = __webpack_require__(22);

	var _libDataSetFiltered2 = _interopRequireDefault(_libDataSetFiltered);

	var _libDataSetPaginated = __webpack_require__(23);

	var _libDataSetPaginated2 = _interopRequireDefault(_libDataSetPaginated);

	var _libDataSetSelection = __webpack_require__(24);

	var _libDataSetSelection2 = _interopRequireDefault(_libDataSetSelection);

	exports['default'] = {
	    Data: _libData2['default'],
	    DataSet: _libDataSet2['default'],
	    DerivativeDataSet: _libDerivativeDataSet2['default'],
	    DataSetFiltered: _libDataSetFiltered2['default'],
	    DataSetPaginated: _libDataSetPaginated2['default'],
	    DataSetSelection: _libDataSetSelection2['default'],
	    registerDataSetAdapters: function registerDataSetAdapters(adapters) {
	        adapters.registerAdapter(_libDataSet2['default'], _libDataSetFiltered2['default']);
	        adapters.registerAdapter(_libDataSet2['default'], _libDataSetPaginated2['default']);
	        adapters.registerAdapter(_libDataSet2['default'], _libDataSetSelection2['default']);
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _mosaicAdapters = __webpack_require__(11);

	var idCounter = 0;
	/**
	 * 
	 */

	var Data = (function (_Adaptable) {
	    _inherits(Data, _Adaptable);

	    /**
	     * This constructor initializes this wrapper and sets the internal data.
	     * 
	     * @param options.adapters
	     *            an adapter manager used to generate data adapters
	     * @param options.data
	     *            the data object
	     */

	    function Data(options) {
	        var _get2;

	        _classCallCheck(this, Data);

	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	        }

	        (_get2 = _get(Object.getPrototypeOf(Data.prototype), 'constructor', this)).call.apply(_get2, [this, options].concat(args));
	        this.data = options ? options.data : undefined;
	    }

	    /**
	     * Returns the type key for this item. This is a shortcut for the
	     * "getTypeKey" method.
	     */

	    _createClass(Data, [{
	        key: 'getTypeKey',

	        /**
	         * Returns the type key for this item.
	         */
	        value: function getTypeKey() {
	            var type = this.get('properties.type') || this.get('type');
	            if (type) {
	                type = _mosaicAdapters.TypeKey.getTypeKey(type);
	            } else {
	                // Use the class hierarchy if type is not defined in the data
	                type = _mosaicAdapters.TypeKey.getTypeKey.apply(this);
	            }
	            return type;
	        }

	        /**
	         * Returns the internal data managed by this item.
	         */
	    }, {
	        key: 'get',

	        /**
	         * Returns a value corresponding to the specified path.
	         * 
	         * @param path
	         *            an segment name array or a string path where individual
	         *            segments are separated by the '.' symbol
	         */
	        value: function get(path) {
	            if (typeof path === 'string') {
	                var array = path.split('.');
	                return this.get(array);
	            }
	            var data = this.data;
	            var len = path ? path.length : 0;
	            var i = undefined;
	            for (i = 0; data && i < len; i++) {
	                var segment = path[i];
	                data = data[segment];
	            }
	            return i === len ? data : null;
	        }

	        /**
	         * Sets a new value for the specified path.
	         */
	    }, {
	        key: 'set',
	        value: function set(path, value) {
	            if (typeof path === 'string') {
	                var array = path.split('.');
	                return this.set(array, value);
	            }
	            var data = this.data;
	            var len = path ? path.length : 0;
	            var i = undefined;
	            for (i = 0; i < len - 1; i++) {
	                var segment = path[i];
	                var next = data[segment];
	                if (!next) break;
	                data = next;
	            }
	            // Add missing objects
	            for (; i < len - 1; i++) {
	                var segment = path[i];
	                data = data[segment] = {};
	            }
	            if (data) {
	                var segment = path[path.length - 1];
	                data[segment] = value;
	            }
	            return this;
	        }

	        /**
	         * Visits this data object
	         * 
	         * @param visitor.before
	         *            this method is called before this data object is visited
	         * @param visitor.after
	         *            this method is called after this data object is visited
	         */
	    }, {
	        key: 'visit',
	        value: function visit(visitor) {
	            if (visitor.before) {
	                visitor.before.call(visitor, this);
	            }
	            if (visitor.after) {
	                visitor.after.call(visitor, this);
	            }
	        }
	    }, {
	        key: 'type',
	        get: function get() {
	            return this.getTypeKey();
	        }
	    }, {
	        key: 'data',
	        get: function get() {
	            return this._data;
	        },

	        /**
	         * Associates a new data object with this item.
	         */
	        set: function set(d) {
	            if (d instanceof Data) {
	                d = d.data;
	            }
	            this._data = d || {};
	            delete this._id;
	            return this._data;
	        }

	        /**
	         * Returns this data object identifier. By default this method seeks the
	         * identifier in the "id" field of the underlying data object. If there is
	         * no such an identifier then this method generates a local ID stored in
	         * this data object.
	         */
	    }, {
	        key: 'id',
	        get: function get() {
	            var id = this.data.id;
	            if (id === undefined) {
	                id = this._id = this._id || ++idCounter;
	            }
	            return id;
	        }
	    }]);

	    return Data;
	})(_mosaicAdapters.Adaptable);

	exports['default'] = Data;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libTypeKey = __webpack_require__(12);

	var _libTypeKey2 = _interopRequireDefault(_libTypeKey);

	var _libAdapterManager = __webpack_require__(13);

	var _libAdapterManager2 = _interopRequireDefault(_libAdapterManager);

	var _libAdapter = __webpack_require__(14);

	var _libAdapter2 = _interopRequireDefault(_libAdapter);

	var _libAdaptable = __webpack_require__(15);

	var _libAdaptable2 = _interopRequireDefault(_libAdaptable);

	exports['default'] = {
	    TypeKey: _libTypeKey2['default'],
	    AdapterManager: _libAdapterManager2['default'],
	    Adapter: _libAdapter2['default'],
	    Adaptable: _libAdaptable2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * This object contains utility mix-in methods returning object types as a
	 * TypeKey instance. The main method in the mixin is "getTypeKey" which returns
	 * type keys for classes, objects and strings. To build a type key for a class
	 * this method uses class names of the specified class and all their parents.
	 * For objects (class instances) this method uses the "getTypeKey" method if it
	 * is defined on the object. If there is no such a method then the object type
	 * (class) is used to get the key. The "getTypeKey" method can be used to
	 * transform strings to type keys. Type keys form hierarchies using the "/"
	 * symbol as a separator between individual type keys (Example:
	 * "Art/AbstractArt/Cubism" is a child of "Art/AbstractArt"). The
	 * TypeKey.getTypeParentKey method can be used to get parent type key.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var typeCounter = 0;
	var keyCounter = 0;
	var keyIndex = {};
	var typeIndex = {};

	var TypeKey = (function () {
	    function TypeKey(str) {
	        _classCallCheck(this, TypeKey);

	        this.id = typeCounter++;
	        this.key = str ? str + '' : '';
	    }

	    /**
	     * Returns an array of string segments of this key
	     */

	    _createClass(TypeKey, [{
	        key: 'getParentKey',
	        value: function getParentKey() {
	            var segments = this.segments;
	            segments.pop();
	            var key = getKeyFromSegments(segments);
	            return key;
	        }

	        /**
	         * Returns a type key for a child type.
	         */
	    }, {
	        key: 'getChildKey',
	        value: function getChildKey(segments) {
	            var array = getKeySegmentsFromString(segments);
	            if (!array.length) return null;
	            array = this.segments.concat(array);
	            var key = getKeyFromSegments(array);
	            return key;
	        }

	        /**
	         * Calls the specified function starting from the given to the top. If the
	         * specified action returns the "false" value then this method interrupt
	         * iterations.
	         * 
	         * @param return
	         *            the result of the last call to the action
	         */
	    }, {
	        key: 'forEach',
	        value: function forEach(action, context) {
	            var i = 0;
	            var array = this.segments;
	            var result = undefined;
	            while (array.length) {
	                var k = i === 0 ? this : getKeyFromSegments(array);
	                result = action.call(context, k, i++);
	                if (result === false) break;
	                array.pop();
	            }
	            return result;
	        }

	        // ---------------------------------------------------------------------
	        // Public static methods and fields
	        // ---------------------------------------------------------------------

	    }, {
	        key: 'segments',
	        get: function get() {
	            return getKeySegmentsFromString(this.key);
	        }

	        /**
	         * Returns a key for the parent type.
	         */
	    }, {
	        key: 'parent',
	        get: function get() {
	            return this.getParentKey();
	        }
	    }], [{
	        key: 'fromString',
	        value: function fromString(str) {
	            if (!str) return null;
	            var key = keyIndex[str];
	            if (!key) {
	                key = keyIndex[str] = new TypeKey(str);
	            }
	            return key;
	        }

	        /**
	         * Returns the type for the specified object. If the object is not defined
	         * then this method uses 'this' instead. If the specified parameter is a
	         * function then the key type is defined for the hierarchy of classes. If
	         * the given object contains a 'getTypeKey' method then it is used instead.
	         */
	    }, {
	        key: 'for',
	        value: function _for(obj) {
	            return TypeKey.getTypeKey(obj);
	        }
	    }, {
	        key: 'getTypeKey',
	        value: function getTypeKey(obj) {
	            if (!obj) {
	                obj = this;
	            } else if (typeof obj.getTypeKey === 'function') {
	                return obj.getTypeKey();
	            }
	            var key = undefined;
	            if (obj instanceof TypeKey) {
	                key = obj.key;
	            } else if (typeof obj === 'string') {
	                key = obj;
	            } else {
	                var proto = undefined;
	                if (typeof obj === 'function') {
	                    proto = obj.prototype;
	                } else {
	                    proto = Object.getPrototypeOf(obj);
	                }
	                var array = [];
	                while (proto) {
	                    var classKey = TypeKey.getClassKey(proto.constructor);
	                    array.push(classKey);
	                    proto = Object.getPrototypeOf(proto);
	                }
	                array.reverse();
	                key = array.join('/');
	            }
	            return TypeKey.fromString(key);
	        }

	        /**
	         * Returns a unique identifier of this class.
	         */
	    }, {
	        key: 'getClassId',
	        value: function getClassId(cls, create) {
	            var typeId = cls.__type_id;
	            if (!typeId && create !== false) {
	                typeId = cls.__type_id = ++typeCounter;
	            }
	            return typeId;
	        }

	        /**
	         * Returns a unique string key for the specified type (JS function).
	         */
	    }, {
	        key: 'getClassKey',
	        value: function getClassKey(cls) {
	            var typeId = TypeKey.getClassId(cls);
	            var key = cls.name;
	            if (!key) {
	                // If the specified function do not have a name then we generate
	                // a unique type key using the type identifier.
	                key = 'Type-' + typeId;
	            } else {
	                // The specified function has a name.
	                // We have to check that this name is unique and there is no
	                // collision with an another function. Another function has
	                // a different type identifier.
	                var ids = typeIndex[key] = typeIndex[key] || [];
	                // Use a binary search to find our type ID in the list of existing.
	                // We can use a binary search because the ids array is ordered.
	                var pos = binarySearch(ids, typeId);
	                if (pos < 0) {
	                    pos = ids.length;
	                    ids.push(typeId);
	                }
	                if (pos !== 0) {
	                    key = key + '-' + pos;
	                }
	            }
	            return key;
	        }

	        /**
	         * This method resets the internal index of types. It is used only for
	         * debugging and test purposes.
	         */
	    }, {
	        key: 'reset',
	        value: function reset() {
	            typeIndex = {};
	        }
	    }]);

	    return TypeKey;
	})();

	exports['default'] = TypeKey;

	function binarySearch(array, value) {
	    var min = 0;
	    var max = array.length - 1;
	    var idx = undefined;
	    var val = undefined;
	    while (min <= max) {
	        idx = min + max >> 1;
	        val = array[idx];
	        if (val < value) {
	            min = idx + 1;
	        } else if (val > value) {
	            max = idx - 1;
	        } else {
	            return idx;
	        }
	    }
	    return -1;
	}

	/**
	 * Returns a new type key by joining all segments from the specified array.
	 */
	function getKeyFromSegments(array) {
	    var str = array.join('/');
	    return str ? TypeKey.fromString(str) : null;
	}

	/**
	 * Returns an array of key segments
	 */
	function getKeySegmentsFromString(key) {
	    if (!key) return [];
	    return (key + '').split('/');
	}
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _TypeKey = __webpack_require__(12);

	var _TypeKey2 = _interopRequireDefault(_TypeKey);

	/**
	 * An adapter manager used to register/retrieve objects corresponding to the
	 * types of adaptable object and the types of the target object.
	 */

	var AdapterManager = (function () {

	    /**
	     * Constructor of this class. Initializes index of adapters and an internal
	     * cache.
	     */

	    function AdapterManager() {
	        _classCallCheck(this, AdapterManager);

	        this._adapters = {};
	        this._cache = {};
	    }

	    /**
	     * Registers a new adapter from one type to another.
	     * 
	     * @param from
	     *            the type of the adaptable object
	     * @param to
	     *            type of the target object
	     * @param adapter
	     *            the adapter type
	     */

	    _createClass(AdapterManager, [{
	        key: 'registerAdapter',
	        value: function registerAdapter(from, to, adapter) {
	            if (adapter === undefined) {
	                adapter = to;
	            }
	            var fromType = _TypeKey2['default']['for'](from);
	            var toType = _TypeKey2['default']['for'](to);
	            toType.forEach(function (t) {
	                var key = this._getAdapterKey(fromType, t);
	                var slot = this._adapters[key];
	                if (slot && slot.direct) return false;
	                this._adapters[key] = {
	                    adapter: adapter,
	                    direct: t === toType
	                };
	            }, this);
	            this._cache = {};
	        }

	        /** Removes an adapter from one type to another. */
	    }, {
	        key: 'removeAdapter',
	        value: function removeAdapter(from, to) {
	            var fromType = _TypeKey2['default'].getTypeKey(from);
	            var toType = _TypeKey2['default'].getTypeKey(to);
	            var result = undefined;
	            toType.forEach(function (t) {
	                var key = this._getAdapterKey(fromType, t);
	                var slot = this._adapters[key];
	                if (slot) {
	                    var remove = undefined;
	                    if (t === toType) {
	                        result = slot.adapter;
	                        remove = true;
	                    } else {
	                        if (slot.direct) return false;
	                        remove = slot.adapter === result;
	                    }
	                    if (remove) {
	                        delete this._adapters[key];
	                    }
	                }
	            }, this);
	            this._cache = {};
	            return result;
	        }

	        /**
	         * Returns an adapter of one type to another type. This method caches
	         * adapter for each unique combination of keys.
	         * 
	         * @param from
	         *            the type of the adaptable object
	         * @param to
	         *            type of the adapter
	         * @return
	         */
	    }, {
	        key: 'getAdapter',
	        value: function getAdapter(from, to) {
	            var fromType = _TypeKey2['default'].getTypeKey(from);
	            var toType = _TypeKey2['default'].getTypeKey(to);
	            var cacheKey = this._getAdapterKey(fromType, toType);
	            var result = this._cache[cacheKey];
	            if (!result && !(cacheKey in this._cache)) {
	                fromType.forEach(function (f) {
	                    var key = this._getAdapterKey(f, toType);
	                    var slot = this._adapters[key];
	                    result = slot ? slot.adapter : undefined;
	                    if (result) return false;
	                }, this);
	                this._cache[cacheKey] = result;
	            }
	            return result;
	        }

	        /**
	         * Creates and returns a new adapter from one type to another. If the
	         * registered adapter is a function then it is used as constructor to create
	         * a new object.
	         * 
	         * @param from
	         *            key of the type of the object for which we want to find an
	         *            adapter
	         * @param to
	         *            the key of the adapter
	         * @param a
	         *            new adapter instance
	         */
	    }, {
	        key: 'newAdapter',
	        value: function newAdapter(from, to, options) {
	            var result = null;
	            var adapter = this.getAdapter(from, to);
	            var AdapterType = adapter || to;
	            if (typeof AdapterType === 'function') {
	                options = options || {};
	                result = new AdapterType(options, from, to);
	            } else {
	                result = adapter;
	            }
	            return result;
	        }

	        /**
	         * Returns a key used to find adapters from one type to another.
	         * 
	         * @param from
	         *            the type of the adaptable object
	         * @param to
	         *            type of the target object
	         * @return a new adapter key
	         */
	    }, {
	        key: '_getAdapterKey',
	        value: function _getAdapterKey(from, to) {
	            var key = from.id + ':' + to.id;
	            return key;
	        }
	    }]);

	    return AdapterManager;
	})();

	exports['default'] = AdapterManager;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * A super-class for adapters.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var KEY_FROM = Symbol['for']('_from');
	var KEY_TO = Symbol['for']('_to');

	var Adapter = (function () {

	    /**
	     * Constructor of this class.
	     * 
	     * @param options
	     * @param from
	     *            the adapter object
	     * @param to
	     *            the type of the adapter; this instance is used as an adapter
	     *            for the specified type
	     */

	    function Adapter(options, from, to) {
	        _classCallCheck(this, Adapter);

	        this.adaptable = from;
	        this.adapterType = to;
	    }

	    /**
	     * Returns reference to the main adapted object.
	     */

	    _createClass(Adapter, [{
	        key: 'adaptable',
	        get: function get() {
	            return this[KEY_FROM];
	        },

	        /**
	         * Sets a new adaptable object
	         */
	        set: function set(adaptable) {
	            if (adaptable !== undefined) {
	                this[KEY_FROM] = adaptable;
	            } else {
	                delete this[KEY_FROM];
	            }
	        }

	        /**
	         * Returns the adaptable type.
	         */
	    }, {
	        key: 'adapterType',
	        get: function get() {
	            return this[KEY_TO];
	        },

	        /**
	         * Sets a new adaptable object
	         */
	        set: function set(type) {
	            if (!!type) {
	                this[KEY_TO] = type;
	            } else {
	                delete this[KEY_TO];
	            }
	        }
	    }]);

	    return Adapter;
	})();

	exports['default'] = Adapter;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _TypeKey = __webpack_require__(12);

	var _TypeKey2 = _interopRequireDefault(_TypeKey);

	var _Adapter2 = __webpack_require__(14);

	var _Adapter3 = _interopRequireDefault(_Adapter2);

	/**
	 * A super-class for all adaptable object. Objects of this type use an internal
	 * adapter manager to instantiate adapters and store them in an internal cache.
	 */
	var ADAPTERS = Symbol['for']('adapters');

	var Adaptable = (function (_Adapter) {
	    _inherits(Adaptable, _Adapter);

	    /**
	     * Constructor of this class.
	     * 
	     * @param options.adapters
	     *            a mandatory instance of the "AdapterManager" class
	     * @param from
	     *            optional parent adaptable object; this parameter is defined
	     *            only if this instance is used as an adapter itself for another
	     *            object
	     * @param to
	     *            optional adapter type for the parent object; this parameter is
	     *            defined only if this instance is used as an adapter itself for
	     *            another object
	     */

	    function Adaptable(options) {
	        var _get2;

	        _classCallCheck(this, Adaptable);

	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	        }

	        (_get2 = _get(Object.getPrototypeOf(Adaptable.prototype), 'constructor', this)).call.apply(_get2, [this, options].concat(args));
	        var adapters = undefined;
	        if (options) {
	            adapters = options.adapters;
	        }
	        if (!adapters) {
	            // This object is used as an adapter itself.
	            // So try to get the adapters from this parent object.
	            var adaptable = this.adaptable;
	            adapters = adaptable ? adaptable.adapters : undefined;
	        }
	        this.adapters = adapters;
	    }

	    /**
	     * Returns reference to the internal adapters manager.
	     */

	    _createClass(Adaptable, [{
	        key: 'setAdapter',

	        /**
	         * Sets a new object adapter. This adapter is stored in an internal object
	         * cache.
	         * 
	         * @param adapterType
	         *            the type of the adapter to set
	         * @param adapter
	         *            a new adapter to set
	         * @return this object
	         */
	        value: function setAdapter(adapterType, adapter) {
	            if (adapter) {
	                var cache = this._getAdaptersCache();
	                var key = _TypeKey2['default'].getTypeKey(adapterType);
	                cache[key.id] = adapter;
	            }
	            return this;
	        }

	        /**
	         * Returns an adapter for this object corresponding to the specified adapter
	         * type. The resulting adapter is stored in an internal object-specific
	         * adapter cache. To clear adapter cache use the "clearAdapters" method.
	         * 
	         * @param adapterType
	         *            the type of the adapter to return
	         * @param options
	         *            options used to create a new adapter; if an adapter already
	         *            exists then this parameter is ignored
	         * @return an adapter instance (if any)
	         */
	    }, {
	        key: 'getAdapter',
	        value: function getAdapter(adapterType, options) {
	            var cache = this._getAdaptersCache();
	            var key = _TypeKey2['default'].getTypeKey(adapterType);
	            var result = cache[key.id];
	            if (!result && !(key.id in cache)) {
	                result = this.newAdapter(adapterType, options);
	                cache[key.id] = result;
	            }
	            return result;
	        }

	        /**
	         * Creates and returns a new adapter for this object.
	         * 
	         * @param adapterType
	         *            the type of the adapter to create
	         * @param options
	         *            options used to create a new adapter; if an adapter already
	         *            exists then it does not take into account
	         * @return a newly created adapter instance
	         */
	    }, {
	        key: 'newAdapter',
	        value: function newAdapter(adapterType, options) {
	            var result = this.adapters.newAdapter(this, adapterType, options);
	            return result;
	        }

	        /**
	         * This method removes object adapters of the specified types. If types are
	         * not defined then all cached adapters are removed.
	         * 
	         * @param adapterTypes
	         *            a list of adapter types to remove from the cache
	         */
	    }, {
	        key: 'clearAdapters',
	        value: function clearAdapters(adapterTypes) {
	            if (!this.__adapters) return;
	            if (!adapterTypes || !adapterTypes.length) {
	                delete this.__adapters;
	            } else {
	                for (var i = 0; i < adapterTypes.length; i++) {
	                    var adapterType = adapterTypes[i];
	                    var key = _TypeKey2['default'].getTypeKey(adapterType);
	                    delete this.__adapters[key.id];
	                }
	                if (!Object.keys(this.__adapters).length) {
	                    delete this.__adapters;
	                }
	            }
	            return this;
	        }

	        /** Returns an internal object-specific adapters cache. */
	    }, {
	        key: '_getAdaptersCache',
	        value: function _getAdaptersCache() {
	            if (!this.__adapters) {
	                this.__adapters = {};
	            }
	            return this.__adapters;
	        }
	    }, {
	        key: 'adapters',
	        get: function get() {
	            return this[ADAPTERS];
	        },

	        /**
	         * Sets a new adapter manager.
	         */
	        set: function set(adapters) {
	            this[ADAPTERS] = adapters;
	        }
	    }]);

	    return Adaptable;
	})(_Adapter3['default']);

	exports['default'] = Adaptable;

	Adaptable.prototype.getTypeKey = _TypeKey2['default'].getTypeKey;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var _bind = Function.prototype.bind;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _mosaicIntents = __webpack_require__(17);

	var _mosaicAdapters = __webpack_require__(11);

	var _Data2 = __webpack_require__(10);

	var _Data3 = _interopRequireDefault(_Data2);

	var DATA_SET_KEY = Symbol('_dataSet');

	var DataSet = (function (_Data) {
	    _inherits(DataSet, _Data);

	    /**
	     * Class constructor. It defines data array and registers event listeners
	     * updating internal data indexes.
	     */

	    function DataSet(options) {
	        var _get2;

	        _classCallCheck(this, DataSet);

	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	        }

	        (_get2 = _get(Object.getPrototypeOf(DataSet.prototype), 'constructor', this)).call.apply(_get2, [this, options].concat(args));
	        (0, _mosaicIntents.Intents)(this);
	        this.options = options || {};
	        this.items = this.options.items;
	        if (this.options.DataType) {
	            // Re-define the type of managed data objects
	            this.DataType = this.options.DataType;
	        }
	        if (this.adaptable && !this.adapters) {
	            this.adapters = this.adaptable.adapters;
	        }
	        var parentDataSet = this.dataSet;
	        if (parentDataSet) {
	            // Tries to copy the resource type from the main adaptable instance
	            this.DataType = parentDataSet.DataType || this.DataType;
	            if (!this.adapters) {
	                this.adapters = parentDataSet.adapters;
	            }
	        }
	        if (!this.adapters) {
	            this.adapters = new _mosaicAdapters.AdapterManager();
	        }
	    }

	    /** Access to the internal dataset */

	    _createClass(DataSet, [{
	        key: 'close',

	        /** Do-nothing destructor */
	        value: function close() {}

	        /** Returns an options value. */
	    }, {
	        key: '_getOptionsValue',
	        value: function _getOptionsValue(key, defaultValue) {
	            return this.options[key] || defaultValue;
	        }

	        /**
	         * Returns a list of all managed data.
	         */
	    }, {
	        key: 'setItems',

	        /**
	         * Sets a list of new data items. If the specified list contains non-Data
	         * instances then they are wrapped in a Data container.
	         */
	        value: function setItems(items) {
	            return this.update(function () {
	                this._items = [];
	                this._index = {};
	                var len = items ? items.length || 0 : 0;
	                for (var pos = 0; pos < len; pos++) {
	                    var r = this._wrap(items[pos]);
	                    this._items[pos] = r;
	                    this._index[r.id] = [r, pos];
	                }
	                return true;
	            });
	        }

	        /**
	         * Returns an entity from the specified position. Basically it returns value
	         * this.items[pos].
	         */
	    }, {
	        key: 'get',
	        value: function get(pos) {
	            var items = this.items;
	            if (pos < 0 || pos >= items.length) return;
	            return items[pos];
	        }

	        /**
	         * Returns <code>true</code> if the specified item exists in this dataset.
	         */
	    }, {
	        key: 'has',
	        value: function has(d) {
	            return this.pos(d) >= 0;
	        }

	        /**
	         * Sets a new value in the specified position
	         */
	    }, {
	        key: 'set',
	        value: function set(d, pos) {
	            return this.update(function () {
	                if (pos === undefined) {
	                    pos = this._items.length;
	                }
	                pos = Math.max(0, Math.min(this._items.length, +pos));
	                var prev = this._items[pos];
	                if (prev) {
	                    delete this._index[prev[0].id];
	                }
	                var r = this._wrap(d);
	                this._items[pos] = r;
	                this._index[r.id] = [r, pos];
	                return true;
	            });
	        }

	        /**
	         * Adds a new data item at the end of the list.
	         */
	    }, {
	        key: 'add',
	        value: function add(d) {
	            return this.set(d, this.size());
	        }

	        /**
	         * Returns position (index) of the specified data item.
	         */
	    }, {
	        key: 'pos',
	        value: function pos(d) {
	            if (!d) return -1;
	            d = this._wrap(d);
	            return this.posById(d.id);
	        }

	        /** Returns position of the element corresponding to the specified ID. */
	    }, {
	        key: 'posById',
	        value: function posById(id) {
	            var slot = this._index[id];
	            return slot ? slot[1] : -1;
	        }

	        /**
	         * Returns an array containing the specified number of items starting from
	         * the given position.
	         */
	    }, {
	        key: 'slice',
	        value: function slice(first, last) {
	            return this._items.slice(first, last);
	        }

	        /**
	         * Removes a data item from the specified position
	         */
	    }, {
	        key: 'remove',
	        value: function remove(pos) {
	            return this.update(function () {
	                var items = this._items;
	                if (pos === undefined || pos < 0 || pos >= items.length) {
	                    return false;
	                }
	                var r = items[pos];
	                delete this._index[r.id];
	                items.splice(pos, 1);
	                for (var i = pos; i < items.length; i++) {
	                    var _r = items[i];
	                    var slot = this._index[_r.id];
	                    if (!slot) throw new Error('DataSet index is broken');
	                    slot[1]--;
	                }
	                return true;
	            });
	        }

	        /**
	         * Removes a specified data item.
	         */
	    }, {
	        key: 'removeItem',
	        value: function removeItem(item) {
	            var pos = this.pos(item);
	            return this.remove(pos);
	        }

	        /**
	         * Removes a data item corresponding to the specified identifier.
	         */
	    }, {
	        key: 'removeById',
	        value: function removeById(id) {
	            var pos = this.posById(id);
	            return this.remove(pos);
	        }

	        /**
	         * Returns the number of elements in this set.
	         */
	    }, {
	        key: 'size',

	        /**
	         * Returns the size of this set (length of the underlying array with items).
	         */
	        value: function size() {
	            return this.items.length;
	        }

	        /**
	         * Returns a data item by its identifier.
	         */
	    }, {
	        key: 'byId',
	        value: function byId(id) {
	            var slot = this._index[id];
	            return slot ? slot[0] : undefined;
	        }

	        // ----------------------------------------------------------------------

	        /**
	         * Iterates over all items and calls the specified visitor function in the
	         * given context. If the specified visitor function returns
	         * <code>false</code> then the iteration processes stops.
	         */
	    }, {
	        key: 'each',
	        value: function each(visitor, context) {
	            return this.items.forEach(visitor, context);
	        }
	    }, {
	        key: 'forEach',
	        value: function forEach(visitor, context) {
	            return this.items.forEach(visitor, context);
	        }

	        /**
	         * Calls the specified visitor function with each item in the list and
	         * returns a list of results. If the visitor returns an undefined value then
	         * it is not added to the resulting list.
	         */
	    }, {
	        key: 'map',
	        value: function map(visitor, context) {
	            return this.items.map(visitor, context);
	        }

	        /**
	         * Calls the specified visitor function with each item in the list and
	         * returns a list of results. If the visitor returns an undefined value then
	         * it is not added to the resulting list.
	         */
	    }, {
	        key: 'filter',
	        value: function filter(visitor, context) {
	            return this.items.filter(visitor, context);
	        }

	        /**
	         * Iterates over all data items until the specified visitor method returns a
	         * non-empty result. This method returns the first non-empty visitor result
	         * or <code>undefined</code> if the visitor returns empty results for all
	         * items.
	         */
	    }, {
	        key: 'find',
	        value: function find(visitor, context) {
	            var items = this.items;
	            var result = false;
	            context = context || this;
	            for (var i = 0, len = items.length; !result && i < len; i++) {
	                result = visitor.call(context, items[i], i);
	            }
	            return result;
	        }

	        // ----------------------------------------------------------------------

	        /**
	         * Performs an update action on this dataset
	         */
	    }, {
	        key: 'update',
	        value: function update(action) {
	            this.version = (this.version || 0) + 1;
	            return this.action('update', function (intent) {
	                return action.call(this);
	            });
	        }

	        /**
	         * Checks that the specified object has a good type. Otherwise it wraps it
	         * in a Data instance.
	         */
	    }, {
	        key: '_wrap',
	        value: function _wrap(data) {
	            var item = data;
	            var DataType = this.DataType;
	            if (!(item instanceof DataType)) {
	                item = new DataType({
	                    dataSet: this,
	                    adapters: this.adapters,
	                    data: data
	                });
	            }
	            return item;
	        }

	        /**
	         * Creates and returns a new empty copy of this data set.
	         */
	    }, {
	        key: 'createNew',
	        value: function createNew(options) {
	            var Type = this.constructor;
	            if (!options.adapters) {
	                options.adapters = this.adapters;
	            }

	            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	                args[_key2 - 1] = arguments[_key2];
	            }

	            var result = new (_bind.apply(Type, [null].concat([options], args)))();
	            Type.Data = this.Data;
	            return result;
	        }

	        /**
	         * Returns the default type of instances managed by this data set.
	         */
	    }, {
	        key: 'visit',

	        // ----------------------------------------------------------------------

	        /**
	         * Visits this items
	         * 
	         * @param visitor.before
	         *            this method is called before this item is visited
	         * @param visitor.after
	         *            this method is called after this item is visited
	         */
	        value: function visit(visitor) {
	            var result;
	            if (visitor.before) {
	                result = visitor.before.call(visitor, this);
	            }
	            if (result !== 'false') {
	                this.each(function (item) {
	                    return item.visit(visitor);
	                });
	            }
	            if (visitor.after) {
	                visitor.after.call(visitor, this);
	            }
	            return result;
	        }

	        // ----------------------------------------------------------------------

	        /**
	         * Returns a list of elements existing in all data sets.
	         */
	    }, {
	        key: 'dataSet',
	        set: function set(_set) {
	            if (!!_set) {
	                this[DATA_SET_KEY] = _set;
	            } else {
	                delete this[DATA_SET_KEY];
	            }
	        },
	        get: function get() {
	            if (this[DATA_SET_KEY] === undefined) {
	                var dataSet = undefined;
	                if (this.adaptable instanceof DataSet) {
	                    dataSet = this.adaptable;
	                } else if (this.options instanceof DataSet) {
	                    dataSet = this.options;
	                } else if (this.options.dataSet instanceof DataSet) {
	                    dataSet = this.options.dataSet;
	                }
	                this[DATA_SET_KEY] = dataSet;
	            }
	            return this[DATA_SET_KEY];
	        }
	    }, {
	        key: 'items',
	        get: function get() {
	            return this._items;
	        },

	        /**
	         * Sets a new list of data items. If the specified list contains non Data
	         * instances then they are wrapped in a Data container.
	         */
	        set: function set(items) {
	            return this.setItems(items);
	        }
	    }, {
	        key: 'length',
	        get: function get() {
	            return this.items.length;
	        }
	    }, {
	        key: 'DataType',
	        get: function get() {
	            return this._DataType || _Data3['default'];
	        },

	        /**
	         * Sets a new type for instances managed by this data set.
	         */
	        set: function set(type) {
	            this._DataType = type;
	        }
	    }], [{
	        key: 'intersection',
	        value: function intersection() {
	            for (var _len3 = arguments.length, list = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                list[_key3] = arguments[_key3];
	            }

	            if (!list || !list.length) return [];
	            list = list.sort(function (a, b) {
	                return a.length > b.length ? 1 : -1;
	            });
	            var result = [];
	            var first = list[0];
	            first.forEach(function (item) {
	                var contained = true;
	                for (var i = 1; contained && i < list.length; i++) {
	                    contained = list[i].has(item);
	                }
	                if (contained) {
	                    result.push(item);
	                }
	            });
	            return result;
	        }

	        // ----------------------------------------------------------------------

	        /**
	         * Returns a diff of the data set content before and after an update intent.
	         * The returned object contains the following fields: 1) "added" a list of
	         * elements present in the data set after modifications 2) "removed" list of
	         * elements existing only before modifications 3) "updated" list of elements
	         * present in the data set before and after modifications.
	         * 
	         * @param an
	         *            action performing modification of the data set and returning
	         *            an intent or a promise
	         */
	    }, {
	        key: 'diff',
	        value: function diff(dataSet, action) {
	            var that = this;
	            var before = that._getIndex(dataSet);
	            var promise = undefined;
	            if (typeof action === 'function') {
	                promise = action();
	            } else {
	                promise = action;
	            }
	            return promise.then(function () {
	                var after = that._getIndex(dataSet);
	                return that._delta(before, after);
	            });
	        }

	        /**
	         * Returns a delta object containing differences between two specified data
	         * sets.
	         */
	    }, {
	        key: 'delta',
	        value: function delta(first, second) {
	            var firstIndex = this._getIndex(first);
	            var secondIndex = this._getIndex(second);
	            return this._delta(firstIndex, secondIndex);
	        }

	        /**
	         * Returns an object containing identifiers with the corresponding
	         * resources.
	         */
	    }, {
	        key: '_getIndex',
	        value: function _getIndex(dataSet) {
	            var result = {};
	            dataSet.forEach(function (r) {
	                result[r.id] = r;
	            });
	            return result;
	        }

	        /**
	         * Makes a diff between two specified indexes and returns an object with the
	         * following fields: 1) "added" a list of elements present in the second
	         * index but absent in the first one 2) "removed" list of elements existing
	         * only in the first index 3) "updated" list of elements present in both
	         * indexes.
	         */
	    }, {
	        key: '_delta',
	        value: function _delta(first, second) {
	            var result = {
	                added: [],
	                removed: [],
	                updated: []
	            };
	            for (var id in first) {
	                var a = first[id];
	                var b = second[id];
	                if (!!b) {
	                    result.updated.push(b);
	                    delete second[id];
	                } else {
	                    result.removed.push(a);
	                }
	            }
	            for (var id in second) {
	                var r = second[id];
	                result.added.push(r);
	            }
	            return result;
	        }
	    }]);

	    return DataSet;
	})(_Data3['default']);

	exports['default'] = DataSet;

	_mosaicIntents.Intents.addTo(DataSet);
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libIntent = __webpack_require__(18);

	var _libIntent2 = _interopRequireDefault(_libIntent);

	var _libIntents = __webpack_require__(19);

	var _libIntents2 = _interopRequireDefault(_libIntents);

	var _libSingleton = __webpack_require__(20);

	var _libSingleton2 = _interopRequireDefault(_libSingleton);

	exports['default'] = {
	    Intent: _libIntent2['default'],
	    Intents: _libIntents2['default'],
	    Singleton: _libSingleton2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _promise = __webpack_require__(5);

	var _promise2 = _interopRequireDefault(_promise);

	var _events = __webpack_require__(6);

	var Intent = (function (_EventEmitter) {
	    _inherits(Intent, _EventEmitter);

	    function Intent(params, key) {
	        _classCallCheck(this, Intent);

	        _get(Object.getPrototypeOf(Intent.prototype), 'constructor', this).call(this);
	        var that = this;
	        that.params = params;
	        if (key) {
	            that.key = key;
	        }
	        that.handled = false;
	        that._after = [];
	        that._innerPromise = new _promise2['default'](function (resolve, reject) {
	            that.resolve = function (result) {
	                that.handled = true;
	                resolve(result);
	                return that;
	            };
	            that.reject = function (err) {
	                that.handled = true;
	                reject(err);
	                return that;
	            };
	        });
	        that.promise = that._innerPromise.then(function (res) {
	            if (that._after.length) {
	                return _promise2['default'].all(that._after).then(function () {
	                    return res;
	                }, function (err) {
	                    throw err;
	                });
	            }
	            return res;
	        });
	        that.finalize = that['finally'] = function (method) {
	            return that.then(function (result) {
	                try {
	                    method(null, result);
	                } catch (e) {}
	                return result;
	            }, function (err) {
	                try {
	                    method(err);
	                } catch (e) {}
	                throw err;
	            });
	        };
	    }

	    _createClass(Intent, [{
	        key: 'then',
	        value: function then(onResolve, onReject) {
	            return this.promise.then(onResolve, onReject);
	        }

	        /**
	         * The specified action will be executed just after the main promise is
	         * resolved.
	         */
	    }, {
	        key: 'after',
	        value: function after(onResolve, onReject) {
	            var res = this._innerPromise.then(onResolve, onReject);
	            this._after.push(res);
	            return res;
	        }
	    }]);

	    return Intent;
	})(_events.EventEmitter);

	exports['default'] = Intent;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _events = __webpack_require__(6);

	var _Intent = __webpack_require__(18);

	var _Intent2 = _interopRequireDefault(_Intent);

	function Intents(obj) {
	    obj = obj || this;
	    _events.EventEmitter.apply(obj);
	}
	extend(Intents.prototype, {
	    intent: function intent(key, params) {
	        var intent = this._newIntent(key, params);
	        return this.fireIntent(key, intent);
	    },
	    action: function action(key, params, _action) {
	        if (_action === undefined) {
	            _action = params;
	            params = undefined;
	        }
	        var intent = this._newIntent(key, params);
	        return this.runAction(key, intent, _action);
	    },
	    fireIntent: function fireIntent(key, intent) {
	        try {
	            this.emit(key, intent);
	        } catch (err) {
	            intent.reject(err);
	        }
	        return intent;
	    },
	    runAction: function runAction(key, intent, action) {
	        try {
	            var that = this;
	            intent = that.fireIntent(key, intent);
	            if (!intent.handled) {
	                var result = action.call(that, intent);
	                if (result !== undefined && !intent.handled) {
	                    intent.resolve(result);
	                }
	            }
	        } catch (err) {
	            intent.reject(err);
	        }
	        return intent;
	    },
	    _newIntent: function _newIntent(key, params) {
	        return new _Intent2['default'](params, key);
	    }
	}, _events.EventEmitter.prototype);

	Intents.addTo = function (Type) {
	    extend(Type.prototype, Intents.prototype);
	};

	function extend(to) {
	    for (var i = 1; i < arguments.length; i++) {
	        var from = arguments[i];
	        for (var key in from) {
	            if (!to[key] && Object.prototype.hasOwnProperty.call(from, key)) {
	                to[key] = from[key];
	            }
	        }
	    }
	}

	exports['default'] = Intents;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _promise = __webpack_require__(5);

	var _promise2 = _interopRequireDefault(_promise);

	exports['default'] = {
	    singletonPromise: function singletonPromise(method) {
	        function runAction(params) {
	            params = params || {};
	            for (var key in params) {
	                runAction.params[key] = params[key];
	            }
	            if (!runAction.promise) {
	                runAction.promise = _promise2['default'].resolve().then(function (result) {
	                    delete runAction.promise;
	                    runAction.params = {};
	                    return method.call(that, params);
	                });
	            }
	            return runAction.promise;
	        }
	        runAction.params = {};
	        runAction.promise;
	        return runAction;
	    },
	    singletonAction: function singletonAction(that, actionName, action) {
	        function runAction(params) {
	            params = params || {};
	            for (var key in params) {
	                runAction.params[key] = params[key];
	            }
	            if (!runAction.intent) {
	                runAction.intent = that.action(actionName, runAction.params, function (n) {
	                    function clear() {
	                        if (n === runAction.intent) {
	                            runAction.params = {};
	                            delete runAction.intent;
	                        }
	                    }
	                    n.after(clear, clear);
	                    return action.call(that, n);
	                });
	            }
	            return runAction.intent;
	        }
	        runAction.params = {};
	        return runAction;
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _DataSet2 = __webpack_require__(16);

	var _DataSet3 = _interopRequireDefault(_DataSet2);

	var DerivativeDataSet = (function (_DataSet) {
	    _inherits(DerivativeDataSet, _DataSet);

	    function DerivativeDataSet(options) {
	        var _get2;

	        _classCallCheck(this, DerivativeDataSet);

	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	        }

	        (_get2 = _get(Object.getPrototypeOf(DerivativeDataSet.prototype), 'constructor', this)).call.apply(_get2, [this, options].concat(args));
	        if (!options) {
	            throw new Error('Parameters are not defined');
	        }
	        this._onMainDataSetUpdate = this._onMainDataSetUpdate.bind(this);
	        this.dataSet.addListener('update', this._onMainDataSetUpdate);
	        this._handleMainDataSetUpdate();
	    }

	    _createClass(DerivativeDataSet, [{
	        key: 'close',
	        value: function close() {
	            _get(Object.getPrototypeOf(DerivativeDataSet.prototype), 'close', this).call(this);
	            var dataSet = this.dataSet;
	            dataSet.removeListener('update', this._onMainDataSetUpdate);
	            delete this._dataSet;
	        }

	        /** Returns an options value. */
	    }, {
	        key: '_getOptionsValue',
	        value: function _getOptionsValue(key, defaultValue) {
	            var result = _get(Object.getPrototypeOf(DerivativeDataSet.prototype), '_getOptionsValue', this).call(this, key);
	            if (!result) {
	                var dataSet = this.dataSet;
	                if (dataSet) {
	                    result = dataSet._getOptionsValue(key, defaultValue);
	                }
	            }
	            return result;
	        }

	        /**
	         * This method is called when the parent dataset is updated.
	         */
	    }, {
	        key: '_onMainDataSetUpdate',
	        value: function _onMainDataSetUpdate(intent) {
	            intent.after((function () {
	                return this._handleMainDataSetUpdate();
	            }).bind(this));
	        }

	        /**
	         * This method should be overloaded in subclasses to define exact behaveour
	         * of objects when the parent set changes.
	         */
	    }, {
	        key: '_handleMainDataSetUpdate',
	        value: function _handleMainDataSetUpdate() {
	            this.items = this.dataSet.items;
	        }
	    }]);

	    return DerivativeDataSet;
	})(_DataSet3['default']);

	exports['default'] = DerivativeDataSet;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _DataSet = __webpack_require__(16);

	var _DataSet2 = _interopRequireDefault(_DataSet);

	var _DerivativeDataSet2 = __webpack_require__(21);

	var _DerivativeDataSet3 = _interopRequireDefault(_DerivativeDataSet2);

	var DataSetFiltered = (function (_DerivativeDataSet) {
	    _inherits(DataSetFiltered, _DerivativeDataSet);

	    function DataSetFiltered() {
	        _classCallCheck(this, DataSetFiltered);

	        _get(Object.getPrototypeOf(DataSetFiltered.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(DataSetFiltered, [{
	        key: '_handleMainDataSetUpdate',
	        value: function _handleMainDataSetUpdate() {
	            var filter = this._getOptionsValue('filter');
	            if (filter) {
	                this.items = this.dataSet.items.filter(filter, this);
	            } else {
	                this.items = this.dataSet.items;
	            }
	        }
	    }]);

	    return DataSetFiltered;
	})(_DerivativeDataSet3['default']);

	exports['default'] = DataSetFiltered;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _DerivativeDataSet2 = __webpack_require__(21);

	var _DerivativeDataSet3 = _interopRequireDefault(_DerivativeDataSet2);

	var DataSetPaginated = (function (_DerivativeDataSet) {
	    _inherits(DataSetPaginated, _DerivativeDataSet);

	    /** Initializes this paginated data set. */

	    function DataSetPaginated() {
	        _classCallCheck(this, DataSetPaginated);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        _get(Object.getPrototypeOf(DataSetPaginated.prototype), 'constructor', this).apply(this, args);
	        var page = this._getOptionsValue('page', 0);
	        this.pageIdx = page;
	        this.pageSize = this._getOptionsValue('pageSize', 10);
	    }

	    // ----------------------------------------------------------------------

	    /** Returns position of the first element visible in the page */

	    _createClass(DataSetPaginated, [{
	        key: 'focusPos',

	        /**
	         * Activates the page corresponding containing element in the specified
	         * position.
	         */
	        value: function focusPos(idx) {
	            idx = idx || 0;
	            idx = Math.max(0, Math.min(this.dataSet.length - 1, idx));
	            var pageIdx = Math.floor(idx / this.pageSize);
	            return this.setPageIdx(pageIdx);
	        }

	        // ----------------------------------------------------------------------
	        // Page index

	        /** Returns the index of the currently active page. */
	    }, {
	        key: 'setPageIdx',

	        /** Sets a new page index */
	        value: function setPageIdx(pageIdx) {
	            pageIdx = pageIdx || 0;
	            var dataSet = this.dataSet;
	            var pageSize = this.pageSize;
	            var size = dataSet.size();
	            pageIdx = this._pageIdx = Math.max(0, Math.min(pageIdx, this.pageNumber - 1));
	            var startPos = pageIdx * pageSize;
	            var endPos = Math.min(size - 1, startPos + pageSize - 1);
	            var items = [];
	            for (var i = startPos; i <= endPos; i++) {
	                var item = dataSet.get(i);
	                items.push(item);
	            }
	            return this.setItems(items);
	        }

	        // ----------------------------------------------------------------------

	        /** Sets a new page size */
	    }, {
	        key: '_handleMainDataSetUpdate',

	        // ----------------------------------------------------------------------

	        /** Updates the list */
	        value: function _handleMainDataSetUpdate() {
	            return this.pageSize = this.pageSize;
	        }
	    }, {
	        key: 'pagePos',
	        get: function get() {
	            var result = this.pageIdx * this.pageSize;
	            return result;
	        }
	    }, {
	        key: 'pageIdx',
	        get: function get() {
	            return this._pageIdx || 0;
	        },

	        /** Sets a new page index */
	        set: function set(pageIdx) {
	            this.setPageIdx(pageIdx);
	        }
	    }, {
	        key: 'pageSize',
	        set: function set(pageSize) {
	            var firstPageItemIdx = this.pagePos;
	            this._pageSize = pageSize || this.defaultPageSize || 10;
	            return this.focusPos(firstPageItemIdx);
	        },

	        /** Returns the current page size */
	        get: function get() {
	            return this._pageSize || this._getOptionsValue('pageSize') || this.defaultPageSize;
	        }

	        // ----------------------------------------------------------------------

	        /** Returns the total page number in this data set. */
	    }, {
	        key: 'pageNumber',
	        get: function get() {
	            return Math.ceil(this.dataSet.length / this.pageSize);
	        }
	    }]);

	    return DataSetPaginated;
	})(_DerivativeDataSet3['default']);

	exports['default'] = DataSetPaginated;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _DataSet = __webpack_require__(16);

	var _DataSet2 = _interopRequireDefault(_DataSet);

	var _DerivativeDataSet2 = __webpack_require__(21);

	var _DerivativeDataSet3 = _interopRequireDefault(_DerivativeDataSet2);

	var DataSetSelection = (function (_DerivativeDataSet) {
	    _inherits(DataSetSelection, _DerivativeDataSet);

	    function DataSetSelection() {
	        _classCallCheck(this, DataSetSelection);

	        _get(Object.getPrototypeOf(DataSetSelection.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(DataSetSelection, [{
	        key: '_handleMainDataSetUpdate',

	        /** Updates list of selected items. */
	        value: function _handleMainDataSetUpdate() {
	            var items = [];
	            this.dataSet.each(function (r, i) {
	                if (this.has(r)) {
	                    items.push(r);
	                }
	            }, this);
	            return this.setItems(items);
	        }

	        /**
	         * Returns a filter function returning <code>true</code> if a specified
	         * item is contained in the specified list.
	         */
	    }, {
	        key: '_getSelectionFilter',
	        value: function _getSelectionFilter(items) {
	            var _this = this;

	            var filter = undefined;
	            if (typeof items === 'function') {
	                filter = items;
	            } else if (items instanceof _DataSet2['default']) {
	                filter = function (r) {
	                    return items.has(r);
	                };
	            } else if (items) {
	                (function () {
	                    if (!Array.isArray(items)) {
	                        items = [items];
	                    }
	                    var index = {};
	                    for (var key in items) {
	                        var item = _this._wrap(items[key]);
	                        index[item.id] = key;
	                    }
	                    filter = function (item) {
	                        return item.id in index;
	                    };
	                })();
	            }
	            return filter;
	        }
	    }, {
	        key: 'toggle',
	        value: function toggle(item) {
	            var that = this;
	            var newItems = [];
	            var items = Array.isArray(item) ? item : [item];
	            items.forEach(function (item) {
	                var pos = that.pos(item);
	                if (pos < 0) {
	                    newItems.push(item);
	                }
	            });
	            return that.setItems(newItems);
	        }

	        /**
	         * Selects the specified items.
	         */
	    }, {
	        key: 'select',
	        value: function select(selection) {
	            var list = undefined;
	            var filter = this._getSelectionFilter(selection);
	            if (filter) {
	                list = this.dataSet.filter(filter, this);
	            } else {
	                list = [];
	            }
	            return this.setItems(list);
	        }

	        /**
	         * Returns <code>true</code> if <em>at least one</em> specified item
	         * is contained in this selection data set.
	         */
	    }, {
	        key: 'selected',
	        value: function selected(selection) {
	            var filter = this._getSelectionFilter(selection);
	            return this.find(filter);
	        }
	    }]);

	    return DataSetSelection;
	})(_DerivativeDataSet3['default']);

	exports['default'] = DataSetSelection;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libGeoJsonAdapter = __webpack_require__(26);

	var _libGeoJsonAdapter2 = _interopRequireDefault(_libGeoJsonAdapter);

	var _libGeoJsonGenerator = __webpack_require__(34);

	var _libGeoJsonGenerator2 = _interopRequireDefault(_libGeoJsonGenerator);

	var _libGeoJsonUtils = __webpack_require__(27);

	var _libGeoJsonUtils2 = _interopRequireDefault(_libGeoJsonUtils);

	exports['default'] = {
	    GeoJsonAdapter: _libGeoJsonAdapter2['default'],
	    GeoJsonGenerator: _libGeoJsonGenerator2['default'],
	    GeoJsonUtils: _libGeoJsonUtils2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _GeoJsonUtils = __webpack_require__(27);

	var _GeoJsonUtils2 = _interopRequireDefault(_GeoJsonUtils);

	/**
	 * This adapters treats all data set as GeoJson objects and provides some
	 * utility methods.
	 */

	var GeoJsonAdapter = (function () {

	    /**
	     * The main constructor initializing the internal data field.
	     */

	    function GeoJsonAdapter(options, item) {
	        _classCallCheck(this, GeoJsonAdapter);

	        options = options || {};
	        this.item = item || options.item;
	    }

	    /** getter/setter methods for the "item" property */

	    _createClass(GeoJsonAdapter, [{
	        key: 'setData',
	        value: function setData(data) {
	            var item = this.item;
	            if (item.setData) {
	                return item.setData(data);
	            } else {
	                return item.data = data;
	            }
	        }

	        /** Returns a bounding box around the underlying item. */
	    }, {
	        key: 'item',
	        get: function get() {
	            return this._item || {};
	        },
	        set: function set(item) {
	            this._item = item || {};
	        }

	        /** Returns the data object associated with the underlying item */
	    }, {
	        key: 'data',
	        get: function get() {
	            return this.item.data;
	        },
	        set: function set(data) {
	            this.setData(data);
	        }
	    }, {
	        key: 'boundingBox',
	        get: function get() {
	            return _GeoJsonUtils2['default'].getBoundingBox(this.item);
	        }

	        /** Returns the central point for this item. */
	    }, {
	        key: 'centerPoint',
	        get: function get() {
	            return _GeoJsonUtils2['default'].getCenter(this.item);
	        }

	        /** Returns the coordinates of the center for this item. */
	    }, {
	        key: 'center',
	        get: function get() {
	            var center = this.centerPoint;
	            return center.geometry.coordinates;
	        }
	    }]);

	    return GeoJsonAdapter;
	})();

	exports['default'] = GeoJsonAdapter;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _turfExtent = __webpack_require__(28);

	var _turfExtent2 = _interopRequireDefault(_turfExtent);

	var _turfCenter = __webpack_require__(30);

	var _turfCenter2 = _interopRequireDefault(_turfCenter);

	/**
	 * This adapters treats all Data instances as GeoJson objects and provides some
	 * utility methods.
	 */

	var GeoJsonUtils = (function () {
	    function GeoJsonUtils() {
	        _classCallCheck(this, GeoJsonUtils);
	    }

	    _createClass(GeoJsonUtils, null, [{
	        key: 'getCenter',

	        /**
	         * Returns the central point for the specified GeoJSON object.
	         */
	        value: function getCenter(item) {
	            var result;
	            var data = item.data;
	            if (data && data.geometry) {
	                result = (0, _turfCenter2['default'])(data.geometry);
	            }
	            return result;
	        }

	        /**
	         * Returns a bounding box around the underlying data object.
	         */
	    }, {
	        key: 'getBoundingBox',
	        value: function getBoundingBox(item) {
	            var bbox;
	            item.visit({
	                before: function before(r) {
	                    var data = r.data;
	                    if (!data.geometry) return;
	                    var box = (0, _turfExtent2['default'])(data.geometry);
	                    if (bbox) {
	                        box = [Math.min(bbox[0], box[0]), Math.min(bbox[1], box[1]), Math.max(bbox[2], box[2]), Math.max(bbox[3], box[3])];
	                    }
	                    bbox = box;
	                }
	            });
	            return bbox;
	        }

	        /**
	         * Returns <code>true</code> if the specified bounding box is empty.
	         * 
	         * @see http://gis.stackexchange.com/questions/8650/how-to-measure-the-accuracy-of-latitude-and-longitude/8674#8674
	         */
	    }, {
	        key: 'isEmptyBox',
	        value: function isEmptyBox(box, precision) {
	            if (!box) return true;
	            var first = this.round(box[0], precision);
	            var second = this.round(box[1], precision);
	            var third = this.round(box[2], precision);
	            var fourth = this.round(box[3], precision);
	            return first === third && second === fourth;
	        }

	        /**
	         * @see http://gis.stackexchange.com/questions/8650/how-to-measure-the-accuracy-of-latitude-and-longitude/8674#8674
	         */
	    }, {
	        key: 'round',
	        value: function round(val, precision) {
	            precision = precision || 6;
	            return (+val).toFixed(precision);
	        }
	    }]);

	    return GeoJsonUtils;
	})();

	exports['default'] = GeoJsonUtils;
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var each = __webpack_require__(29).coordEach;

	/**
	 * Takes any {@link GeoJSON} object, calculates the extent of all input features, and returns a bounding box.
	 *
	 * @module turf/extent
	 * @category measurement
	 * @param {GeoJSON} input any valid GeoJSON Object
	 * @return {Array<number>} the bounding box of `input` given
	 * as an array in WSEN order (west, south, east, north)
	 * @example
	 * var input = {
	 *   "type": "FeatureCollection",
	 *   "features": [
	 *     {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [114.175329, 22.2524]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [114.170007, 22.267969]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [114.200649, 22.274641]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [114.186744, 22.265745]
	 *       }
	 *     }
	 *   ]
	 * };
	 *
	 * var bbox = turf.extent(input);
	 *
	 * var bboxPolygon = turf.bboxPolygon(bbox);
	 *
	 * var resultFeatures = input.features.concat(bboxPolygon);
	 * var result = {
	 *   "type": "FeatureCollection",
	 *   "features": resultFeatures
	 * };
	 *
	 * //=result
	 */
	module.exports = function (layer) {
	  var extent = [Infinity, Infinity, -Infinity, -Infinity];
	  each(layer, function (coord) {
	    if (extent[0] > coord[0]) extent[0] = coord[0];
	    if (extent[1] > coord[1]) extent[1] = coord[1];
	    if (extent[2] < coord[0]) extent[2] = coord[0];
	    if (extent[3] < coord[1]) extent[3] = coord[1];
	  });
	  return extent;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Lazily iterate over coordinates in any GeoJSON object, similar to
	 * Array.forEach.
	 *
	 * @param {Object} layer any GeoJSON object
	 * @param {Function} callback a method that takes (value)
	 * @param {boolean=} excludeWrapCoord whether or not to include
	 * the final coordinate of LinearRings that wraps the ring in its iteration.
	 * @example
	 * var point = { type: 'Point', coordinates: [0, 0] };
	 * coordEach(point, function(coords) {
	 *   // coords is equal to [0, 0]
	 * });
	 */
	'use strict';

	function coordEach(layer, callback, excludeWrapCoord) {
	  var i,
	      j,
	      k,
	      g,
	      geometry,
	      stopG,
	      coords,
	      geometryMaybeCollection,
	      wrapShrink = 0,
	      isGeometryCollection,
	      isFeatureCollection = layer.type === 'FeatureCollection',
	      isFeature = layer.type === 'Feature',
	      stop = isFeatureCollection ? layer.features.length : 1;

	  // This logic may look a little weird. The reason why it is that way
	  // is because it's trying to be fast. GeoJSON supports multiple kinds
	  // of objects at its root: FeatureCollection, Features, Geometries.
	  // This function has the responsibility of handling all of them, and that
	  // means that some of the `for` loops you see below actually just don't apply
	  // to certain inputs. For instance, if you give this just a
	  // Point geometry, then both loops are short-circuited and all we do
	  // is gradually rename the input until it's called 'geometry'.
	  //
	  // This also aims to allocate as few resources as possible: just a
	  // few numbers and booleans, rather than any temporary arrays as would
	  // be required with the normalization approach.
	  for (i = 0; i < stop; i++) {

	    geometryMaybeCollection = isFeatureCollection ? layer.features[i].geometry : isFeature ? layer.geometry : layer;
	    isGeometryCollection = geometryMaybeCollection.type === 'GeometryCollection';
	    stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;

	    for (g = 0; g < stopG; g++) {

	      geometry = isGeometryCollection ? geometryMaybeCollection.geometries[g] : geometryMaybeCollection;
	      coords = geometry.coordinates;

	      wrapShrink = excludeWrapCoord && (geometry.type === 'Polygon' || geometry.type === 'MultiPolygon') ? 1 : 0;

	      if (geometry.type === 'Point') {
	        callback(coords);
	      } else if (geometry.type === 'LineString' || geometry.type === 'MultiPoint') {
	        for (j = 0; j < coords.length; j++) callback(coords[j]);
	      } else if (geometry.type === 'Polygon' || geometry.type === 'MultiLineString') {
	        for (j = 0; j < coords.length; j++) for (k = 0; k < coords[j].length - wrapShrink; k++) callback(coords[j][k]);
	      } else if (geometry.type === 'MultiPolygon') {
	        for (j = 0; j < coords.length; j++) for (k = 0; k < coords[j].length; k++) for (l = 0; l < coords[j][k].length - wrapShrink; l++) callback(coords[j][k][l]);
	      } else {
	        throw new Error('Unknown Geometry Type');
	      }
	    }
	  }
	}
	module.exports.coordEach = coordEach;

	/**
	 * Lazily reduce coordinates in any GeoJSON object into a single value,
	 * similar to how Array.reduce works. However, in this case we lazily run
	 * the reduction, so an array of all coordinates is unnecessary.
	 *
	 * @param {Object} layer any GeoJSON object
	 * @param {Function} callback a method that takes (memo, value) and returns
	 * a new memo
	 * @param {boolean=} excludeWrapCoord whether or not to include
	 * the final coordinate of LinearRings that wraps the ring in its iteration.
	 * @param {*} memo the starting value of memo: can be any type.
	 */
	function coordReduce(layer, callback, memo, excludeWrapCoord) {
	  coordEach(layer, function (coord) {
	    memo = callback(memo, coord);
	  }, excludeWrapCoord);
	  return memo;
	}
	module.exports.coordReduce = coordReduce;

	/**
	 * Lazily iterate over property objects in any GeoJSON object, similar to
	 * Array.forEach.
	 *
	 * @param {Object} layer any GeoJSON object
	 * @param {Function} callback a method that takes (value)
	 * @example
	 * var point = { type: 'Feature', geometry: null, properties: { foo: 1 } };
	 * propEach(point, function(props) {
	 *   // props is equal to { foo: 1}
	 * });
	 */
	function propEach(layer, callback) {
	  var i;
	  switch (layer.type) {
	    case 'FeatureCollection':
	      features = layer.features;
	      for (i = 0; i < layer.features.length; i++) {
	        callback(layer.features[i].properties);
	      }
	      break;
	    case 'Feature':
	      callback(layer.properties);
	      break;
	  }
	}
	module.exports.propEach = propEach;

	/**
	 * Lazily reduce properties in any GeoJSON object into a single value,
	 * similar to how Array.reduce works. However, in this case we lazily run
	 * the reduction, so an array of all properties is unnecessary.
	 *
	 * @param {Object} layer any GeoJSON object
	 * @param {Function} callback a method that takes (memo, coord) and returns
	 * a new memo
	 * @param {*} memo the starting value of memo: can be any type.
	 */
	function propReduce(layer, callback, memo) {
	  propEach(layer, function (prop) {
	    memo = callback(memo, prop);
	  });
	  return memo;
	}
	module.exports.propReduce = propReduce;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var extent = __webpack_require__(31),
	    point = __webpack_require__(33);

	/**
	 * Takes a {@link FeatureCollection} of any type and returns the absolute center point of all features.
	 *
	 * @module turf/center
	 * @category measurement
	 * @param {FeatureCollection} features a FeatureCollection of any type
	 * @return {Point} a Point feature at the
	 * absolute center point of all input features
	 * @example
	 * var features = {
	 *   "type": "FeatureCollection",
	 *   "features": [
	 *     {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [-97.522259, 35.4691]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [-97.502754, 35.463455]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [-97.508269, 35.463245]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [-97.516809, 35.465779]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [-97.515372, 35.467072]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [-97.509363, 35.463053]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [-97.511123, 35.466601]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [-97.518547, 35.469327]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [-97.519706, 35.469659]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [-97.517839, 35.466998]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [-97.508678, 35.464942]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [-97.514914, 35.463453]
	 *       }
	 *     }
	 *   ]
	 * };
	 *
	 * var centerPt = turf.center(features);
	 * centerPt.properties['marker-size'] = 'large';
	 * centerPt.properties['marker-color'] = '#000';
	 *
	 * var resultFeatures = features.features.concat(centerPt);
	 * var result = {
	 *   "type": "FeatureCollection",
	 *   "features": resultFeatures
	 * };
	 *
	 * //=result
	 */

	module.exports = function (layer, done) {
	  var ext = extent(layer);
	  var x = (ext[0] + ext[2]) / 2;
	  var y = (ext[1] + ext[3]) / 2;
	  return point([x, y]);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var each = __webpack_require__(32).coordEach;

	/**
	 * Takes any {@link GeoJSON} object, calculates the extent of all input features, and returns a bounding box.
	 *
	 * @module turf/extent
	 * @category measurement
	 * @param {GeoJSON} input any valid GeoJSON Object
	 * @return {Array<number>} the bounding box of `input` given
	 * as an array in WSEN order (west, south, east, north)
	 * @example
	 * var input = {
	 *   "type": "FeatureCollection",
	 *   "features": [
	 *     {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [114.175329, 22.2524]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [114.170007, 22.267969]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [114.200649, 22.274641]
	 *       }
	 *     }, {
	 *       "type": "Feature",
	 *       "properties": {},
	 *       "geometry": {
	 *         "type": "Point",
	 *         "coordinates": [114.186744, 22.265745]
	 *       }
	 *     }
	 *   ]
	 * };
	 *
	 * var bbox = turf.extent(input);
	 *
	 * var bboxPolygon = turf.bboxPolygon(bbox);
	 *
	 * var resultFeatures = input.features.concat(bboxPolygon);
	 * var result = {
	 *   "type": "FeatureCollection",
	 *   "features": resultFeatures
	 * };
	 *
	 * //=result
	 */
	module.exports = function (layer) {
	  var extent = [Infinity, Infinity, -Infinity, -Infinity];
	  each(layer, function (coord) {
	    if (extent[0] > coord[0]) extent[0] = coord[0];
	    if (extent[1] > coord[1]) extent[1] = coord[1];
	    if (extent[2] < coord[0]) extent[2] = coord[0];
	    if (extent[3] < coord[1]) extent[3] = coord[1];
	  });
	  return extent;
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * Lazily iterate over coordinates in any GeoJSON object, similar to
	 * Array.forEach.
	 *
	 * @param {Object} layer any GeoJSON object
	 * @param {Function} callback a method that takes (value)
	 * @param {boolean=} excludeWrapCoord whether or not to include
	 * the final coordinate of LinearRings that wraps the ring in its iteration.
	 * @example
	 * var point = { type: 'Point', coordinates: [0, 0] };
	 * coordEach(point, function(coords) {
	 *   // coords is equal to [0, 0]
	 * });
	 */
	'use strict';

	function coordEach(layer, callback, excludeWrapCoord) {
	  var i,
	      j,
	      k,
	      g,
	      geometry,
	      stopG,
	      coords,
	      geometryMaybeCollection,
	      wrapShrink = 0,
	      isGeometryCollection,
	      isFeatureCollection = layer.type === 'FeatureCollection',
	      isFeature = layer.type === 'Feature',
	      stop = isFeatureCollection ? layer.features.length : 1;

	  // This logic may look a little weird. The reason why it is that way
	  // is because it's trying to be fast. GeoJSON supports multiple kinds
	  // of objects at its root: FeatureCollection, Features, Geometries.
	  // This function has the responsibility of handling all of them, and that
	  // means that some of the `for` loops you see below actually just don't apply
	  // to certain inputs. For instance, if you give this just a
	  // Point geometry, then both loops are short-circuited and all we do
	  // is gradually rename the input until it's called 'geometry'.
	  //
	  // This also aims to allocate as few resources as possible: just a
	  // few numbers and booleans, rather than any temporary arrays as would
	  // be required with the normalization approach.
	  for (i = 0; i < stop; i++) {

	    geometryMaybeCollection = isFeatureCollection ? layer.features[i].geometry : isFeature ? layer.geometry : layer;
	    isGeometryCollection = geometryMaybeCollection.type === 'GeometryCollection';
	    stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;

	    for (g = 0; g < stopG; g++) {

	      geometry = isGeometryCollection ? geometryMaybeCollection.geometries[g] : geometryMaybeCollection;
	      coords = geometry.coordinates;

	      wrapShrink = excludeWrapCoord && (geometry.type === 'Polygon' || geometry.type === 'MultiPolygon') ? 1 : 0;

	      if (geometry.type === 'Point') {
	        callback(coords);
	      } else if (geometry.type === 'LineString' || geometry.type === 'MultiPoint') {
	        for (j = 0; j < coords.length; j++) callback(coords[j]);
	      } else if (geometry.type === 'Polygon' || geometry.type === 'MultiLineString') {
	        for (j = 0; j < coords.length; j++) for (k = 0; k < coords[j].length - wrapShrink; k++) callback(coords[j][k]);
	      } else if (geometry.type === 'MultiPolygon') {
	        for (j = 0; j < coords.length; j++) for (k = 0; k < coords[j].length; k++) for (l = 0; l < coords[j][k].length - wrapShrink; l++) callback(coords[j][k][l]);
	      } else {
	        throw new Error('Unknown Geometry Type');
	      }
	    }
	  }
	}
	module.exports.coordEach = coordEach;

	/**
	 * Lazily reduce coordinates in any GeoJSON object into a single value,
	 * similar to how Array.reduce works. However, in this case we lazily run
	 * the reduction, so an array of all coordinates is unnecessary.
	 *
	 * @param {Object} layer any GeoJSON object
	 * @param {Function} callback a method that takes (memo, value) and returns
	 * a new memo
	 * @param {boolean=} excludeWrapCoord whether or not to include
	 * the final coordinate of LinearRings that wraps the ring in its iteration.
	 * @param {*} memo the starting value of memo: can be any type.
	 */
	function coordReduce(layer, callback, memo, excludeWrapCoord) {
	  coordEach(layer, function (coord) {
	    memo = callback(memo, coord);
	  }, excludeWrapCoord);
	  return memo;
	}
	module.exports.coordReduce = coordReduce;

	/**
	 * Lazily iterate over property objects in any GeoJSON object, similar to
	 * Array.forEach.
	 *
	 * @param {Object} layer any GeoJSON object
	 * @param {Function} callback a method that takes (value)
	 * @example
	 * var point = { type: 'Feature', geometry: null, properties: { foo: 1 } };
	 * propEach(point, function(props) {
	 *   // props is equal to { foo: 1}
	 * });
	 */
	function propEach(layer, callback) {
	  var i;
	  switch (layer.type) {
	    case 'FeatureCollection':
	      features = layer.features;
	      for (i = 0; i < layer.features.length; i++) {
	        callback(layer.features[i].properties);
	      }
	      break;
	    case 'Feature':
	      callback(layer.properties);
	      break;
	  }
	}
	module.exports.propEach = propEach;

	/**
	 * Lazily reduce properties in any GeoJSON object into a single value,
	 * similar to how Array.reduce works. However, in this case we lazily run
	 * the reduction, so an array of all properties is unnecessary.
	 *
	 * @param {Object} layer any GeoJSON object
	 * @param {Function} callback a method that takes (memo, coord) and returns
	 * a new memo
	 * @param {*} memo the starting value of memo: can be any type.
	 */
	function propReduce(layer, callback, memo) {
	  propEach(layer, function (prop) {
	    memo = callback(memo, prop);
	  });
	  return memo;
	}
	module.exports.propReduce = propReduce;

/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * Takes coordinates and properties (optional) and returns a new {@link Point} feature.
	 *
	 * @module turf/point
	 * @category helper
	 * @param {number} longitude position west to east in decimal degrees
	 * @param {number} latitude position south to north in decimal degrees
	 * @param {Object} properties an Object that is used as the {@link Feature}'s
	 * properties
	 * @return {Point} a Point feature
	 * @example
	 * var pt1 = turf.point([-75.343, 39.984]);
	 *
	 * //=pt1
	 */
	'use strict';

	var isArray = Array.isArray || function (arg) {
	  return Object.prototype.toString.call(arg) === '[object Array]';
	};
	module.exports = function (coordinates, properties) {
	  if (!isArray(coordinates)) throw new Error('Coordinates must be an array');
	  if (coordinates.length < 2) throw new Error('Coordinates must be at least 2 numbers long');
	  return {
	    type: "Feature",
	    geometry: {
	      type: "Point",
	      coordinates: coordinates
	    },
	    properties: properties || {}
	  };
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var GeoJsonGenerator = (function () {
	    function GeoJsonGenerator(options) {
	        _classCallCheck(this, GeoJsonGenerator);

	        options = options || {};
	        this.bbox = options.bbox || [-180, 90, 180, -90];
	        this.precision = options.precision || 6;
	    }

	    _createClass(GeoJsonGenerator, [{
	        key: 'round',
	        value: function round(val, precision) {
	            precision = precision || this.precision;
	            return +(+val).toFixed(precision);
	        }
	    }, {
	        key: 'random',
	        value: function random(from, to) {
	            return this.round(from + Math.random() * (to - from));
	        }
	    }, {
	        key: 'randomLng',
	        value: function randomLng() {
	            return this.random(this.bbox[0], this.bbox[2]);
	        }
	    }, {
	        key: 'randomLat',
	        value: function randomLat() {
	            return this.random(this.bbox[1], this.bbox[3]);
	        }
	    }, {
	        key: 'randomLngLat',
	        value: function randomLngLat() {
	            return [this.randomLng(), this.randomLat()];
	        }
	    }, {
	        key: 'randomPoint',
	        value: function randomPoint() {
	            return {
	                type: 'Feature',
	                geometry: {
	                    type: 'Point',
	                    coordinates: this.randomLngLat()
	                }
	            };
	        }
	    }, {
	        key: 'randomPoints',
	        value: function randomPoints(number) {
	            var result = [];
	            for (var i = 0; i < number; i++) {
	                result.push(this.randomPoint());
	            }
	            return result;
	        }
	    }]);

	    return GeoJsonGenerator;
	})();

	exports['default'] = GeoJsonGenerator;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var LeafletPopupAdapter = (function () {
	    function LeafletPopupAdapter(options, item) {
	        _classCallCheck(this, LeafletPopupAdapter);

	        this.options = options || {};
	        this.item = item || this.options.item;
	    }

	    _createClass(LeafletPopupAdapter, [{
	        key: 'renderPopupContent',
	        value: function renderPopupContent() {
	            return this.item.get('properties.description');
	        }
	    }]);

	    return LeafletPopupAdapter;
	})();

	exports['default'] = LeafletPopupAdapter;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _leaflet = __webpack_require__(35);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	var _LeafletAdapter = __webpack_require__(2);

	var _LeafletAdapter2 = _interopRequireDefault(_LeafletAdapter);

	var _mosaicDataset = __webpack_require__(9);

	var DataSetLeafletLayer = (function (_L$FeatureGroup) {
	    _inherits(DataSetLeafletLayer, _L$FeatureGroup);

	    function DataSetLeafletLayer(options) {
	        _classCallCheck(this, DataSetLeafletLayer);

	        _get(Object.getPrototypeOf(DataSetLeafletLayer.prototype), 'constructor', this).call(this, options);
	        this._constructorOptions = options;
	        this.dataSet = options.dataSet;
	        this.selectedItems = options.selectedItems;
	        this._layersIndex = {};
	        this._onDataSetUpdate = this._onDataSetUpdate.bind(this);
	        this._onSelectionUpdate = this._onSelectionUpdate.bind(this);
	    }

	    _createClass(DataSetLeafletLayer, [{
	        key: 'onAdd',
	        value: function onAdd() {
	            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	                params[_key] = arguments[_key];
	            }

	            _get(Object.getPrototypeOf(DataSetLeafletLayer.prototype), 'onAdd', this).apply(this, params);
	            this.dataSet.addListener('update', this._onDataSetUpdate);
	            if (this.selectedItems) {
	                this.selectedItems.addListener('update', this._onSelectionUpdate);
	            }
	            this._redrawLayers({
	                added: this.dataSet.items,
	                removed: [],
	                updated: []
	            });
	        }
	    }, {
	        key: 'onRemove',
	        value: function onRemove() {
	            this.dataSet.removeListener('update', this._onDataSetUpdate);
	            if (this.selectedItems) {
	                this.selectedItems.removeListener('update', this._onSelectionUpdate);
	            }

	            for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                params[_key2] = arguments[_key2];
	            }

	            _get(Object.getPrototypeOf(DataSetLeafletLayer.prototype), 'onRemove', this).apply(this, params);
	        }
	    }, {
	        key: '_onDataSetUpdate',
	        value: function _onDataSetUpdate(intent) {
	            _mosaicDataset.DataSet.diff(this.dataSet, intent).then(this._redrawLayers.bind(this));
	        }
	    }, {
	        key: '_onSelectionUpdate',
	        value: function _onSelectionUpdate(intent) {
	            _mosaicDataset.DataSet.diff(this.selectedItems, intent).then(this._updateSelection.bind(this));
	        }
	    }, {
	        key: '_updateSelection',
	        value: function _updateSelection(diff) {
	            var that = this;
	            diff.added.forEach(function (item) {
	                var layer = that._layersIndex[item.id];
	                if (!layer) return;
	                var adapter = that._getLeafletAdapter(item);
	                function remove() {
	                    that.selectedItems.removeItem(item);
	                }
	                adapter.selectLayer(layer).then(remove, remove);
	            });
	            diff.removed.forEach(function (item) {
	                var layer = that._layersIndex[item.id];
	                if (!layer) return;
	                var adapter = that._getLeafletAdapter(item);
	                adapter.deselectLayer(layer);
	            });
	        }
	    }, {
	        key: '_redrawLayers',
	        value: function _redrawLayers(diff) {
	            var that = this;
	            diff.added.forEach(function (item) {
	                var adapter = that._getLeafletAdapter(item);
	                if (!adapter) return;
	                var layer = adapter.newLeafletLayer();
	                if (!layer) return;
	                that._layersIndex[item.id] = layer;
	                that.addLayer(layer);
	            });
	            diff.removed.forEach(function (item) {
	                var layer = that._layersIndex[item.id];
	                if (!layer) return;
	                delete that._layersIndex[item.id];
	                var adapter = that._getLeafletAdapter(item);
	                adapter.deleteLeafletLayer(layer);
	                that.removeLayer(layer);
	            });
	        }
	    }, {
	        key: '_getLeafletAdapter',
	        value: function _getLeafletAdapter(item) {
	            return item.getAdapter(_LeafletAdapter2['default'], this._constructorOptions);
	        }
	    }]);

	    return DataSetLeafletLayer;
	})(_leaflet2['default'].FeatureGroup);

	exports['default'] = DataSetLeafletLayer;
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _leaflet = __webpack_require__(35);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	__webpack_require__(39);

	var _LeafletAdapter = __webpack_require__(2);

	var _LeafletAdapter2 = _interopRequireDefault(_LeafletAdapter);

	var _LeafletClusterAdapter = __webpack_require__(40);

	var _LeafletClusterAdapter2 = _interopRequireDefault(_LeafletClusterAdapter);

	var _mosaicDataset = __webpack_require__(9);

	var DataSetLeafletLayer = (function (_L$MarkerClusterGroup) {
	    _inherits(DataSetLeafletLayer, _L$MarkerClusterGroup);

	    function DataSetLeafletLayer(options) {
	        _classCallCheck(this, DataSetLeafletLayer);

	        var that = undefined;
	        options = options || {};
	        options.iconCreateFunction = function (cluster) {
	            var icon = that._newClusterIcon(cluster);
	            return icon;
	        };
	        _get(Object.getPrototypeOf(DataSetLeafletLayer.prototype), 'constructor', this).call(this, options);
	        that = this;
	        this._constructorOptions = options || {};
	        this.dataSet = options.dataSet;
	        this.selectedItems = options.selectedItems;
	        this._layersIndex = {};
	        this._onDataSetUpdate = this._onDataSetUpdate.bind(this);
	        this._onSelectionUpdate = this._onSelectionUpdate.bind(this);
	        this.options.polygonOptions = that._getClusterPolygonOptions();
	    }

	    _createClass(DataSetLeafletLayer, [{
	        key: 'onAdd',
	        value: function onAdd() {
	            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	                params[_key] = arguments[_key];
	            }

	            _get(Object.getPrototypeOf(DataSetLeafletLayer.prototype), 'onAdd', this).apply(this, params);
	            this.dataSet.addListener('update', this._onDataSetUpdate);
	            if (this.selectedItems) {
	                this.selectedItems.addListener('update', this._onSelectionUpdate);
	            }
	            this._redrawLayers({
	                added: this.dataSet.items,
	                removed: [],
	                updated: []
	            });
	        }
	    }, {
	        key: 'onRemove',
	        value: function onRemove() {
	            this.dataSet.removeListener('update', this._onDataSetUpdate);
	            if (this.selectedItems) {
	                this.selectedItems.removeListener('update', this._onSelectionUpdate);
	            }

	            for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                params[_key2] = arguments[_key2];
	            }

	            _get(Object.getPrototypeOf(DataSetLeafletLayer.prototype), 'onRemove', this).apply(this, params);
	        }
	    }, {
	        key: '_onDataSetUpdate',
	        value: function _onDataSetUpdate(intent) {
	            _mosaicDataset.DataSet.diff(this.dataSet, intent).then(this._redrawLayers.bind(this));
	        }
	    }, {
	        key: '_onSelectionUpdate',
	        value: function _onSelectionUpdate(intent) {
	            _mosaicDataset.DataSet.diff(this.selectedItems, intent).then(this._updateSelection.bind(this));
	        }
	    }, {
	        key: '_updateSelection',
	        value: function _updateSelection(diff) {
	            var that = this;
	            if (diff.added.length) {
	                (function () {
	                    var item = diff.added[0];
	                    var layer = that._layersIndex[item.id];
	                    var adapter = that._getLeafletAdapter(item);
	                    if (adapter && layer) {
	                        that.zoomToShowLayer(layer, function () {
	                            setTimeout(function () {
	                                var latlng = layer.getLatLng();
	                                that._map.panTo(latlng);
	                                function remove() {
	                                    that.selectedItems.removeItem(item);
	                                }
	                                adapter.selectLayer(layer).then(remove, remove);
	                            }, 50);
	                        });
	                    }
	                })();
	            }
	            diff.removed.forEach(function (item) {
	                var layer = that._layersIndex[item.id];
	                if (!layer) return;
	                var adapter = that._getLeafletAdapter(item);
	                adapter.deselectLayer(layer);
	            });
	        }
	    }, {
	        key: '_redrawLayers',
	        value: function _redrawLayers(diff) {
	            var that = this;
	            var toAdd = [];
	            var toRemove = [];
	            diff.added.forEach(function (item) {
	                var adapter = that._getLeafletAdapter(item);
	                if (!adapter) return;
	                var layer = adapter.newLeafletLayer();
	                if (!layer) return;
	                that._layersIndex[item.id] = layer;
	                toAdd.push(layer);
	            });
	            diff.removed.forEach(function (item) {
	                var layer = that._layersIndex[item.id];
	                if (!layer) return;
	                delete that._layersIndex[item.id];
	                var adapter = that._getLeafletAdapter(item);
	                adapter.deleteLeafletLayer(layer);
	                toRemove.push(layer);
	            });
	            that.removeLayers(toRemove);
	            that.addLayers(toAdd);
	        }
	    }, {
	        key: '_getLeafletAdapter',
	        value: function _getLeafletAdapter(item) {
	            return item.getAdapter(_LeafletAdapter2['default'], this._constructorOptions);
	        }
	    }, {
	        key: '_getClusterAdapter',
	        value: function _getClusterAdapter() {
	            if (!this._clusterAdapter) {
	                this._clusterAdapter = this.dataSet.getAdapter(_LeafletClusterAdapter2['default'], this._constructorOptions);
	            }
	            return this._clusterAdapter;
	        }
	    }, {
	        key: '_newClusterIcon',
	        value: function _newClusterIcon(cluster) {
	            var clusterAdapter = this._getClusterAdapter();
	            return clusterAdapter.newClusterIcon(cluster, this);
	        }
	    }, {
	        key: '_getClusterPolygonOptions',
	        value: function _getClusterPolygonOptions() {
	            var clusterAdapter = this._getClusterAdapter();
	            return clusterAdapter.getClusterPolygonOptions(this);
	        }
	    }]);

	    return DataSetLeafletLayer;
	})(_leaflet2['default'].MarkerClusterGroup);

	exports['default'] = DataSetLeafletLayer;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports) {

	/*
	 Leaflet.markercluster, Provides Beautiful Animated Marker Clustering functionality for Leaflet, a JS library for interactive maps.
	 https://github.com/Leaflet/Leaflet.markercluster
	 (c) 2012-2013, Dave Leaver, smartrak
	*/
	"use strict";

	!(function (t, e) {
	  L.MarkerClusterGroup = L.FeatureGroup.extend({ options: { maxClusterRadius: 80, iconCreateFunction: null, spiderfyOnMaxZoom: !0, showCoverageOnHover: !0, zoomToBoundsOnClick: !0, singleMarkerMode: !1, disableClusteringAtZoom: null, removeOutsideVisibleBounds: !0, animateAddingMarkers: !1, spiderfyDistanceMultiplier: 1, polygonOptions: {} }, initialize: function initialize(t) {
	      L.Util.setOptions(this, t), this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction), this._featureGroup = L.featureGroup(), this._featureGroup.on(L.FeatureGroup.EVENTS, this._propagateEvent, this), this._nonPointGroup = L.featureGroup(), this._nonPointGroup.on(L.FeatureGroup.EVENTS, this._propagateEvent, this), this._inZoomAnimation = 0, this._needsClustering = [], this._needsRemoving = [], this._currentShownBounds = null, this._queue = [];
	    }, addLayer: function addLayer(t) {
	      if (t instanceof L.LayerGroup) {
	        var e = [];for (var i in t._layers) e.push(t._layers[i]);return this.addLayers(e);
	      }if (!t.getLatLng) return (this._nonPointGroup.addLayer(t), this);if (!this._map) return (this._needsClustering.push(t), this);if (this.hasLayer(t)) return this;this._unspiderfy && this._unspiderfy(), this._addLayer(t, this._maxZoom);var n = t,
	          s = this._map.getZoom();if (t.__parent) for (; n.__parent._zoom >= s;) n = n.__parent;return (this._currentShownBounds.contains(n.getLatLng()) && (this.options.animateAddingMarkers ? this._animationAddLayer(t, n) : this._animationAddLayerNonAnimated(t, n)), this);
	    }, removeLayer: function removeLayer(t) {
	      if (t instanceof L.LayerGroup) {
	        var e = [];for (var i in t._layers) e.push(t._layers[i]);return this.removeLayers(e);
	      }return t.getLatLng ? this._map ? t.__parent ? (this._unspiderfy && (this._unspiderfy(), this._unspiderfyLayer(t)), this._removeLayer(t, !0), this._featureGroup.hasLayer(t) && (this._featureGroup.removeLayer(t), t.setOpacity && t.setOpacity(1)), this) : this : (!this._arraySplice(this._needsClustering, t) && this.hasLayer(t) && this._needsRemoving.push(t), this) : (this._nonPointGroup.removeLayer(t), this);
	    }, addLayers: function addLayers(t) {
	      var e,
	          i,
	          n,
	          s = this._map,
	          r = this._featureGroup,
	          o = this._nonPointGroup;for (e = 0, i = t.length; i > e; e++) if ((n = t[e], n.getLatLng)) {
	        if (!this.hasLayer(n)) if (s) {
	          if ((this._addLayer(n, this._maxZoom), n.__parent && 2 === n.__parent.getChildCount())) {
	            var a = n.__parent.getAllChildMarkers(),
	                h = a[0] === n ? a[1] : a[0];r.removeLayer(h);
	          }
	        } else this._needsClustering.push(n);
	      } else o.addLayer(n);return (s && (r.eachLayer(function (t) {
	        t instanceof L.MarkerCluster && t._iconNeedsUpdate && t._updateIcon();
	      }), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)), this);
	    }, removeLayers: function removeLayers(t) {
	      var e,
	          i,
	          n,
	          s = this._featureGroup,
	          r = this._nonPointGroup;if (!this._map) {
	        for (e = 0, i = t.length; i > e; e++) n = t[e], this._arraySplice(this._needsClustering, n), r.removeLayer(n);return this;
	      }for (e = 0, i = t.length; i > e; e++) n = t[e], n.__parent ? (this._removeLayer(n, !0, !0), s.hasLayer(n) && (s.removeLayer(n), n.setOpacity && n.setOpacity(1))) : r.removeLayer(n);return (this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds), s.eachLayer(function (t) {
	        t instanceof L.MarkerCluster && t._updateIcon();
	      }), this);
	    }, clearLayers: function clearLayers() {
	      return (this._map || (this._needsClustering = [], delete this._gridClusters, delete this._gridUnclustered), this._noanimationUnspiderfy && this._noanimationUnspiderfy(), this._featureGroup.clearLayers(), this._nonPointGroup.clearLayers(), this.eachLayer(function (t) {
	        delete t.__parent;
	      }), this._map && this._generateInitialClusters(), this);
	    }, getBounds: function getBounds() {
	      var t = new L.LatLngBounds();if (this._topClusterLevel) t.extend(this._topClusterLevel._bounds);else for (var e = this._needsClustering.length - 1; e >= 0; e--) t.extend(this._needsClustering[e].getLatLng());return (t.extend(this._nonPointGroup.getBounds()), t);
	    }, eachLayer: function eachLayer(t, e) {
	      var i,
	          n = this._needsClustering.slice();for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(n), i = n.length - 1; i >= 0; i--) t.call(e, n[i]);this._nonPointGroup.eachLayer(t, e);
	    }, getLayers: function getLayers() {
	      var t = [];return (this.eachLayer(function (e) {
	        t.push(e);
	      }), t);
	    }, getLayer: function getLayer(t) {
	      var e = null;return (this.eachLayer(function (i) {
	        L.stamp(i) === t && (e = i);
	      }), e);
	    }, hasLayer: function hasLayer(t) {
	      if (!t) return !1;var e,
	          i = this._needsClustering;for (e = i.length - 1; e >= 0; e--) if (i[e] === t) return !0;for (i = this._needsRemoving, e = i.length - 1; e >= 0; e--) if (i[e] === t) return !1;return !(!t.__parent || t.__parent._group !== this) || this._nonPointGroup.hasLayer(t);
	    }, zoomToShowLayer: function zoomToShowLayer(t, e) {
	      var i = function i() {
	        if ((t._icon || t.__parent._icon) && !this._inZoomAnimation) if ((this._map.off("moveend", i, this), this.off("animationend", i, this), t._icon)) e();else if (t.__parent._icon) {
	          var n = function n() {
	            this.off("spiderfied", n, this), e();
	          };this.on("spiderfied", n, this), t.__parent.spiderfy();
	        }
	      };t._icon && this._map.getBounds().contains(t.getLatLng()) ? e() : t.__parent._zoom < this._map.getZoom() ? (this._map.on("moveend", i, this), this._map.panTo(t.getLatLng())) : (this._map.on("moveend", i, this), this.on("animationend", i, this), this._map.setView(t.getLatLng(), t.__parent._zoom + 1), t.__parent.zoomToBounds());
	    }, onAdd: function onAdd(t) {
	      this._map = t;var e, i, n;if (!isFinite(this._map.getMaxZoom())) throw "Map has no maxZoom specified";for (this._featureGroup.onAdd(t), this._nonPointGroup.onAdd(t), this._gridClusters || this._generateInitialClusters(), e = 0, i = this._needsRemoving.length; i > e; e++) n = this._needsRemoving[e], this._removeLayer(n, !0);for (this._needsRemoving = [], e = 0, i = this._needsClustering.length; i > e; e++) n = this._needsClustering[e], n.getLatLng ? n.__parent || this._addLayer(n, this._maxZoom) : this._featureGroup.addLayer(n);this._needsClustering = [], this._map.on("zoomend", this._zoomEnd, this), this._map.on("moveend", this._moveEnd, this), this._spiderfierOnAdd && this._spiderfierOnAdd(), this._bindEvents(), this._zoom = this._map.getZoom(), this._currentShownBounds = this._getExpandedVisibleBounds(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds);
	    }, onRemove: function onRemove(t) {
	      t.off("zoomend", this._zoomEnd, this), t.off("moveend", this._moveEnd, this), this._unbindEvents(), this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", ""), this._spiderfierOnRemove && this._spiderfierOnRemove(), this._hideCoverage(), this._featureGroup.onRemove(t), this._nonPointGroup.onRemove(t), this._featureGroup.clearLayers(), this._map = null;
	    }, getVisibleParent: function getVisibleParent(t) {
	      for (var e = t; e && !e._icon;) e = e.__parent;return e || null;
	    }, _arraySplice: function _arraySplice(t, e) {
	      for (var i = t.length - 1; i >= 0; i--) if (t[i] === e) return (t.splice(i, 1), !0);
	    }, _removeLayer: function _removeLayer(t, e, i) {
	      var n = this._gridClusters,
	          s = this._gridUnclustered,
	          r = this._featureGroup,
	          o = this._map;if (e) for (var a = this._maxZoom; a >= 0 && s[a].removeObject(t, o.project(t.getLatLng(), a)); a--);var h,
	          _ = t.__parent,
	          u = _._markers;for (this._arraySplice(u, t); _ && (_._childCount--, !(_._zoom < 0));) e && _._childCount <= 1 ? (h = _._markers[0] === t ? _._markers[1] : _._markers[0], n[_._zoom].removeObject(_, o.project(_._cLatLng, _._zoom)), s[_._zoom].addObject(h, o.project(h.getLatLng(), _._zoom)), this._arraySplice(_.__parent._childClusters, _), _.__parent._markers.push(h), h.__parent = _.__parent, _._icon && (r.removeLayer(_), i || r.addLayer(h))) : (_._recalculateBounds(), i && _._icon || _._updateIcon()), _ = _.__parent;delete t.__parent;
	    }, _isOrIsParent: function _isOrIsParent(t, e) {
	      for (; e;) {
	        if (t === e) return !0;e = e.parentNode;
	      }return !1;
	    }, _propagateEvent: function _propagateEvent(t) {
	      if (t.layer instanceof L.MarkerCluster) {
	        if (t.originalEvent && this._isOrIsParent(t.layer._icon, t.originalEvent.relatedTarget)) return;t.type = "cluster" + t.type;
	      }this.fire(t.type, t);
	    }, _defaultIconCreateFunction: function _defaultIconCreateFunction(t) {
	      var e = t.getChildCount(),
	          i = " marker-cluster-";return (i += 10 > e ? "small" : 100 > e ? "medium" : "large", new L.DivIcon({ html: "<div><span>" + e + "</span></div>", className: "marker-cluster" + i, iconSize: new L.Point(40, 40) }));
	    }, _bindEvents: function _bindEvents() {
	      var t = this._map,
	          e = this.options.spiderfyOnMaxZoom,
	          i = this.options.showCoverageOnHover,
	          n = this.options.zoomToBoundsOnClick;(e || n) && this.on("clusterclick", this._zoomOrSpiderfy, this), i && (this.on("clustermouseover", this._showCoverage, this), this.on("clustermouseout", this._hideCoverage, this), t.on("zoomend", this._hideCoverage, this));
	    }, _zoomOrSpiderfy: function _zoomOrSpiderfy(t) {
	      var e = this._map;e.getMaxZoom() === e.getZoom() ? this.options.spiderfyOnMaxZoom && t.layer.spiderfy() : this.options.zoomToBoundsOnClick && t.layer.zoomToBounds(), t.originalEvent && 13 === t.originalEvent.keyCode && e._container.focus();
	    }, _showCoverage: function _showCoverage(t) {
	      var e = this._map;this._inZoomAnimation || (this._shownPolygon && e.removeLayer(this._shownPolygon), t.layer.getChildCount() > 2 && t.layer !== this._spiderfied && (this._shownPolygon = new L.Polygon(t.layer.getConvexHull(), this.options.polygonOptions), e.addLayer(this._shownPolygon)));
	    }, _hideCoverage: function _hideCoverage() {
	      this._shownPolygon && (this._map.removeLayer(this._shownPolygon), this._shownPolygon = null);
	    }, _unbindEvents: function _unbindEvents() {
	      var t = this.options.spiderfyOnMaxZoom,
	          e = this.options.showCoverageOnHover,
	          i = this.options.zoomToBoundsOnClick,
	          n = this._map;(t || i) && this.off("clusterclick", this._zoomOrSpiderfy, this), e && (this.off("clustermouseover", this._showCoverage, this), this.off("clustermouseout", this._hideCoverage, this), n.off("zoomend", this._hideCoverage, this));
	    }, _zoomEnd: function _zoomEnd() {
	      this._map && (this._mergeSplitClusters(), this._zoom = this._map._zoom, this._currentShownBounds = this._getExpandedVisibleBounds());
	    }, _moveEnd: function _moveEnd() {
	      if (!this._inZoomAnimation) {
	        var t = this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, this._zoom, t), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._map._zoom, t), this._currentShownBounds = t;
	      }
	    }, _generateInitialClusters: function _generateInitialClusters() {
	      var t = this._map.getMaxZoom(),
	          e = this.options.maxClusterRadius;this.options.disableClusteringAtZoom && (t = this.options.disableClusteringAtZoom - 1), this._maxZoom = t, this._gridClusters = {}, this._gridUnclustered = {};for (var i = t; i >= 0; i--) this._gridClusters[i] = new L.DistanceGrid(e), this._gridUnclustered[i] = new L.DistanceGrid(e);this._topClusterLevel = new L.MarkerCluster(this, -1);
	    }, _addLayer: function _addLayer(t, e) {
	      var i,
	          n,
	          s = this._gridClusters,
	          r = this._gridUnclustered;for (this.options.singleMarkerMode && (t.options.icon = this.options.iconCreateFunction({ getChildCount: function getChildCount() {
	          return 1;
	        }, getAllChildMarkers: function getAllChildMarkers() {
	          return [t];
	        } })); e >= 0; e--) {
	        i = this._map.project(t.getLatLng(), e);var o = s[e].getNearObject(i);if (o) return (o._addChild(t), t.__parent = o, void 0);if (o = r[e].getNearObject(i)) {
	          var a = o.__parent;a && this._removeLayer(o, !1);var h = new L.MarkerCluster(this, e, o, t);s[e].addObject(h, this._map.project(h._cLatLng, e)), o.__parent = h, t.__parent = h;var _ = h;for (n = e - 1; n > a._zoom; n--) _ = new L.MarkerCluster(this, n, _), s[n].addObject(_, this._map.project(o.getLatLng(), n));for (a._addChild(_), n = e; n >= 0 && r[n].removeObject(o, this._map.project(o.getLatLng(), n)); n--);return;
	        }r[e].addObject(t, i);
	      }this._topClusterLevel._addChild(t), t.__parent = this._topClusterLevel;
	    }, _enqueue: function _enqueue(t) {
	      this._queue.push(t), this._queueTimeout || (this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300));
	    }, _processQueue: function _processQueue() {
	      for (var t = 0; t < this._queue.length; t++) this._queue[t].call(this);this._queue.length = 0, clearTimeout(this._queueTimeout), this._queueTimeout = null;
	    }, _mergeSplitClusters: function _mergeSplitClusters() {
	      this._processQueue(), this._zoom < this._map._zoom && this._currentShownBounds.contains(this._getExpandedVisibleBounds()) ? (this._animationStart(), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, this._zoom, this._getExpandedVisibleBounds()), this._animationZoomIn(this._zoom, this._map._zoom)) : this._zoom > this._map._zoom ? (this._animationStart(), this._animationZoomOut(this._zoom, this._map._zoom)) : this._moveEnd();
	    }, _getExpandedVisibleBounds: function _getExpandedVisibleBounds() {
	      if (!this.options.removeOutsideVisibleBounds) return this.getBounds();var t = this._map,
	          e = t.getBounds(),
	          i = e._southWest,
	          n = e._northEast,
	          s = L.Browser.mobile ? 0 : Math.abs(i.lat - n.lat),
	          r = L.Browser.mobile ? 0 : Math.abs(i.lng - n.lng);return new L.LatLngBounds(new L.LatLng(i.lat - s, i.lng - r, !0), new L.LatLng(n.lat + s, n.lng + r, !0));
	    }, _animationAddLayerNonAnimated: function _animationAddLayerNonAnimated(t, e) {
	      if (e === t) this._featureGroup.addLayer(t);else if (2 === e._childCount) {
	        e._addToMap();var i = e.getAllChildMarkers();this._featureGroup.removeLayer(i[0]), this._featureGroup.removeLayer(i[1]);
	      } else e._updateIcon();
	    } }), L.MarkerClusterGroup.include(L.DomUtil.TRANSITION ? { _animationStart: function _animationStart() {
	      this._map._mapPane.className += " leaflet-cluster-anim", this._inZoomAnimation++;
	    }, _animationEnd: function _animationEnd() {
	      this._map && (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")), this._inZoomAnimation--, this.fire("animationend");
	    }, _animationZoomIn: function _animationZoomIn(t, e) {
	      var i,
	          n = this._getExpandedVisibleBounds(),
	          s = this._featureGroup;this._topClusterLevel._recursively(n, t, 0, function (r) {
	        var o,
	            a = r._latlng,
	            h = r._markers;for (n.contains(a) || (a = null), r._isSingleParent() && t + 1 === e ? (s.removeLayer(r), r._recursivelyAddChildrenToMap(null, e, n)) : (r.setOpacity(0), r._recursivelyAddChildrenToMap(a, e, n)), i = h.length - 1; i >= 0; i--) o = h[i], n.contains(o._latlng) || s.removeLayer(o);
	      }), this._forceLayout(), this._topClusterLevel._recursivelyBecomeVisible(n, e), s.eachLayer(function (t) {
	        t instanceof L.MarkerCluster || !t._icon || t.setOpacity(1);
	      }), this._topClusterLevel._recursively(n, t, e, function (t) {
	        t._recursivelyRestoreChildPositions(e);
	      }), this._enqueue(function () {
	        this._topClusterLevel._recursively(n, t, 0, function (t) {
	          s.removeLayer(t), t.setOpacity(1);
	        }), this._animationEnd();
	      });
	    }, _animationZoomOut: function _animationZoomOut(t, e) {
	      this._animationZoomOutSingle(this._topClusterLevel, t - 1, e), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, t, this._getExpandedVisibleBounds());
	    }, _animationZoomOutSingle: function _animationZoomOutSingle(t, e, i) {
	      var n = this._getExpandedVisibleBounds();t._recursivelyAnimateChildrenInAndAddSelfToMap(n, e + 1, i);var s = this;this._forceLayout(), t._recursivelyBecomeVisible(n, i), this._enqueue(function () {
	        if (1 === t._childCount) {
	          var r = t._markers[0];r.setLatLng(r.getLatLng()), r.setOpacity(1);
	        } else t._recursively(n, i, 0, function (t) {
	          t._recursivelyRemoveChildrenFromMap(n, e + 1);
	        });s._animationEnd();
	      });
	    }, _animationAddLayer: function _animationAddLayer(t, e) {
	      var i = this,
	          n = this._featureGroup;n.addLayer(t), e !== t && (e._childCount > 2 ? (e._updateIcon(), this._forceLayout(), this._animationStart(), t._setPos(this._map.latLngToLayerPoint(e.getLatLng())), t.setOpacity(0), this._enqueue(function () {
	        n.removeLayer(t), t.setOpacity(1), i._animationEnd();
	      })) : (this._forceLayout(), i._animationStart(), i._animationZoomOutSingle(e, this._map.getMaxZoom(), this._map.getZoom())));
	    }, _forceLayout: function _forceLayout() {
	      L.Util.falseFn(e.body.offsetWidth);
	    } } : { _animationStart: function _animationStart() {}, _animationZoomIn: function _animationZoomIn(t, e) {
	      this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, t), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds());
	    }, _animationZoomOut: function _animationZoomOut(t, e) {
	      this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, t), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds());
	    }, _animationAddLayer: function _animationAddLayer(t, e) {
	      this._animationAddLayerNonAnimated(t, e);
	    } }), L.markerClusterGroup = function (t) {
	    return new L.MarkerClusterGroup(t);
	  }, L.MarkerCluster = L.Marker.extend({ initialize: function initialize(t, e, i, n) {
	      L.Marker.prototype.initialize.call(this, i ? i._cLatLng || i.getLatLng() : new L.LatLng(0, 0), { icon: this }), this._group = t, this._zoom = e, this._markers = [], this._childClusters = [], this._childCount = 0, this._iconNeedsUpdate = !0, this._bounds = new L.LatLngBounds(), i && this._addChild(i), n && this._addChild(n);
	    }, getAllChildMarkers: function getAllChildMarkers(t) {
	      t = t || [];for (var e = this._childClusters.length - 1; e >= 0; e--) this._childClusters[e].getAllChildMarkers(t);for (var i = this._markers.length - 1; i >= 0; i--) t.push(this._markers[i]);return t;
	    }, getChildCount: function getChildCount() {
	      return this._childCount;
	    }, zoomToBounds: function zoomToBounds() {
	      for (var t, e = this._childClusters.slice(), i = this._group._map, n = i.getBoundsZoom(this._bounds), s = this._zoom + 1, r = i.getZoom(); e.length > 0 && n > s;) {
	        s++;var o = [];for (t = 0; t < e.length; t++) o = o.concat(e[t]._childClusters);e = o;
	      }n > s ? this._group._map.setView(this._latlng, s) : r >= n ? this._group._map.setView(this._latlng, r + 1) : this._group._map.fitBounds(this._bounds);
	    }, getBounds: function getBounds() {
	      var t = new L.LatLngBounds();return (t.extend(this._bounds), t);
	    }, _updateIcon: function _updateIcon() {
	      this._iconNeedsUpdate = !0, this._icon && this.setIcon(this);
	    }, createIcon: function createIcon() {
	      return (this._iconNeedsUpdate && (this._iconObj = this._group.options.iconCreateFunction(this), this._iconNeedsUpdate = !1), this._iconObj.createIcon());
	    }, createShadow: function createShadow() {
	      return this._iconObj.createShadow();
	    }, _addChild: function _addChild(t, e) {
	      this._iconNeedsUpdate = !0, this._expandBounds(t), t instanceof L.MarkerCluster ? (e || (this._childClusters.push(t), t.__parent = this), this._childCount += t._childCount) : (e || this._markers.push(t), this._childCount++), this.__parent && this.__parent._addChild(t, !0);
	    }, _expandBounds: function _expandBounds(t) {
	      var e,
	          i = t._wLatLng || t._latlng;t instanceof L.MarkerCluster ? (this._bounds.extend(t._bounds), e = t._childCount) : (this._bounds.extend(i), e = 1), this._cLatLng || (this._cLatLng = t._cLatLng || i);var n = this._childCount + e;this._wLatLng ? (this._wLatLng.lat = (i.lat * e + this._wLatLng.lat * this._childCount) / n, this._wLatLng.lng = (i.lng * e + this._wLatLng.lng * this._childCount) / n) : this._latlng = this._wLatLng = new L.LatLng(i.lat, i.lng);
	    }, _addToMap: function _addToMap(t) {
	      t && (this._backupLatlng = this._latlng, this.setLatLng(t)), this._group._featureGroup.addLayer(this);
	    }, _recursivelyAnimateChildrenIn: function _recursivelyAnimateChildrenIn(t, e, i) {
	      this._recursively(t, 0, i - 1, function (t) {
	        var i,
	            n,
	            s = t._markers;for (i = s.length - 1; i >= 0; i--) n = s[i], n._icon && (n._setPos(e), n.setOpacity(0));
	      }, function (t) {
	        var i,
	            n,
	            s = t._childClusters;for (i = s.length - 1; i >= 0; i--) n = s[i], n._icon && (n._setPos(e), n.setOpacity(0));
	      });
	    }, _recursivelyAnimateChildrenInAndAddSelfToMap: function _recursivelyAnimateChildrenInAndAddSelfToMap(t, e, i) {
	      this._recursively(t, i, 0, function (n) {
	        n._recursivelyAnimateChildrenIn(t, n._group._map.latLngToLayerPoint(n.getLatLng()).round(), e), n._isSingleParent() && e - 1 === i ? (n.setOpacity(1), n._recursivelyRemoveChildrenFromMap(t, e)) : n.setOpacity(0), n._addToMap();
	      });
	    }, _recursivelyBecomeVisible: function _recursivelyBecomeVisible(t, e) {
	      this._recursively(t, 0, e, null, function (t) {
	        t.setOpacity(1);
	      });
	    }, _recursivelyAddChildrenToMap: function _recursivelyAddChildrenToMap(t, e, i) {
	      this._recursively(i, -1, e, function (n) {
	        if (e !== n._zoom) for (var s = n._markers.length - 1; s >= 0; s--) {
	          var r = n._markers[s];i.contains(r._latlng) && (t && (r._backupLatlng = r.getLatLng(), r.setLatLng(t), r.setOpacity && r.setOpacity(0)), n._group._featureGroup.addLayer(r));
	        }
	      }, function (e) {
	        e._addToMap(t);
	      });
	    }, _recursivelyRestoreChildPositions: function _recursivelyRestoreChildPositions(t) {
	      for (var e = this._markers.length - 1; e >= 0; e--) {
	        var i = this._markers[e];i._backupLatlng && (i.setLatLng(i._backupLatlng), delete i._backupLatlng);
	      }if (t - 1 === this._zoom) for (var n = this._childClusters.length - 1; n >= 0; n--) this._childClusters[n]._restorePosition();else for (var s = this._childClusters.length - 1; s >= 0; s--) this._childClusters[s]._recursivelyRestoreChildPositions(t);
	    }, _restorePosition: function _restorePosition() {
	      this._backupLatlng && (this.setLatLng(this._backupLatlng), delete this._backupLatlng);
	    }, _recursivelyRemoveChildrenFromMap: function _recursivelyRemoveChildrenFromMap(t, e, i) {
	      var n, s;this._recursively(t, -1, e - 1, function (t) {
	        for (s = t._markers.length - 1; s >= 0; s--) n = t._markers[s], i && i.contains(n._latlng) || (t._group._featureGroup.removeLayer(n), n.setOpacity && n.setOpacity(1));
	      }, function (t) {
	        for (s = t._childClusters.length - 1; s >= 0; s--) n = t._childClusters[s], i && i.contains(n._latlng) || (t._group._featureGroup.removeLayer(n), n.setOpacity && n.setOpacity(1));
	      });
	    }, _recursively: function _recursively(t, e, i, n, s) {
	      var r,
	          o,
	          a = this._childClusters,
	          h = this._zoom;if (e > h) for (r = a.length - 1; r >= 0; r--) o = a[r], t.intersects(o._bounds) && o._recursively(t, e, i, n, s);else if ((n && n(this), s && this._zoom === i && s(this), i > h)) for (r = a.length - 1; r >= 0; r--) o = a[r], t.intersects(o._bounds) && o._recursively(t, e, i, n, s);
	    }, _recalculateBounds: function _recalculateBounds() {
	      var t,
	          e = this._markers,
	          i = this._childClusters;for (this._bounds = new L.LatLngBounds(), delete this._wLatLng, t = e.length - 1; t >= 0; t--) this._expandBounds(e[t]);for (t = i.length - 1; t >= 0; t--) this._expandBounds(i[t]);
	    }, _isSingleParent: function _isSingleParent() {
	      return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount;
	    } }), L.DistanceGrid = function (t) {
	    this._cellSize = t, this._sqCellSize = t * t, this._grid = {}, this._objectPoint = {};
	  }, L.DistanceGrid.prototype = { addObject: function addObject(t, e) {
	      var i = this._getCoord(e.x),
	          n = this._getCoord(e.y),
	          s = this._grid,
	          r = s[n] = s[n] || {},
	          o = r[i] = r[i] || [],
	          a = L.Util.stamp(t);this._objectPoint[a] = e, o.push(t);
	    }, updateObject: function updateObject(t, e) {
	      this.removeObject(t), this.addObject(t, e);
	    }, removeObject: function removeObject(t, e) {
	      var i,
	          n,
	          s = this._getCoord(e.x),
	          r = this._getCoord(e.y),
	          o = this._grid,
	          a = o[r] = o[r] || {},
	          h = a[s] = a[s] || [];for (delete this._objectPoint[L.Util.stamp(t)], i = 0, n = h.length; n > i; i++) if (h[i] === t) return (h.splice(i, 1), 1 === n && delete a[s], !0);
	    }, eachObject: function eachObject(t, e) {
	      var i,
	          n,
	          s,
	          r,
	          o,
	          a,
	          h,
	          _ = this._grid;for (i in _) {
	        o = _[i];for (n in o) for (a = o[n], s = 0, r = a.length; r > s; s++) h = t.call(e, a[s]), h && (s--, r--);
	      }
	    }, getNearObject: function getNearObject(t) {
	      var e,
	          i,
	          n,
	          s,
	          r,
	          o,
	          a,
	          h,
	          _ = this._getCoord(t.x),
	          u = this._getCoord(t.y),
	          l = this._objectPoint,
	          d = this._sqCellSize,
	          p = null;for (e = u - 1; u + 1 >= e; e++) if (s = this._grid[e]) for (i = _ - 1; _ + 1 >= i; i++) if (r = s[i]) for (n = 0, o = r.length; o > n; n++) a = r[n], h = this._sqDist(l[L.Util.stamp(a)], t), d > h && (d = h, p = a);return p;
	    }, _getCoord: function _getCoord(t) {
	      return Math.floor(t / this._cellSize);
	    }, _sqDist: function _sqDist(t, e) {
	      var i = e.x - t.x,
	          n = e.y - t.y;return i * i + n * n;
	    } }, (function () {
	    L.QuickHull = { getDistant: function getDistant(t, e) {
	        var i = e[1].lat - e[0].lat,
	            n = e[0].lng - e[1].lng;return n * (t.lat - e[0].lat) + i * (t.lng - e[0].lng);
	      }, findMostDistantPointFromBaseLine: function findMostDistantPointFromBaseLine(t, e) {
	        var i,
	            n,
	            s,
	            r = 0,
	            o = null,
	            a = [];for (i = e.length - 1; i >= 0; i--) n = e[i], s = this.getDistant(n, t), s > 0 && (a.push(n), s > r && (r = s, o = n));return { maxPoint: o, newPoints: a };
	      }, buildConvexHull: function buildConvexHull(t, e) {
	        var i = [],
	            n = this.findMostDistantPointFromBaseLine(t, e);return n.maxPoint ? (i = i.concat(this.buildConvexHull([t[0], n.maxPoint], n.newPoints)), i = i.concat(this.buildConvexHull([n.maxPoint, t[1]], n.newPoints))) : [t[0]];
	      }, getConvexHull: function getConvexHull(t) {
	        var e,
	            i = !1,
	            n = !1,
	            s = null,
	            r = null;for (e = t.length - 1; e >= 0; e--) {
	          var o = t[e];(i === !1 || o.lat > i) && (s = o, i = o.lat), (n === !1 || o.lat < n) && (r = o, n = o.lat);
	        }var a = [].concat(this.buildConvexHull([r, s], t), this.buildConvexHull([s, r], t));return a;
	      } };
	  })(), L.MarkerCluster.include({ getConvexHull: function getConvexHull() {
	      var t,
	          e,
	          i = this.getAllChildMarkers(),
	          n = [];for (e = i.length - 1; e >= 0; e--) t = i[e].getLatLng(), n.push(t);return L.QuickHull.getConvexHull(n);
	    } }), L.MarkerCluster.include({ _2PI: 2 * Math.PI, _circleFootSeparation: 25, _circleStartAngle: Math.PI / 6, _spiralFootSeparation: 28, _spiralLengthStart: 11, _spiralLengthFactor: 5, _circleSpiralSwitchover: 9, spiderfy: function spiderfy() {
	      if (this._group._spiderfied !== this && !this._group._inZoomAnimation) {
	        var t,
	            e = this.getAllChildMarkers(),
	            i = this._group,
	            n = i._map,
	            s = n.latLngToLayerPoint(this._latlng);this._group._unspiderfy(), this._group._spiderfied = this, e.length >= this._circleSpiralSwitchover ? t = this._generatePointsSpiral(e.length, s) : (s.y += 10, t = this._generatePointsCircle(e.length, s)), this._animationSpiderfy(e, t);
	      }
	    }, unspiderfy: function unspiderfy(t) {
	      this._group._inZoomAnimation || (this._animationUnspiderfy(t), this._group._spiderfied = null);
	    }, _generatePointsCircle: function _generatePointsCircle(t, e) {
	      var i,
	          n,
	          s = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + t),
	          r = s / this._2PI,
	          o = this._2PI / t,
	          a = [];for (a.length = t, i = t - 1; i >= 0; i--) n = this._circleStartAngle + i * o, a[i] = new L.Point(e.x + r * Math.cos(n), e.y + r * Math.sin(n))._round();return a;
	    }, _generatePointsSpiral: function _generatePointsSpiral(t, e) {
	      var i,
	          n = this._group.options.spiderfyDistanceMultiplier * this._spiralLengthStart,
	          s = this._group.options.spiderfyDistanceMultiplier * this._spiralFootSeparation,
	          r = this._group.options.spiderfyDistanceMultiplier * this._spiralLengthFactor,
	          o = 0,
	          a = [];for (a.length = t, i = t - 1; i >= 0; i--) o += s / n + 5e-4 * i, a[i] = new L.Point(e.x + n * Math.cos(o), e.y + n * Math.sin(o))._round(), n += this._2PI * r / o;return a;
	    }, _noanimationUnspiderfy: function _noanimationUnspiderfy() {
	      var t,
	          e,
	          i = this._group,
	          n = i._map,
	          s = i._featureGroup,
	          r = this.getAllChildMarkers();for (this.setOpacity(1), e = r.length - 1; e >= 0; e--) t = r[e], s.removeLayer(t), t._preSpiderfyLatlng && (t.setLatLng(t._preSpiderfyLatlng), delete t._preSpiderfyLatlng), t.setZIndexOffset && t.setZIndexOffset(0), t._spiderLeg && (n.removeLayer(t._spiderLeg), delete t._spiderLeg);i._spiderfied = null;
	    } }), L.MarkerCluster.include(L.DomUtil.TRANSITION ? { SVG_ANIMATION: (function () {
	      return e.createElementNS("http://www.w3.org/2000/svg", "animate").toString().indexOf("SVGAnimate") > -1;
	    })(), _animationSpiderfy: function _animationSpiderfy(t, i) {
	      var n,
	          s,
	          r,
	          o,
	          a = this,
	          h = this._group,
	          _ = h._map,
	          u = h._featureGroup,
	          l = _.latLngToLayerPoint(this._latlng);for (n = t.length - 1; n >= 0; n--) s = t[n], s.setOpacity ? (s.setZIndexOffset(1e6), s.setOpacity(0), u.addLayer(s), s._setPos(l)) : u.addLayer(s);h._forceLayout(), h._animationStart();var d = L.Path.SVG ? 0 : .3,
	          p = L.Path.SVG_NS;for (n = t.length - 1; n >= 0; n--) if ((o = _.layerPointToLatLng(i[n]), s = t[n], s._preSpiderfyLatlng = s._latlng, s.setLatLng(o), s.setOpacity && s.setOpacity(1), r = new L.Polyline([a._latlng, o], { weight: 1.5, color: "#222", opacity: d }), _.addLayer(r), s._spiderLeg = r, L.Path.SVG && this.SVG_ANIMATION)) {
	        var c = r._path.getTotalLength();r._path.setAttribute("stroke-dasharray", c + "," + c);var m = e.createElementNS(p, "animate");m.setAttribute("attributeName", "stroke-dashoffset"), m.setAttribute("begin", "indefinite"), m.setAttribute("from", c), m.setAttribute("to", 0), m.setAttribute("dur", .25), r._path.appendChild(m), m.beginElement(), m = e.createElementNS(p, "animate"), m.setAttribute("attributeName", "stroke-opacity"), m.setAttribute("attributeName", "stroke-opacity"), m.setAttribute("begin", "indefinite"), m.setAttribute("from", 0), m.setAttribute("to", .5), m.setAttribute("dur", .25), r._path.appendChild(m), m.beginElement();
	      }if ((a.setOpacity(.3), L.Path.SVG)) for (this._group._forceLayout(), n = t.length - 1; n >= 0; n--) s = t[n]._spiderLeg, s.options.opacity = .5, s._path.setAttribute("stroke-opacity", .5);setTimeout(function () {
	        h._animationEnd(), h.fire("spiderfied");
	      }, 200);
	    }, _animationUnspiderfy: function _animationUnspiderfy(t) {
	      var e,
	          i,
	          n,
	          s = this._group,
	          r = s._map,
	          o = s._featureGroup,
	          a = t ? r._latLngToNewLayerPoint(this._latlng, t.zoom, t.center) : r.latLngToLayerPoint(this._latlng),
	          h = this.getAllChildMarkers(),
	          _ = L.Path.SVG && this.SVG_ANIMATION;for (s._animationStart(), this.setOpacity(1), i = h.length - 1; i >= 0; i--) e = h[i], e._preSpiderfyLatlng && (e.setLatLng(e._preSpiderfyLatlng), delete e._preSpiderfyLatlng, e.setOpacity ? (e._setPos(a), e.setOpacity(0)) : o.removeLayer(e), _ && (n = e._spiderLeg._path.childNodes[0], n.setAttribute("to", n.getAttribute("from")), n.setAttribute("from", 0), n.beginElement(), n = e._spiderLeg._path.childNodes[1], n.setAttribute("from", .5), n.setAttribute("to", 0), n.setAttribute("stroke-opacity", 0), n.beginElement(), e._spiderLeg._path.setAttribute("stroke-opacity", 0)));setTimeout(function () {
	        var t = 0;for (i = h.length - 1; i >= 0; i--) e = h[i], e._spiderLeg && t++;for (i = h.length - 1; i >= 0; i--) e = h[i], e._spiderLeg && (e.setOpacity && (e.setOpacity(1), e.setZIndexOffset(0)), t > 1 && o.removeLayer(e), r.removeLayer(e._spiderLeg), delete e._spiderLeg);s._animationEnd();
	      }, 200);
	    } } : { _animationSpiderfy: function _animationSpiderfy(t, e) {
	      var i,
	          n,
	          s,
	          r,
	          o = this._group,
	          a = o._map,
	          h = o._featureGroup;for (i = t.length - 1; i >= 0; i--) r = a.layerPointToLatLng(e[i]), n = t[i], n._preSpiderfyLatlng = n._latlng, n.setLatLng(r), n.setZIndexOffset && n.setZIndexOffset(1e6), h.addLayer(n), s = new L.Polyline([this._latlng, r], { weight: 1.5, color: "#222" }), a.addLayer(s), n._spiderLeg = s;this.setOpacity(.3), o.fire("spiderfied");
	    }, _animationUnspiderfy: function _animationUnspiderfy() {
	      this._noanimationUnspiderfy();
	    } }), L.MarkerClusterGroup.include({ _spiderfied: null, _spiderfierOnAdd: function _spiderfierOnAdd() {
	      this._map.on("click", this._unspiderfyWrapper, this), this._map.options.zoomAnimation && this._map.on("zoomstart", this._unspiderfyZoomStart, this), this._map.on("zoomend", this._noanimationUnspiderfy, this), L.Path.SVG && !L.Browser.touch && this._map._initPathRoot();
	    }, _spiderfierOnRemove: function _spiderfierOnRemove() {
	      this._map.off("click", this._unspiderfyWrapper, this), this._map.off("zoomstart", this._unspiderfyZoomStart, this), this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy();
	    }, _unspiderfyZoomStart: function _unspiderfyZoomStart() {
	      this._map && this._map.on("zoomanim", this._unspiderfyZoomAnim, this);
	    }, _unspiderfyZoomAnim: function _unspiderfyZoomAnim(t) {
	      L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching") || (this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy(t));
	    }, _unspiderfyWrapper: function _unspiderfyWrapper() {
	      this._unspiderfy();
	    }, _unspiderfy: function _unspiderfy(t) {
	      this._spiderfied && this._spiderfied.unspiderfy(t);
	    }, _noanimationUnspiderfy: function _noanimationUnspiderfy() {
	      this._spiderfied && this._spiderfied._noanimationUnspiderfy();
	    }, _unspiderfyLayer: function _unspiderfyLayer(t) {
	      t._spiderLeg && (this._featureGroup.removeLayer(t), t.setOpacity(1), t.setZIndexOffset(0), this._map.removeLayer(t._spiderLeg), delete t._spiderLeg);
	    } });
	})(window, document);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _mosaicDataset = __webpack_require__(9);

	var _leaflet = __webpack_require__(35);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	var LeafletClusterAdapter = (function () {
	    function LeafletClusterAdapter(options, dataSet) {
	        _classCallCheck(this, LeafletClusterAdapter);

	        this.options = options || {};
	        this.dataSet = dataSet;
	    }

	    _createClass(LeafletClusterAdapter, [{
	        key: 'newClusterIcon',
	        value: function newClusterIcon(cluster) {
	            var childCount = cluster.getChildCount();

	            var c = ' marker-cluster-';
	            if (childCount < 10) {
	                c += 'small';
	            } else if (childCount < 100) {
	                c += 'medium';
	            } else {
	                c += 'large';
	            }

	            return new _leaflet2['default'].DivIcon({
	                html: '<div><span>' + childCount + '</span></div>',
	                className: 'marker-cluster' + c,
	                iconSize: new _leaflet2['default'].Point(40, 40)
	            });
	        }
	    }, {
	        key: 'getClusterPolygonOptions',
	        value: function getClusterPolygonOptions() {
	            return {
	                stroke: true,
	                color: 'white',
	                weight: 1,
	                opacity: 1,
	                fill: true,
	                fillColor: 'white',
	                fillOpacity: 0.3
	            };
	        }
	    }]);

	    return LeafletClusterAdapter;
	})();

	exports['default'] = LeafletClusterAdapter;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var L = __webpack_require__(35);

	/**
	 * 
	 */
	var InteractionLayer = L.Class.extend({

	    includes: L.Mixin.Events,

	    options: {
	        resolution: 4,
	        pointerCursor: true
	    },

	    /** Initializes this layer */
	    initialize: function initialize(options) {
	        L.setOptions(this, options);
	        // this._move = _.throttle(this._move, 20);
	        // this._update = _.debounce(this._update, 10);
	    },

	    /**
	     * This method is called when this layer is added to the map.
	     */
	    onAdd: function onAdd(map) {
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
	    onRemove: function onRemove() {
	        var map = this._map;
	        map.off('click', this._click, this);
	        map.off('mousemove', this._move, this);
	        // map.off('moveend', this._update, this);
	        this._removeMouseCursorStyle();
	    },

	    /** Map click handler */
	    _click: function _click(e) {
	        this._objectForEvent(e, (function (err, on) {
	            if (err) {
	                return;
	            }
	            if (on.data) {
	                this.fire('click', on);
	            }
	        }).bind(this));
	    },

	    /** Map move handler */
	    _move: function _move(e) {
	        this._objectForEvent(e, (function (err, on) {
	            if (err) return;
	            if (on.data !== this._mouseOn) {
	                if (this._mouseOn) {
	                    this.fire('mouseout', {
	                        latlng: e.latlng,
	                        data: this._mouseOn
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
	        }).bind(this));
	    },

	    /**
	     * Checks if the cursor style of the container should be changed to pointer
	     * cursor
	     */
	    _setMouseCursorStyle: function _setMouseCursorStyle() {
	        if (!this.options.pointerCursor) return;
	        if (!this._container._pointerCursorCount) {
	            this._container._pointerCursorCount = 1;
	            this._container.style.cursor = 'pointer';
	        } else {
	            this._container._pointerCursorCount++;
	        }
	    },

	    /** Removes cursor style from the container */
	    _removeMouseCursorStyle: function _removeMouseCursorStyle() {
	        if (!this.options.pointerCursor) return;
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
	    _objectForEvent: function _objectForEvent(e, callback) {
	        throw new Error('This method should be implemented ' + //
	        'in subclasses.');
	    }

	});

	module.exports = InteractionLayer;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _leaflet = __webpack_require__(35);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	var _LeafletAdapter2 = __webpack_require__(2);

	var _LeafletAdapter3 = _interopRequireDefault(_LeafletAdapter2);

	var LeafletTilesAdapter = (function (_LeafletAdapter) {
	    _inherits(LeafletTilesAdapter, _LeafletAdapter);

	    function LeafletTilesAdapter() {
	        _classCallCheck(this, LeafletTilesAdapter);

	        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	            params[_key] = arguments[_key];
	        }

	        _get(Object.getPrototypeOf(LeafletTilesAdapter.prototype), 'constructor', this).apply(this, params);
	    }

	    _createClass(LeafletTilesAdapter, [{
	        key: 'newLeafletLayer',
	        value: function newLeafletLayer() {
	            var item = this.item;
	            var tilesUrl = item.get('properties.tilesUrl');
	            var attribution = item.get('properties.attribution');
	            var minZoom = item.get('properties.minZoom');
	            var maxZoom = item.get('properties.maxZoom');
	            var tilesLayer = _leaflet2['default'].tileLayer(tilesUrl, {
	                attribution: attribution,
	                minZoom: minZoom,
	                maxZoom: maxZoom
	            });
	            return tilesLayer;
	        }
	    }]);

	    return LeafletTilesAdapter;
	})(_LeafletAdapter3['default']);

	exports['default'] = LeafletTilesAdapter;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var L = __webpack_require__(35);
	var InteractionLayer = __webpack_require__(41);

	// Copied from the Leaflet.utfgrid implementation
	GridLoader.ajax = function (url, cb) {
	    // the following is from JavaScript: The Definitive Guide
	    // and
	    // https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest_in_IE6
	    if (window.XMLHttpRequest === undefined) {
	        window.XMLHttpRequest = function () {
	            /* global ActiveXObject:true */
	            try {
	                return new ActiveXObject("Microsoft.XMLHTTP");
	            } catch (e) {
	                throw new Error("XMLHttpRequest is not supported");
	            }
	        };
	    }
	    var response,
	        request = new XMLHttpRequest();
	    request.open("GET", url);
	    request.onreadystatechange = function () {
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
	};

	function now() {
	    return new Date().getTime();
	}
	GridLoader.Slot = function () {
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
	        if (!finished) return;
	        for (var i = 0; i < listeners.length; i++) {
	            try {
	                listeners[i](error, data);
	            } catch (e) {}
	        }
	        listeners = [];
	    }
	};

	function GridLoader(options) {
	    this.options = options || {};
	    this.options.subdomains = this.options.subdomains || 'abc';
	    var cache = {};
	    var cacheTimeout = this.options.cacheTimeout || 60 * 1000 * 5; // 5 min
	    this.loadTile = (function (zoom, pos, callback) {
	        var url = L.Util.template(this.options.url, L.Util.extend({
	            s: L.TileLayer.prototype._getSubdomain.call(this, {
	                x: pos.x,
	                y: pos.y
	            }),
	            z: zoom,
	            x: pos.x,
	            y: pos.y
	        }, this.options));
	        var time = cleanCache();
	        var key = zoom + '_' + pos.x + '_' + pos.y; // Cache key for this tile
	        var slot = cache[key];
	        if (!slot) {
	            slot = cache[key] = new GridLoader.Slot();
	            GridLoader.ajax(url, (function (data) {
	                slot.finish(null, data);
	            }).bind(this));
	        }
	        slot.onFinish(callback);
	    }).bind(this);

	    this.setUrl = function (url) {
	        this.options.url = url;
	        this.clear();
	    };

	    this.clear = function () {
	        prevTime = 0;
	        cleanCache();
	        cache = {};
	    };
	    var prevTime = 0;
	    function cleanCache() {
	        var time = now();
	        if (time - prevTime > cacheTimeout) {
	            var remove = [];
	            for (var key in cache) {
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

	    options: {
	        resolution: 4,
	        pointerCursor: true,
	        tileSize: 256,
	        subdomains: 'abc'
	    },

	    /** Initializes this layer */
	    initialize: function initialize(options) {
	        var parent = InteractionLayer.prototype;
	        parent.initialize.call(this, options);
	        this.options.resolution = this.options.resolution || 4;
	        this.options.pointerCursor = this.options.pointerCursor || true;
	        this._loader = this._newLoader();
	    },

	    _newLoader: function _newLoader() {
	        return this.options.loader || new UtfGrid.GridLoader(this.options);
	    },

	    /**
	     * Returns an object from UTF grid corresponding to the coordinates of the
	     * mouse event.
	     */
	    _objectForEvent: function _objectForEvent(e, callback) {
	        var map = this._map;
	        var zoom = map.getZoom();
	        var point = map.project(e.latlng);
	        var pos = this._getTilePosition(point);
	        this._loader.loadTile(zoom, pos, (function (err, tile) {
	            if (err) {
	                callback(err);
	                return;
	            }
	            var result;
	            if (tile) {
	                result = this._getTileObject(tile, point);
	            }
	            callback(null, {
	                latlng: e.latlng,
	                data: result
	            });
	        }).bind(this));
	    },

	    /**
	     * Returns an object from the specified tile corresponding to the given
	     * position.
	     */
	    _getTileObject: function _getTileObject(tile, point) {
	        var gridX = this._getTileShift(point.x);
	        var gridY = this._getTileShift(point.y);
	        var idx = this._utfDecode(tile.grid[gridY].charCodeAt(gridX));
	        var key = tile.keys[idx];
	        var result = this._processData(tile.data[key]);
	        return result;
	    },

	    /** Sets a new URL template. */
	    setUrl: function setUrl(url) {
	        if (this._loader.setUrl) {
	            this._loader.setUrl(url);
	        }
	    },

	    /**
	     * Returns X/Y coordinates of the tile corresponding to the specified point
	     * on the map
	     */
	    _getTilePosition: function _getTilePosition(point) {
	        var tileSize = this.options.tileSize;
	        return L.point(Math.floor(point.x / tileSize), Math.floor(point.y / tileSize));
	    },

	    /**
	     * Returns a list of all objects contained in the specified UTFGrid tile.
	     */
	    getTileObjects: function getTileObjects(tile) {
	        var result = [];
	        if (tile && tile.data) {
	            var data = tile.data;
	            result = Object.keys(data).map(function (key) {
	                return this._processData(data[key]);
	            }, this);
	        }
	        return result;
	    },

	    /**
	     * Pre-process individual data object before returning it to the caller.
	     */
	    _processData: function _processData(data) {
	        if (!data) return data;
	        if (!this._processDataF) {
	            this._processDataF = this.options.processData || //
	            function (data) {
	                return data;
	            };
	        }
	        return this._processDataF(data);
	    },

	    /**
	     * Returns position of the specified coordinates in a tile
	     */
	    _getTileShift: function _getTileShift(val) {
	        var tileSize = this.options.tileSize;
	        var resolution = this.options.resolution;
	        return Math.floor((val - Math.floor(val / tileSize) * tileSize) / //
	        resolution);
	    },

	    /**
	     * Decodes the specified character and transforms it in an index
	     */
	    _utfDecode: function _utfDecode(ch) {
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

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _leaflet = __webpack_require__(35);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	__webpack_require__(45);

	var _react = __webpack_require__(46);

	var _react2 = _interopRequireDefault(_react);

	var _promise = __webpack_require__(5);

	var _promise2 = _interopRequireDefault(_promise);

	var _mosaicUi = __webpack_require__(47);

	var _LeafletAdapter = __webpack_require__(2);

	var _LeafletAdapter2 = _interopRequireDefault(_LeafletAdapter);

	var MapView = (function (_View) {
	    _inherits(MapView, _View);

	    function MapView() {
	        _classCallCheck(this, MapView);

	        _get(Object.getPrototypeOf(MapView.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(MapView, [{
	        key: 'renderView',
	        value: function renderView(options) {
	            var dependencies = this.options.dependencies || [this.dataSet];
	            var opt = _extends({}, this.options, options);
	            return _react2['default'].createElement(MapLayout, _extends({ view: this, dependencies: dependencies }, opt));
	        }
	    }, {
	        key: 'bbox',
	        get: function get() {
	            return this.options.bbox;
	        }
	    }, {
	        key: 'center',
	        get: function get() {
	            return this.options.center || [0, 0];
	        }
	    }, {
	        key: 'dataSet',
	        get: function get() {
	            return this.options.dataSet;
	        }
	    }, {
	        key: 'events',
	        get: function get() {
	            return this.options.events || {};
	        }
	    }, {
	        key: 'zoom',
	        get: function get() {
	            return this.options.zoom || 0;
	        }
	    }]);

	    return MapView;
	})(_mosaicUi.View);

	exports['default'] = MapView;

	var MapLayout = (function (_DataSetLayout) {
	    _inherits(MapLayout, _DataSetLayout);

	    function MapLayout() {
	        _classCallCheck(this, MapLayout);

	        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	            params[_key] = arguments[_key];
	        }

	        _get(Object.getPrototypeOf(MapLayout.prototype), 'constructor', this).apply(this, params);
	        var timeout = 50;
	        this._onZoomEnd = debounce(this._onZoomEnd, timeout);
	    }

	    _createClass(MapLayout, [{
	        key: 'render',
	        value: function render() {
	            var className = this.props.className;
	            var style = this.props.style;
	            var id = this.props.id;
	            var key = this.props.key || id;
	            return _react2['default'].createElement('div', { className: className, style: style, id: id, key: key });
	        }

	        // -------------------------------------------------------------------

	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.map = this._newMap();
	            var view = this.props.view;
	            var events = view.events;
	            for (var key in events) {
	                var handler = events[key];
	                this.map.on(key, handler);
	            }
	            this.map.on('zoomend', this._onZoomEnd, this);
	            this._updateMapView();

	            var info = this.props.view.viewportInfo;
	            this.setViewportBox(info);
	            this._updateZoomStyles();
	            this._updateMapLayers();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this._removeMapLayers();
	            var view = this.props.view;
	            var events = view.events;
	            for (var key in events) {
	                var handler = events[key];
	                this.map.off(key, handler);
	            }
	            this.map.off('zoomend', this._onZoomEnd, this);
	            this.map.remove();
	            delete this.map;
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(props) {
	            if (this.map) {
	                this.setViewportBox(props.viewportInfo);
	                this.map.invalidateSize();
	            }
	            // this._updateMapLayers();
	        }

	        // -------------------------------------------------------------------

	    }, {
	        key: '_newMap',
	        value: function _newMap() {
	            var options = _leaflet2['default'].Util.extend({}, {
	                zoomControl: false,
	                attributionControl: false,
	                maxZoom: this.props.maxZoom || 22,
	                minZoom: this.props.minZoom || 0
	            });
	            var container = _react2['default'].findDOMNode(this);
	            var map = new _leaflet2['default'].Map(container, options);

	            // Set the initial view of this map
	            if (this.props.zoomControl !== false) {
	                var zoomControlOptions = this.props.zoomControl || {};
	                var zoomControl = _leaflet2['default'].control.zoom(options);
	                map.addControl(zoomControl);
	            }

	            if (this.props.attribution !== false) {
	                var attributionControlOptions = this.props.attribution || {};
	                var attributionControl = _leaflet2['default'].control.attribution(attributionControlOptions);
	                map.addControl(attributionControl);
	            }
	            return map;
	        }

	        /**
	         * This method is called when the user changes the zoom level.
	         */
	    }, {
	        key: '_onZoomEnd',
	        value: function _onZoomEnd() {
	            this._updateZoomStyles();
	        }
	    }, {
	        key: '_updateZoomStyles',
	        value: function _updateZoomStyles() {
	            var node = _react2['default'].findDOMNode(this);
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
	        }
	    }, {
	        key: '_updateMapView',
	        value: function _updateMapView() {
	            var bbox = this.props.view.bbox;
	            if (bbox) {
	                this._fitToBounds(bbox);
	            } else {
	                this._updateCenterAndZoom();
	            }
	        }
	    }, {
	        key: '_removeMapLayers',
	        value: function _removeMapLayers() {
	            if (this._leafletLayer) {
	                this.map.removeLayer(this._leafletLayer);
	                delete this._leafletLayer;
	            }
	        }
	    }, {
	        key: '_updateMapLayers',
	        value: function _updateMapLayers() {
	            this._removeMapLayers();
	            var view = this.props.view;
	            var dataSet = view.dataSet;
	            var options = {
	                mapView: view,
	                mapLayout: this,
	                map: this.map,
	                dataSet: dataSet,
	                selectedItems: view.options.selectedItems
	            };
	            var adapter = dataSet.getAdapter(_LeafletAdapter2['default'], options);
	            adapter.options.mapView = view;
	            adapter.options.mapLayout = this;
	            adapter.options.map = this;
	            adapter.options.dataSet = dataSet;
	            adapter.options.selectedItems = view.options.selectedItems;
	            this._leafletLayer = adapter.newLeafletLayer();
	            if (this._leafletLayer) {
	                this.map.addLayer(this._leafletLayer);
	            }
	        }
	    }, {
	        key: '_fitToBounds',
	        value: function _fitToBounds(bbox) {
	            var that = this;
	            return new _promise2['default'](function (resolve, reject) {
	                try {
	                    var handler = function handler(err, result) {
	                        if (err) {
	                            reject(err);
	                        } else {
	                            resolve(result);
	                        }
	                    };
	                    if (!bbox) {
	                        // console.log('[ERROR][MapView] Bounding box is not
	                        // defined', new Error().stack);
	                        return handler();
	                    }
	                    if (isEmptyBox(bbox, 4)) {
	                        var center = _leaflet2['default'].latLng(bbox[1], bbox[0]);
	                        that.map.panTo(center, handler);
	                    } else {
	                        var bounds = _leaflet2['default'].latLngBounds( //
	                        _leaflet2['default'].latLng(bbox[1], bbox[0]), //
	                        _leaflet2['default'].latLng(bbox[3], bbox[2]) //
	                        );
	                        that.map.panInsideBounds(bounds, handler);
	                    }
	                } catch (err) {
	                    reject(err);
	                }
	            });
	        }
	    }, {
	        key: '_updateCenterAndZoom',
	        value: function _updateCenterAndZoom() {
	            var view = this.props.view;
	            var center = view.center;
	            if (Array.isArray(center)) {
	                center = _leaflet2['default'].latLng(center[1], center[0]);
	            } else {
	                center = _leaflet2['default'].latlng(center);
	            }
	            var zoom = view.zoom;
	            var map = this.map;
	            if (this._zoom === undefined || this._center === undefined || this._center + '' !== center + '' || this._zoom != zoom) {
	                var latlng = this._center + '' === center + '' ? //
	                map.getCenter() : center;
	                var z = this._zoom === zoom ? map.getZoom() : zoom;
	                map.setView(latlng, z);
	            }
	            this._center = center;
	            this._zoom = zoom;
	        }

	        /** Sets a new viewport bounding box for this map. */
	    }, {
	        key: 'setViewportBox',
	        value: function setViewportBox(info) {
	            if (info) {
	                var options = {
	                    position: 'absolute',
	                    left: info.topLeft[1] + 'px',
	                    top: info.topLeft[0] + 'px',
	                    height: Math.abs(info.bottomRight[0] - info.topLeft[0]) + 'px',
	                    width: Math.abs(info.bottomRight[1] - info.topLeft[1]) + 'px'
	                };
	                var center = this.map.getCenter();
	                this.map.setActiveArea(options);
	                this.map.setView(center);
	            }
	        }
	    }]);

	    return MapLayout;
	})(_mosaicUi.DataSetLayout);

	function debounce(method, timeout) {
	    var timerId = undefined;
	    return function () {
	        var that = this;
	        var args = [];
	        for (var i = 0; i < arguments.length; i++) {
	            args.push(arguments[i]);
	        }
	        clearTimeout(timerId);
	        timerId = setTimeout(function () {
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
	    if (!box) return true;
	    var first = round(box[0], precision);
	    var second = round(box[1], precision);
	    var third = round(box[2], precision);
	    var fourth = round(box[3], precision);
	    return first === third && second === fourth;
	    function round(val, precision) {
	        precision = precision || 6;
	        return (+val).toFixed(precision);
	    }
	}
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	(function (previousMethods) {
	    if (typeof previousMethods === 'undefined') {
	        // Defining previously that object allows you to use that plugin even if you have overridden L.map
	        previousMethods = {
	            getCenter: L.Map.prototype.getCenter,
	            setView: L.Map.prototype.setView,
	            setZoomAround: L.Map.prototype.setZoomAround,
	            getBoundsZoom: L.Map.prototype.getBoundsZoom,
	            scaleUpdate: L.Control.Scale.prototype._update
	        };
	    }

	    L.Map.include({
	        getBounds: function getBounds() {
	            if (this._viewport) {
	                return this.getViewportLatLngBounds();
	            } else {
	                var bounds = this.getPixelBounds(),
	                    sw = this.unproject(bounds.getBottomLeft()),
	                    ne = this.unproject(bounds.getTopRight());

	                return new L.LatLngBounds(sw, ne);
	            }
	        },

	        getViewport: function getViewport() {
	            return this._viewport;
	        },

	        getViewportBounds: function getViewportBounds() {
	            var vp = this._viewport,
	                topleft = L.point(vp.offsetLeft, vp.offsetTop),
	                vpsize = L.point(vp.clientWidth, vp.clientHeight);

	            if (vpsize.x === 0 || vpsize.y === 0) {
	                //Our own viewport has no good size - so we fallback to the container size:
	                vp = this.getContainer();
	                if (vp) {
	                    topleft = L.point(0, 0);
	                    vpsize = L.point(vp.clientWidth, vp.clientHeight);
	                }
	            }

	            return L.bounds(topleft, topleft.add(vpsize));
	        },

	        getViewportLatLngBounds: function getViewportLatLngBounds() {
	            var bounds = this.getViewportBounds();
	            return L.latLngBounds(this.containerPointToLatLng(bounds.min), this.containerPointToLatLng(bounds.max));
	        },

	        getOffset: function getOffset() {
	            var mCenter = this.getSize().divideBy(2),
	                vCenter = this.getViewportBounds().getCenter();

	            return mCenter.subtract(vCenter);
	        },

	        getCenter: function getCenter() {
	            var center = previousMethods.getCenter.call(this);

	            if (this.getViewport()) {
	                var zoom = this.getZoom(),
	                    point = this.project(center, zoom);
	                point = point.subtract(this.getOffset());

	                center = this.unproject(point, zoom);
	            }

	            return center;
	        },

	        setView: function setView(center, zoom, options) {
	            center = L.latLng(center);
	            zoom = zoom || this.getZoom();

	            if (this.getViewport()) {
	                var point = this.project(center, this._limitZoom(zoom));
	                point = point.add(this.getOffset());
	                center = this.unproject(point, this._limitZoom(zoom));
	            }

	            return previousMethods.setView.call(this, center, zoom, options);
	        },

	        setZoomAround: function setZoomAround(latlng, zoom, options) {
	            var vp = this.getViewport();

	            if (vp) {
	                var scale = this.getZoomScale(zoom),
	                    viewHalf = this.getViewportBounds().getCenter(),
	                    containerPoint = latlng instanceof L.Point ? latlng : this.latLngToContainerPoint(latlng),
	                    centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
	                    newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));

	                return this.setView(newCenter, zoom, { zoom: options });
	            } else {
	                return previousMethods.setZoomAround.call(this, latlng, zoom, options);
	            }
	        },

	        getBoundsZoom: function getBoundsZoom(bounds, inside, padding) {
	            // (LatLngBounds[, Boolean, Point]) -> Number
	            bounds = L.latLngBounds(bounds);

	            var zoom = this.getMinZoom() - (inside ? 1 : 0),
	                maxZoom = this.getMaxZoom(),
	                vp = this.getViewport(),
	                size = vp ? L.point(vp.clientWidth, vp.clientHeight) : this.getSize(),
	                nw = bounds.getNorthWest(),
	                se = bounds.getSouthEast(),
	                zoomNotFound = true,
	                boundsSize;

	            padding = L.point(padding || [0, 0]);

	            do {
	                zoom++;
	                boundsSize = this.project(se, zoom).subtract(this.project(nw, zoom)).add(padding);
	                zoomNotFound = !inside ? size.contains(boundsSize) : boundsSize.x < size.x || boundsSize.y < size.y;
	            } while (zoomNotFound && zoom <= maxZoom);

	            if (zoomNotFound && inside) {
	                return null;
	            }

	            return inside ? zoom : zoom - 1;
	        }
	    });

	    L.Control.Scale.include({
	        _update: function _update() {
	            if (!this._map._viewport) {
	                previousMethods.scaleUpdate.call(this);
	            } else {
	                var bounds = this._map.getBounds(),
	                    centerLat = bounds.getCenter().lat,
	                    halfWorldMeters = 6378137 * Math.PI * Math.cos(centerLat * Math.PI / 180),
	                    dist = halfWorldMeters * (bounds.getNorthEast().lng - bounds.getSouthWest().lng) / 180,
	                    size = this._map.getSize(),
	                    options = this.options,
	                    maxMeters = 0;

	                var size = new L.Point(this._map._viewport.clientWidth, this._map._viewport.clientHeight);

	                if (size.x > 0) {
	                    maxMeters = dist * (options.maxWidth / size.x);
	                }

	                this._updateScales(options, maxMeters);
	            }
	        }
	    });

	    L.Map.include({
	        setActiveArea: function setActiveArea(css) {
	            if (!this._viewport) {
	                //Make viewport if not already made
	                var container = this.getContainer();
	                this._viewport = L.DomUtil.create('div', '');
	                container.insertBefore(this._viewport, container.firstChild);
	            }
	            console.log(this._viewport);
	            if (typeof css === 'string') {
	                this._viewport.className = css;
	            } else {
	                L.extend(this._viewport.style, css);
	            }
	            return this;
	        }
	    });
	})(window.leafletActiveAreaPreviousMethods);

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libDataSetLayout = __webpack_require__(48);

	var _libDataSetLayout2 = _interopRequireDefault(_libDataSetLayout);

	var _libUtils = __webpack_require__(50);

	var _libUtils2 = _interopRequireDefault(_libUtils);

	var _libView = __webpack_require__(51);

	var _libView2 = _interopRequireDefault(_libView);

	var _libViewLayout = __webpack_require__(49);

	var _libViewLayout2 = _interopRequireDefault(_libViewLayout);

	exports['default'] = {
	    DataSetLayout: _libDataSetLayout2['default'],
	    Utils: _libUtils2['default'],
	    View: _libView2['default'],
	    ViewLayout: _libViewLayout2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(46);

	var _react2 = _interopRequireDefault(_react);

	var _ViewLayout2 = __webpack_require__(49);

	var _ViewLayout3 = _interopRequireDefault(_ViewLayout2);

	var _Utils = __webpack_require__(50);

	var _Utils2 = _interopRequireDefault(_Utils);

	var DataSetLayout = (function (_ViewLayout) {
	    _inherits(DataSetLayout, _ViewLayout);

	    function DataSetLayout() {
	        _classCallCheck(this, DataSetLayout);

	        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	            params[_key] = arguments[_key];
	        }

	        _get(Object.getPrototypeOf(DataSetLayout.prototype), 'constructor', this).apply(this, params);
	        this._reload = _Utils2['default'].debounce(this._reload.bind(this), 100);
	        this._onSetUpdates = this._onSetUpdates.bind(this);
	    }

	    _createClass(DataSetLayout, [{
	        key: '_triggerListeners',
	        value: function _triggerListeners(method) {
	            var dependencies = this.props.dependencies || [];
	            dependencies.forEach(function (set) {
	                if (set) {
	                    set[method]('update', this._onSetUpdates);
	                }
	            }, this);
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this._triggerListeners('addListener');
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            _get(Object.getPrototypeOf(DataSetLayout.prototype), 'componentWillUnmount', this).call(this);
	            this._triggerListeners('removeListener');
	        }
	    }, {
	        key: '_onSetUpdates',
	        value: function _onSetUpdates(intent) {
	            intent.then((function () {
	                this._reload();
	            }).bind(this));
	        }
	    }, {
	        key: '_reload',
	        value: function _reload() {
	            this._updateState();
	        }
	    }]);

	    return DataSetLayout;
	})(_ViewLayout3['default']);

	exports['default'] = DataSetLayout;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(46);

	var _react2 = _interopRequireDefault(_react);

	var _Utils = __webpack_require__(50);

	var _Utils2 = _interopRequireDefault(_Utils);

	var ViewLayout = (function (_React$Component) {
	    _inherits(ViewLayout, _React$Component);

	    function ViewLayout() {
	        _classCallCheck(this, ViewLayout);

	        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	            params[_key] = arguments[_key];
	        }

	        _get(Object.getPrototypeOf(ViewLayout.prototype), 'constructor', this).apply(this, params);
	        this.state = this._newState();
	    }

	    _createClass(ViewLayout, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._mounted = true;
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this._mounted = false;
	        }
	    }, {
	        key: '_newState',
	        value: function _newState() {
	            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                args[_key2] = arguments[_key2];
	            }

	            return _Utils2['default'].extend.apply(_Utils2['default'], [{}, this.state].concat(args));
	        }
	    }, {
	        key: '_updateState',
	        value: function _updateState() {
	            if (this._mounted) {
	                this.setState(this._newState.apply(this, arguments));
	            }
	        }
	    }, {
	        key: 'mounted',
	        get: function get() {
	            return this._mounted;
	        }
	    }]);

	    return ViewLayout;
	})(_react2['default'].Component);

	exports['default'] = ViewLayout;
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Utils = (function () {
	    function Utils() {
	        _classCallCheck(this, Utils);
	    }

	    _createClass(Utils, null, [{
	        key: "extend",
	        value: function extend(to) {
	            for (var _len = arguments.length, from = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                from[_key - 1] = arguments[_key];
	            }

	            from.forEach(function (param) {
	                if (!param) return;
	                for (var key in param) {
	                    if (param.hasOwnProperty(key)) {
	                        to[key] = param[key];
	                    }
	                }
	            });
	            return to;
	        }
	    }, {
	        key: "debounce",
	        value: function debounce(method, timeout) {
	            var timerId = undefined;
	            function clear() {
	                if (!timerId) return;
	                clearTimeout(timerId);
	                timerId = undefined;
	            }
	            return function () {
	                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                    args[_key2] = arguments[_key2];
	                }

	                var that = this;
	                clear();
	                timerId = setTimeout(function () {
	                    clear();
	                    method.apply(that, args);
	                }, timeout);
	            };
	        }
	    }]);

	    return Utils;
	})();

	exports["default"] = Utils;
	module.exports = exports["default"];

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var View = (function () {
	    function View(options, data) {
	        _classCallCheck(this, View);

	        this.props = this.options = options;
	        this.object = data;
	    }

	    _createClass(View, [{
	        key: '_newId',
	        value: function _newId() {
	            var id = this._newId.counter = (this._newId.counter || 0) + 1;
	            return 'id-' + id;
	        }
	    }, {
	        key: 'renderView',
	        value: function renderView() {
	            throw new Error('Not implemented.');
	        }
	    }, {
	        key: 'className',
	        get: function get() {
	            return this.props.className;
	        }
	    }, {
	        key: 'style',
	        get: function get() {
	            return this.props.style;
	        }
	    }]);

	    return View;
	})();

	exports['default'] = View;
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var L = __webpack_require__(35);

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
	    initialize: function initialize(options) {
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
	    getMap: function getMap() {
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
	    setViewport: function setViewport(viewport) {
	        this._viewport = L.bounds(viewport);
	    },

	    /**
	     * Returns the current viewport for the underlying map
	     */
	    getViewport: function getViewport() {
	        if (this._viewport) return this._viewport;
	        var map = this.getMap();
	        return L.bounds([0, 0], map.getSize());
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
	    setFocusPosition: function setFocusPosition(pos) {
	        this._focusPos = L.point(pos);
	    },

	    /**
	     * Returns the focus position on the map.
	     */
	    getFocusPosition: function getFocusPosition() {
	        var pos = this._focusPos;
	        if (!pos) {
	            var box = this.getViewport();
	            pos = new L.Point((box.min.x + box.max.x) * 1 / 2, (box.min.y + box.max.y) * 2 / 3, true);
	        }
	        return pos;
	    },

	    /**
	     * Moves the map to the specified geographic position. If a focus position
	     * is specified the requested geographic position is moved in this pixel
	     * position on the map screen area. Otherwise the focus position defined by
	     * the "setFocusPosition" is used.
	     */
	    focusTo: function focusTo(coords, focusPos, callback) {
	        var that = this;
	        if (typeof focusPos === 'function') {
	            callback = focusPos;
	            focusPos = null;
	        }
	        callback = this._checkCallback(callback);
	        var map = this.getMap();
	        focusPos = this._getAbsFocusPosition(focusPos);
	        console.log('MapViewport focusTo', coords, focusPos, this.getFocusPosition());
	        var shift = map.project(coords).subtract(focusPos);
	        map.once('moveend', function (ev) {
	            callback(null, ev);
	        });
	        map.panBy(shift);
	    },

	    /**
	     * This method performs zoom (if necessary) and calls the specified callback
	     * method. It is useful to be sure that the callback is really invoked
	     * (which is not the case with the 'zoomend' Leaflet event).
	     */
	    zoomTo: function zoomTo(zoom, focusPos, callback) {
	        if (typeof focusPos === 'function') {
	            callback = focusPos;
	            focusPos = null;
	        }
	        callback = this._checkCallback(callback);

	        focusPos = this._getAbsFocusPosition(focusPos);
	        var map = this.getMap();
	        var coords = map.unproject(focusPos);
	        var hasChanges = map.getZoom() !== zoom || //
	        coords + '' !== map.getCenter() + '';
	        if (hasChanges) {
	            map.once('zoomend', callback);
	            map.setZoomAround(coords, zoom);
	        } else {
	            callback();
	        }
	    },

	    _getAbsFocusPosition: function _getAbsFocusPosition(focusPos) {
	        var map = this.getMap();
	        var focusPos = focusPos || this.getFocusPosition();
	        focusPos = map._getTopLeftPoint().add(focusPos);
	        return focusPos;
	    },

	    /**
	     * Zooms and moves the map viewport to fit in the specified geographic
	     * bounds.
	     */
	    panInsideBounds: function panInsideBounds(bounds, callback) {
	        var that = this;
	        var map = that.getMap();
	        callback = that._checkCallback(callback);
	        var zoom = map.getBoundsZoom(bounds, false);
	        that.zoomTo(zoom, function () {
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
	    _checkCallback: function _checkCallback(callback) {
	        return callback || function () {};
	    }

	});

	module.exports = MapViewport;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = registerAdapters;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mosaicDataset = __webpack_require__(9);

	var _DataSetLeafletAdapter = __webpack_require__(1);

	var _DataSetLeafletAdapter2 = _interopRequireDefault(_DataSetLeafletAdapter);

	var _LeafletAdapter = __webpack_require__(2);

	var _LeafletAdapter2 = _interopRequireDefault(_LeafletAdapter);

	var _LeafletTilesAdapter = __webpack_require__(42);

	var _LeafletTilesAdapter2 = _interopRequireDefault(_LeafletTilesAdapter);

	var _TilesInfo = __webpack_require__(54);

	var _TilesInfo2 = _interopRequireDefault(_TilesInfo);

	function registerAdapters(adapters) {
	    adapters.registerAdapter(_TilesInfo2['default'], _LeafletAdapter2['default'], _LeafletTilesAdapter2['default']);
	    adapters.registerAdapter(_mosaicDataset.Data, _LeafletAdapter2['default'], _LeafletAdapter2['default']);
	    adapters.registerAdapter(_mosaicDataset.DataSet, _LeafletAdapter2['default'], _DataSetLeafletAdapter2['default']);
	}

	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _mosaicDataset = __webpack_require__(9);

	var TilesInfo = (function (_Data) {
	    _inherits(TilesInfo, _Data);

	    function TilesInfo(options) {
	        var _get2;

	        _classCallCheck(this, TilesInfo);

	        for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            params[_key - 1] = arguments[_key];
	        }

	        (_get2 = _get(Object.getPrototypeOf(TilesInfo.prototype), 'constructor', this)).call.apply(_get2, [this, options].concat(params));
	        options = options || {};
	    }

	    _createClass(TilesInfo, [{
	        key: 'tilesUrl',
	        get: function get() {
	            return this.get('properties.tilesUrl');
	        },
	        set: function set(url) {
	            this.set('properties.tilesUrl', url);
	        }
	    }]);

	    return TilesInfo;
	})(_mosaicDataset.Data);

	exports['default'] = TilesInfo;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;