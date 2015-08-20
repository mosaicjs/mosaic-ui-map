import { DataSet } from 'mosaic-dataset';
import { GeoJsonAdapter } from 'mosaic-dataset-geo';
import L from 'leaflet';
import LeafletPopupAdapter from './LeafletPopupAdapter';

export default class LeafletAdapter {
    
    constructor(options, item) {
        this.options = options || {};
        this.item = item || this.options.item;
    }

    _openPopup(layer){
        const popupAdapter = this.item.getAdapter(LeafletPopupAdapter);
        const options = {
            autoClose : false,
            closeOnClick : false,
//            keepInView : true,
            closeButton : false
        };
        if (!layer._popup){
            layer._popup = new L.Popup(options, layer);
        }
        let latlng;
        if (layer.getCenter) {
            latlng = layer.getCenter();
        } else if (layer.getLatLng) {
            latlng = layer.getLatLng();
        } else {
            latlng = this._getMarkerCoordinates();
        }
        layer._popup.options.offset = layer._popupAnchor(layer);
        layer._popup.setLatLng(latlng);
        layer._popup.update();
        const popupContent = popupAdapter.renderPopupContent();
        layer._popup.setContent(popupContent);
        layer._map.addLayer(layer._popup);
    }
    _closePopup(layer){
        if (layer._popup){
            layer._map.removeLayer(layer._popup);
        }
    }
    
    selectLayer(layer){
        this._openPopup(layer);
    }
    deselectLayer(layer){
        this._closePopup(layer);
    }
    
    /** Returns a Laflet L.LatLng object with coordinates of the marker position for this resource. */
    _getMarkerCoordinates(){
        const data = this.item.data;
        if (data.type !== 'Feature')
            return;
        if (!data.geometry || !data.geometry.type)
            return;
        const adapter = this.item.getAdapter(GeoJsonAdapter);
        const center = adapter.center;
        return L.latLng([center[1], center[0]]);
    }
    
    /**
     * Returns a marker corresponding to the underlying resource.
     */
    newMarker(){
        const latlng = this._getMarkerCoordinates();
        return L.circleMarker(latlng, {
            color: 'red',
            opacity : 0.5,
            weight : 0,
        });
    }

    /**
     * Returns a leaflet layer corresponding to the underlying item.
     */
    newLeafletLayer(){
        const that = this;
        const data = that.item.data;
        const result = L.GeoJSON.geometryToLayer(
            data,
            {
                coordsToLatLng : L.GeoJSON.coordsToLatLng,
                pointToLayer : function(json){
                    return that.newMarker();
                }
            }
        );
        return result;
    }
    
    deleteLeafletLayer(layer){
        this._closePopup(layer);
    }
}