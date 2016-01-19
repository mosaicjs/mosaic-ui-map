import L from 'leaflet';

import ReactDOM from 'react-dom';
import React from 'react';
import { View, DataSetLayout } from 'mosaic-ui';
import LeafletAdapter from './LeafletAdapter';

export default class MapLayout extends DataSetLayout {

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
    
    constructor(...params){
        super(...params);
        let timeout = 50;
        this._onZoomEnd = MapLayout.debounce(this._onZoomEnd, timeout);
    }

    render(){
        const dataSet = this.dataSet;
        this.versionId = dataSet.version;
        this.dataSetId = dataSet.id;
        const className = this.props.className;
        const style = this.props.style;
        const id = this.props.id || className;
        const key = this.props.key || id;
        return (
           <div className={className} style={style} id={id} key={key}></div>
        );
    }

    // -------------------------------------------------------------------

    componentDidMount() {
        this.map = this._newMap();
        const events = this.props.events;
        for (let key in events) {
            let handler = events[key];
            this.map.on(key, handler);
        }
        this.map.on('zoomend', this._onZoomEnd, this);
        this.map.on('movestart', this._onMoveStart, this);
        this.map.on('moveend', this._onMoveEnd, this);

        this._updateMapView();
        this._updateZoomStyles();
        this._updateMapLayers();
        
        let info = this.props.viewportInfo;
        this.setViewportBox(info);
    }

    componentWillUnmount() {
        this._removeMapLayers();
        const events = this.props.events;
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
    
    shouldComponentUpdate(){
        const dataSet = this.dataSet;
        const result = (this.dataSetId !== dataSet.id || this.versionId != dataSet.version);
        return result;
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
        const bbox = this.props.bbox;
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
        const dataSet = this.dataSet;
        const options = {
            mapLayout : this,
            layout : this,
            map : this.map,
            dataSet,
            selectedItems : this.props.selectedItems
        };
        let adapter = dataSet.getAdapter(LeafletAdapter, options);
        adapter.options.mapLayout = this;
        adapter.options.map = this;
        adapter.options.dataSet = dataSet;
        adapter.options.selectedItems = this.props.selectedItems;
        this._leafletLayer = adapter.newLeafletLayer();
        if (this._leafletLayer) {
            this.map.addLayer(this._leafletLayer);
        }
    }

    get dataSet() {
        return this.props.dataSet;
    }
    
    _fitToBounds(bbox) {
        const that = this;
        if (!bbox) {
            // console.log('[ERROR][MapView] Bounding box is not
            // defined', new Error().stack);
            return ;
        }
        if (isEmptyBox(bbox, 4)) {
            let center = L.latLng(bbox[1], bbox[0]);
            that.map.panTo(center);
        } else {
            let bounds = L.latLngBounds(//
                L.latLng(bbox[1], bbox[0]), //
                L.latLng(bbox[3], bbox[2])//
            );
            that.map.panInsideBounds(bounds);
        }
    }

    _updateCenterAndZoom() {
        let center = this.props.center;
        if (Array.isArray(center)) {
            center = L.latLng(center[1], center[0]);
        } else {
            center = L.latLng(center);
        }
        let zoom = this.props.zoom;
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
//            this.map.setActiveArea(options);
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