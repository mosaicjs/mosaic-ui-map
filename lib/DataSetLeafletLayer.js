import L from 'leaflet';
import LeafletAdapter from './LeafletAdapter';

export default class DataSetLeafletLayer extends L.FeatureGroup {
    constructor(options) {
        super(options);
        this.dataSet = options.dataSet;
        this.selectedItems = options.selectedItems;
        this._onDataSetUpdate = this._onDataSetUpdate.bind(this);
        this._onSelectionUpdate = this._onSelectionUpdate.bind(this);
    }
    onAdd(...params){
        super.onAdd(...params);
        this.dataSet.addListener('update', this._onDataSetUpdate);
        if (this.selectedItems) {
            this.selectedItems.addListener('update', this._onSelectionUpdate);
        }
        this._redrawLayers();
    }
    onRemove(...params){
        this.dataSet.removeListener('update', this._onDataSetUpdate);
        if (this.selectedItems) {
            this.selectedItems.removeListener('update', this._onSelectionUpdate);
        }
        super.onRemove(...params);
    }
    _onDataSetUpdate(intent){
        const that = this;
        intent.then(function(){
            that._redrawLayers();
        });
    }
    _onSelectionUpdate(intent){
        const that = this;
        that._removeSelection();
        intent.then(function(){
            that._setSelection();
        });
    }
    _redrawLayers(){
        this.clearLayers();
        this._layersIndex = {};
        const dataSet = this.dataSet;
        dataSet.forEach(function(item){
            let adapter = item.getAdapter(LeafletAdapter, {
                selectedItems : this.selectedItems
            });
            if (!adapter)
                return ;
            let layer = adapter.newLeafletLayer();
            if (!layer)
                return ;
            this._layersIndex[item.id] = layer;
            this.addLayer(layer);
        }, this);
    }
    _removeSelection(){
        if (!this.selectedItems)
            return ;
        this.selectedItems.forEach(function(item){
            const layer = this._layersIndex[item.id];
            if (!layer)
                return ;
            console.log('[DESELECT]', item.id, layer);
        }, this);
    }
    _setSelection(){
        if (!this.selectedItems)
            return ;
        this.selectedItems.forEach(function(item){
            const layer = this._layersIndex[item.id];
            if (!layer)
                return ;
            console.log('[SELECT]', item.id, layer);
        }, this);
    }

}
