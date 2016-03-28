import ReactDOM from 'react-dom';
import React from 'react';
import { FeatureGroup } from 'react-leaflet';
import L from 'leaflet';

class GroupLayer extends L.FeatureGroup {
    constructor(options){
        super(options);
    }
    onAdd(map){
        super.onAdd(map);
        this._map.on('zoomend', this._onZoomEnd, this);
    }
    onRemove(map){
        this._map.off('zoomend', this._onZoomEnd, this);
        super.onRemove(map);
    }
    
    _onZoomEnd(ev){
        this._updateLayersVisibility();
    }
    
    _updateLayersVisibility(){
        if (!this._layers)
            return ;
        const zoom = this._map.getZoom();
        const list = [];
        this._layers.forEach(function(layer){
            var zoomRange = layer.options.zoom || [0, 22];
            if (zoom >= zoomRange[0] && zoom <= zoomRange[1]) {
                this.addLayer(layer);
            } else {
                this.removeLayer(layer);
            }
        }, this);
        
    }
    
    indexLayers(){
        this._layers = this.getLayers();
        this._updateLayersVisibility();
    }
    
}


export default class DataLayer extends FeatureGroup {

    constructor(...params){
        super(...params);
    }

    _getComponents(){
        const index = {};
        React.Children.forEach(this.props.children, function(child){
            if (!child)
                return;
            const key = child.key;
            console.log('>>', key, child.props.zoom, child);
            if (key) {
                index[key] = child;
            }
        });
        return index;
    }    
     
    componentWillMount() {
        this.leafletElement = new GroupLayer();
    }
    
    componentDidMount(){
        super.componentDidMount();
        this.leafletElement.indexLayers();
    }


}
DataLayer.propTypes = {
//    style: React.PropTypes.instanceOf(DataLayerStyle).isRequired
};
