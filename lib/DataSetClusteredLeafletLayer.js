import L from 'leaflet';
import 'leaflet.markercluster';
import { DataSet } from 'mosaic-dataset';
import { GeoJsonAdapter } from 'mosaic-dataset-geo';
import LeafletAdapter from './LeafletAdapter';
import LeafletClusterAdapter from './LeafletClusterAdapter';
import DataSetLeafletUtils from './DataSetLeafletUtils';

export default class DataSetClusteredLeafletLayer extends L.MarkerClusterGroup {
    constructor(options) {
        let that;
        options = options || {};
        options.iconCreateFunction = function(cluster) {
            const icon = that._newClusterIcon(cluster);
            return icon;
        }
        options.removeOutsideVisibleBounds = true;
        super(options);
        L.setOptions(this, options);
        that = this;
        this._constructorOptions = options || {};
        this.dataSet = options.dataSet;
        this.selectedItems = options.selectedItems;
        this._layersIndex = {};
        this._onDataSetUpdate = this._onDataSetUpdate.bind(this);
        this._onSelectionUpdate = this._onSelectionUpdate.bind(this);
        this.options.polygonOptions = that._getClusterPolygonOptions();
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
                        that._map.panTo(latlng);
                        function remove(){
                            that.selectedItems.removeItem(item);
                        }
                        adapter.selectLayer(layer).then(remove, remove);                        
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
            that.removeLayer(layer);
            adapter.deleteLeafletLayer(layer);
        });
        that.addLayers(toAdd);
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
    
    _getClusterAdapter() {
        if (!this._clusterAdapter){
            this._clusterAdapter =
               this.dataSet.getAdapter(LeafletClusterAdapter, this._constructorOptions); 
        }
        return this._clusterAdapter;
    }

    _newClusterIcon(cluster){
        const clusterAdapter = this._getClusterAdapter();
        return clusterAdapter.newClusterIcon(cluster, this);
    }
    
    _getClusterPolygonOptions(){
        const clusterAdapter = this._getClusterAdapter();
        return clusterAdapter.getClusterPolygonOptions(this);
    }
}
