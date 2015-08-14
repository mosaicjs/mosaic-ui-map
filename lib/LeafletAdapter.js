import { DataSet } from 'mosaic-dataset';
import { GeoJsonAdapter } from 'mosaic-dataset-geo';
import L from 'leaflet';

export default class LeafletAdapter {
    
    constructor(options, item) {
        this.options = options || {};
        this.item = item || this.options.item;
    }

    selectLayer(layer){
        console.log('[SELECT]', this.item.id, layer);
    }
    deselectLayer(layer){
        console.log('[DESELECT]', this.item.id, layer);
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
}