import ReactDOM from 'react-dom';
import React from 'react';
import { FeatureGroup } from 'react-leaflet';
import L from 'leaflet';

class GroupLayer extends L.FeatureGroup {
    constructor(options){
        super(options);
        this._layersList = [];
    }
    onAdd(map){
        super.onAdd(map);
        this._map.on('zoomend', this._onZoomEnd, this);
        this.updateLayersVisibility();
    }
    onRemove(map){
        this._map.off('zoomend', this._onZoomEnd, this);
        super.onRemove(map);
    }
    
    _onZoomEnd(ev){
        this.updateLayersVisibility();
    }
    
    addLayer(layer) {
        if (!layer) return ;
        super.addLayer(layer);
        this._layersList.push(layer);
    }
    
    removeLayer(layer) {
        for (var i = this._layersList.length - 1; i >= 0; i--) {
            if (this._layersList[i] === layer) {
                this._layersList.splice(i, 1);
                break;
            }
        }
        super.removeLayer(layer);
    }
    
    updateLayersVisibility(){
        if (!this._map)
            return ;
        const zoom = this._map.getZoom();
        const list = [];
        this._layersList.forEach(function(layer){
            if (!layer) return ;
            const options = layer.options || {};
            var zoomRange = options.zoom || [0, 22];
            if (zoom >= zoomRange[0] && zoom <= zoomRange[1]) {
                super.addLayer(layer);
            } else {
                super.removeLayer(layer);
            }
        }, this);
    }
    
}

export default class RangeZoomLayer extends FeatureGroup {

    constructor(...params){
        super(...params);
    }

    componentWillMount() {
        this.leafletElement = new GroupLayer();
    }
    
    componentDidMount(...params){
        super.componentDidMount(...params);
        this.leafletElement.updateLayersVisibility();
    }

    componentDidUpdate(...params){
        super.componentDidUpdate(...params);
        this.leafletElement.updateLayersVisibility();
    }

} 