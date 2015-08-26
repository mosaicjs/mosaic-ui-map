import L from 'leaflet';
import 'leaflet.markercluster';
import LeafletAdapter from './LeafletAdapter';
import LeafletClusterAdapter from './LeafletClusterAdapter';
import { DataSet } from 'mosaic-dataset';
console.log(L.MarkerClusterGroup);

export default class DataSetLeafletLayer extends L.MarkerClusterGroup {
    constructor(options) {
        let that;
        options = options || {};
        options.iconCreateFunction = function(cluster) {
            const icon = that._newClusterIcon(cluster);
            return icon;
        }
        super(options);
        that = this;
        this._constructorOptions = options || {};
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
        if (diff.added.length) {
            const item = diff.added[0];
            const layer = that._layersIndex[item.id];
            const adapter = that._getLeafletAdapter(item);
            if (adapter && layer) {
                that.zoomToShowLayer(layer, function() {
                    setTimeout(function(){
                        var latlng = layer.getLatLng();
                        adapter.selectLayer(layer);
                    }, 50);
                });
            }
        }
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
        const toAdd = [];
        const toRemove = [];
        diff.added.forEach(function(item){
            let adapter = that._getLeafletAdapter(item);
            if (!adapter)
                return ;
            let layer = adapter.newLeafletLayer();
            if (!layer)
                return ;
            that._layersIndex[item.id] = layer;
            toAdd.push(layer);
        });
        diff.removed.forEach(function(item){
            const layer = that._layersIndex[item.id];
            if (!layer)
                return ;
            delete that._layersIndex[item.id];
            let adapter = that._getLeafletAdapter(item);
            adapter.deleteLeafletLayer(layer);
            toRemove.push(layer);
        });        
        that.removeLayers(toRemove);
        that.addLayers(toAdd);
    }

    _getLeafletAdapter(item){
        return item.getAdapter(LeafletAdapter, this._constructorOptions);
    }
    
    _getClusterAdapter() {
        if (!this._clusterAdapter){
            this._clusterAdapter =
               this.dataSet.getAdapter(LeafletClusterAdapter, this._constructorOptions); 
        }
        return this._clusterAdapter;
    }

    _newClusterIcon(cluster){
        const clusterAdapter = this._getClusterAdapter();
        return clusterAdapter.newClusterIcon(cluster);
    }
}