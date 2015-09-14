import L from 'leaflet';
import { DataSet } from 'mosaic-dataset';
import LeafletAdapter from './LeafletAdapter';
import DataSetLeafletUtils from './DataSetLeafletUtils';

export default class DataSetLeafletLayer extends L.FeatureGroup {
    constructor(options) {
        super(options);
        L.setOptions(this, options);
        this._constructorOptions = options;
        this.dataSet = options.dataSet;
        this.selectedItems = options.selectedItems;
        this._layersIndex = {};
        this._onDataSetUpdate = this._onDataSetUpdate.bind(this);
        this._onSelectionUpdate = this._onSelectionUpdate.bind(this);
    }
    onAdd(...params){
        super.onAdd(...params);
        this.dataSet.addListener('update', this._onDataSetUpdate);
        if (this.selectedItems) {
            this.selectedItems.addListener('update', this._onSelectionUpdate);
        }
        this._redrawLayers({
            added : this.dataSet.items,
            removed: [],
            updated : []
        });
    }
    onRemove(...params){
        this.dataSet.removeListener('update', this._onDataSetUpdate);
        if (this.selectedItems) {
            this.selectedItems.removeListener('update', this._onSelectionUpdate);
        }
        super.onRemove(...params);
    }
    _onDataSetUpdate(intent){
        DataSet.diff(this.dataSet, intent).then(this._redrawLayers.bind(this));
    }
    _onSelectionUpdate(intent){
        DataSet.diff(this.selectedItems, intent).then(this._updateSelection.bind(this));
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
