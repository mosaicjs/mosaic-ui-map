import L from 'leaflet';
import 'leaflet-active-area/src/leaflet.activearea';

import ReactDOM from 'react-dom';
import React from 'react';
import Promise from 'promise';
import { View, DataSetLayout } from 'mosaic-ui';
import LeafletAdapter from './LeafletAdapter';

export default class MapView extends View {
    get bbox() { return this.options.bbox; }
    get center() { return this.options.center || [ 0, 0 ] };
    get dataSet() { return this.options.dataSet; }
    get events(){ return this.options.events || {}; }
    get zoom() { return this.options.zoom || 0; }

    renderView(options){
        const dependencies = this.options.dependencies || [ this.dataSet ];
        const opt = {...this.options, ...options};
        return (
            <MapLayout view={this} dependencies={dependencies} {...opt} />
        );
    }
    
    static debounce(method, timeout) {
        let timerId;
        return function() {
            let that = this;
            let args = [];
            for (let i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            clearTimeout(timerId);
            timerId = setTimeout(function() {
                method.apply(that, args);
            }, timeout);
        };
    }
}

class MapLayout extends DataSetLayout {

    constructor(...params){
        super(...params);
        let timeout = 50;
        this._onZoomEnd = MapView.debounce(this._onZoomEnd, timeout);
    }

    render(){
        const className = this.props.className;
        const style = this.props.style;
        const id = this.props.id;
        const key = this.props.key || id;
        return (
           <div className={className} style={style} id={id} key={key}></div>
        );
    }

    // -------------------------------------------------------------------

    componentDidMount() {
        this.map = this._newMap();
        const view = this.props.view;
        const events = view.events;
        for (let key in events) {
            let handler = events[key];
            this.map.on(key, handler);
        }
        this.map.on('zoomend', this._onZoomEnd, this);
        this.map.on('movestart', this._onMoveStart, this);
        this.map.on('moveend', this._onMoveEnd, this);

        let info = this.props.view.viewportInfo;
        this.setViewportBox(info);
        this._updateMapView();
        this._updateZoomStyles();
        this._updateMapLayers();
    }

    componentWillUnmount() {
        this._removeMapLayers();
        const view = this.props.view;
        const events = view.events;
        for (let key in events) {
            let handler = events[key];
            this.map.off(key, handler);
        }
        this.map.off('zoomend', this._onZoomEnd, this);
        this.map.off('moveend', this._onMoveEnd, this);
        this.map.off('movestart', this._onMoveStart, this);
       this.map.remove();
        delete this.map;
    }

    componentWillUpdate(props) {
        if (this.map) {
            this.setViewportBox(props.viewportInfo);
            this.map.invalidateSize();
        }
		// this._updateMapLayers();
    }
    componentDidUpdate(){
        this._updateMapCenterAndZoom();
    }

    // -------------------------------------------------------------------

    _newMap() {
        let options = L.Util.extend({}, {
            zoomControl : false,
            attributionControl : false,
            maxZoom : this.props.maxZoom || 22,
            minZoom : this.props.minZoom || 0
        });
        let container = ReactDOM.findDOMNode(this);
        let map = new L.Map(container, options);
        
	// Set the initial view of this map
        if (this.props.zoomControl !== false) {
            let zoomControlOptions = this.props.zoomControl || {};
            let zoomControl = L.control.zoom(options);
            map.addControl(zoomControl);
        }

        if (this.props.attribution !== false) {
            let attributionControlOptions = this.props.attribution || {};
            let attributionControl = L.control
                    .attribution(attributionControlOptions);
	    if (attributionControlOptions.html)
  	      attributionControl.addAttribution(attributionControlOptions.html);
            map.addControl(attributionControl);
        }
        return map;
    }

    /**
     * This method is called when the user changes the zoom level.
     */
    _onZoomEnd() {
        this._updateZoomStyles();
    }
    
    _onMoveEnd(){
        this._moving = false;
        if (this.props.onMoveEnd){
            const zoom = this.map.getZoom(); 
            const center = this.map.getCenter();
            this.props.onMoveEnd({
                zoom,
                center
            }, this);
        }
    }
    _onMoveStart(){
        this._moving = true;
    }

    _updateZoomStyles() {
        const node = ReactDOM.findDOMNode(this);
        const zoom = this.map.getZoom();
        const cls = [];
        for (let i = 0; i < zoom; i++) {
            cls.push('prev-zoom-' + i);
        }
        cls.push('zoom-' + zoom);
        let css = node.className;
        css = css.replace(/\s*(prev-)?zoom-\d+\s*/gim, '');
        css += ' ' + cls.join(' ');
        node.className = css;
    }
    
    _updateMapView() {
        const bbox = this.props.view.bbox;
        if (bbox) {
            this._fitToBounds(bbox);
        } else {
            this._updateCenterAndZoom();
        }
    }
    _updateMapCenterAndZoom(){
        if (this._moving)
            return ;
        const center = this.props.center;
        const mapZoom = this.map.getZoom();
        const mapCenter = this.map.getCenter();
        const latlng = center ? L.latLng(center[1], center[0]) : mapCenter;
        const zoom = this.props.zoom || mapZoom;
        if (mapZoom != zoom || latlng != mapCenter) {
            this.map.setView(latlng, zoom);
        }
    }

    _removeMapLayers(){
        if (this._leafletLayer) {
            this.map.removeLayer(this._leafletLayer);
            delete this._leafletLayer;
        }
    }

    _updateMapLayers(){
        this._removeMapLayers();
        const view = this.props.view;
        const dataSet = view.dataSet;
        const options = {
            mapView : view,
            mapLayout : this,
            map : this.map,
            dataSet,
            selectedItems : view.options.selectedItems
        };
        let adapter = dataSet.getAdapter(LeafletAdapter, options);
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

    _fitToBounds(bbox) {
        const that = this;
        return new Promise(function(resolve, reject) {
            try {
                let handler = function(err, result) {
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
                    let center = L.latLng(bbox[1], bbox[0]);
                    that.map.panTo(center, handler);
                } else {
                    let bounds = L.latLngBounds(//
                        L.latLng(bbox[1], bbox[0]), //
                        L.latLng(bbox[3], bbox[2])//
                    );
                    that.map.panInsideBounds(bounds, handler);
                }
            } catch (err) {
                reject(err);
            }
        });
    }

    _updateCenterAndZoom() {
        const view = this.props.view;
        let center = view.center;
        if (Array.isArray(center)) {
            center = L.latLng(center[1], center[0]);
        } else {
            center = L.latlng(center);
        }
        let zoom = view.zoom;
        const map = this.map;
        if (this._zoom === undefined || this._center === undefined
                || this._center + '' !== center + '' || this._zoom != zoom) {
            let latlng = (this._center + '' === center + '') //
            ? map.getCenter() : center;
            let z = (this._zoom === zoom) ? map.getZoom() : zoom;
            map.setView(latlng, z);
        }
        this._center = center;
        this._zoom = zoom;
    }

    /** Sets a new viewport bounding box for this map. */
    setViewportBox(info) {
        if (info) {
            const options = {
                position: 'absolute',
                left: info.topLeft[1] + 'px',
                top: info.topLeft[0] + 'px',
                height: Math.abs(info.bottomRight[0] - info.topLeft[0])  + 'px',
                width: Math.abs(info.bottomRight[1] - info.topLeft[1]) + 'px'
            };
            const center = this.map.getCenter();
            this.map.setActiveArea(options);
            this.map.setView(center);
        }
    }
}


/**
 * Returns <code>true</code> if the specified bounding box is empty.
 *
 * @see http://gis.stackexchange.com/questions/8650/how-to-measure-the-accuracy-of-latitude-and-longitude/8674#8674
 */
function isEmptyBox(box, precision) {
    if (!box)
        return true;
    let first = round(box[0], precision);
    let second = round(box[1], precision);
    let third = round(box[2], precision);
    let fourth = round(box[3], precision);
    return (first === third && second === fourth);
    function round(val, precision) {
        precision = precision || 6;
        return (+val).toFixed(precision);
    }
}
