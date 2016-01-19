import L from 'leaflet';
import { DataSet } from 'mosaic-dataset';
import 'leaflet-canvasdatagrid';
// import { } from 'mosaic-ui-map;
import AbstractDataSetLeaflet from './AbstractDataSetLeaflet';
// import DataSetCanvasStyle from './DataSetCanvasStyle';
import DataSetCanvasStyle from './BasicDataSetCanvasStyle';

export default class DataSetCanvasLeafletLayer extends AbstractDataSetLeaflet(L.FeatureGroup) {

    constructor(options) {
        super(options);
        this._provider = new L.DataLayer.DataProvider({
            getGeometry : function(r){
                return r.data.geometry;
            }
        });
        this._imageIndex = {};
        this._rebuildDataLayer();
    }
    
    _removeDataLayer(){
        if (this._dataLayer) {
            this.removeLayer(this._dataLayer);
            delete this._dataLayer;
        }
    }
    _rebuildDataLayer() {
        const that = this;
        that._removeDataLayer();
        const style = this.options.style || this.dataSet.getAdapter(DataSetCanvasStyle);
        that._dataLayer = new L.DataLayer({
            provider : that._provider,
            style : style,
            imageIndex : function(image, params) {
                // var properties = options.getProperties(params.data);
                return that._imageIndex;
            },
            tilePad : function(params) {
                return style.getTilePad(params.tilePoint.z);
            }
        });
        that.addLayer(that._dataLayer);
    }
    _redrawLayers(diff){
        const list = [].concat(diff.added).concat(diff.updated);
        this._provider.setData(list);
        this._rebuildDataLayer();
    }
      
    _updateSelection(diff){
        // TODO: cleans up deselect diff.removed markers
        // TODO: re-draw select diff.added markers
    }    
}
