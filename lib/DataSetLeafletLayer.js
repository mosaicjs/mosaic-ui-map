import L from 'leaflet';
import { DataSet } from 'mosaic-dataset';
import LeafletAdapter from './LeafletAdapter';
import DataSetLeafletUtils from './DataSetLeafletUtils';
import AbstractDataSetLeaflet from './AbstractDataSetLeaflet';

export default class DataSetLeafletLayer extends AbstractDataSetLeaflet(L.FeatureGroup) {
    constructor(options) {
        super(options);
        this._constructorOptions = options;
        this._layersIndex = {};
    }
    _updateSelection(diff){
        const that = this;
        diff.added.forEach(function(item){
            const layer = that._layersIndex[item.id];
            if (!layer)
                return ;
            let adapter = that._getLeafletAdapter(item);
            function remove(){
                that.selectedItems.removeItem(item);
            }
            adapter.selectLayer(layer).then(remove, remove);
        });
        
        diff.removed.forEach(function(item){
            const layer = that._layersIndex[item.id];
            if (!layer)
                return ;
            let adapter = that._getLeafletAdapter(item);
            adapter.deselectLayer(layer);
        });        
    }
    _redrawLayers(diff){
        const that = this;
        diff.added.forEach(function(item){
            let adapter = that._getLeafletAdapter(item);
            if (!adapter)
                return ;
            let layer = adapter.newLeafletLayer();
            if (!layer)
                return ;
            that._layersIndex[item.id] = layer;
            that.addLayer(layer);
        });
        diff.removed.forEach(function(item){
            const layer = that._layersIndex[item.id];
            if (!layer)
                return ;
            delete that._layersIndex[item.id];
            let adapter = that._getLeafletAdapter(item);
            adapter.deleteLeafletLayer(layer);
            that.removeLayer(layer);
        });
        if (!this.options.noFocus) {
            DataSetLeafletUtils.fitToBoundsDeferred({
                dataSet : this.dataSet,
                map : this._map,
                bbox : this.options.bbox
            });
        }
    }

    _getLeafletAdapter(item){
        return item.getAdapter(LeafletAdapter, this._constructorOptions);
    }
}