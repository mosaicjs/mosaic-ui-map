import L from 'leaflet';
import LeafletAdapter from './LeafletAdapter';
import { DataSet } from 'mosaic-dataset';

export default class DataSetLeafletLayer extends L.FeatureGroup {
    constructor(options) {
        super(options);
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
        diff.removed.forEach(function(item){
            const layer = that._layersIndex[item.id];
            if (!layer)
                return ;
            let adapter = that._getLeafletAdapter(item);
            adapter.deselectLayer(layer);
        });
        diff.added.forEach(function(item){
            const layer = that._layersIndex[item.id];
            if (!layer)
                return ;
            let adapter = that._getLeafletAdapter(item);
            adapter.selectLayer(layer);
        });
    }
    _redrawLayers(diff){
        const that = this;
        diff.removed.forEach(function(item){
            const layer = that._layersIndex[item.id];
            if (!layer)
                return ;
            delete that._layersIndex[item.id];
            that.removeLayer(layer);
            let adapter = that._getLeafletAdapter(item);
            adapter.deleteLeafletLayer(layer);
        });
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
    }

    _getLeafletAdapter(item){
        return item.getAdapter(LeafletAdapter, {
            selectedItems : this.selectedItems
        });
    }
}
