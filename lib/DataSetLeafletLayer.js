import L from 'leaflet';
import LeafletAdapter from './LeafletAdapter';

export default class DataSetLeafletLayer extends L.FeatureGroup {
    constructor(options) {
        super(options);
        this.dataSet = options.dataSet;
        this._onDataSetUpdate = this._onDataSetUpdate.bind(this);
    }
    onAdd(...params){
        super.onAdd(...params);
        this.dataSet.addListener('update', this._onDataSetUpdate);
        this._redrawLayers();
    }
    onRemove(...params){
        this.dataSet.removeListener('update', this._onDataSetUpdate);
        super.onRemove(...params);
    }
    _onDataSetUpdate(intent){
        const that = this;
        intent.then(function(){
            that._redrawLayers();
        });
    }
    _redrawLayers(){
        this.clearLayers();
        const dataSet = this.dataSet;
        dataSet.forEach(function(item){
            let adapter = item.getAdapter(LeafletAdapter);
            if (!adapter)
                return ;
            let layer = adapter.newLeafletLayer();
            if (!layer)
                return ;
            this.addLayer(layer);
        }, this);
    }
}
