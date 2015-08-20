import React from 'react';
import Promise from 'promise';
import { View, DataSetLayout } from 'mosaic-ui';
import MapViewport from './MapViewport';
import LeafletAdapter from './LeafletAdapter';

export default class MapView extends View {
    get bbox() { return this.options.bbox; }
    get center() { return this.options.center || [ 0, 0 ] };
    get dataSet() { return this.options.dataSet; }
    get events(){ return this.options.events || {}; }
    get viewportInfo() { return this.options.viewportInfo; }
    get zoom() { return this.options.zoom || 0; }
    
    renderView(){
//        const dependencies = this.options.dependencies || [ this.dataSet ];
        const dependencies = [];
        return (
            <MapLayout view={this} dependencies={dependencies} />
        );
    }
}

class MapLayout extends DataSetLayout {
    
    constructor(...params){
        super(...params);
        let timeout = 50;
        this._onZoomEnd = debounce(this._onZoomEnd, timeout);
    }

    render(){
        const className = this.props.view.options.className;
        return (
           <div className={className} style={this.style}></div>
        );
    }

    // -------------------------------------------------------------------

    componentDidMount() {
        this.map = this._newMap();
        this._viewport = new MapViewport({
            map : this.map
        });
        const view = this.props.view;
        const events = view.events;
        for (let key in events) {
            let handler = events[key];
            this.map.on(key, handler);
        }
        this.map.on('zoomend', this._onZoomEnd, this);
        this._updateMapView();
        this._updateViewport();
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
        this.map.remove();
        delete this._viewport;
        delete this.map;
    }
    
    componentDidUpdate(props) {
        this._updateMapLayers();
    }

    // -------------------------------------------------------------------
    
    _newMap() {
        let options = L.Util.extend({}, {
            zoomControl : false,
            attributionControl : false,
        });
        let container = React.findDOMNode(this);
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
    
    _updateZoomStyles() {
        const node = React.findDOMNode(this);
        const zoom = this.map.getZoom();
        const cls = [];
        for (let i = 0; i < zoom; i++) {
            cls.push('prev-zoom-' + i);
        }
        cls.push('zoom-' + zoom);
        let css = node.className;
        css = css.replace(/\s*zoom-\d+\s*/gim, '');
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
        let adapter = dataSet.getAdapter(LeafletAdapter, {
            selectedItems : view.options.selectedItems
        });
        this._leafletLayer = adapter.newLeafletLayer(this.map);
        
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
                    // console.log('[ERROR][MapView] Bounding box is not defined',
                    // new Error().stack);
                    return handler();
                }
                let viewport = that._viewport;
                if (isEmptyBox(bbox, 4)) {
                    let center = L.latLng(bbox[1], bbox[0]);
                    viewport.focusTo(center, handler);
                } else {
                    let bounds = L.latLngBounds(//
                    L.latLng(bbox[1], bbox[0]), //
                    L.latLng(bbox[3], bbox[2])//
                    );
                    viewport.panInsideBounds(bounds, handler);
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
    _updateViewport() {
        if (!this._viewport)
            return;
        const view = this.props.view;
        let info = view.viewportInfo;
        if (!info)
            return;
        let topLeft = info.topLeft;
        let bottomRight = info.bottomRight;
        if (!topLeft || !bottomRight)
            return;
        let focusPosition = info.focusPosition;
        let bounds = L.bounds(topLeft, bottomRight);
        this._viewport.setViewport(bounds);
        if (focusPosition) {
            this._viewport.setFocusPosition({
                top : focusPosition[1],
                left : focusPosition[0]
            });
        }
    }
}

function debounce(method, timeout) {
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
