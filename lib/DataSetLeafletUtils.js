import L from 'leaflet';
import { DataSet } from 'mosaic-dataset';
import { GeoJsonAdapter } from 'mosaic-dataset-geo';

export default {
    fitToBoundsDeferred : function(options){
        const that = this;
        setTimeout(function(){
            that.fitToBounds(options);
        }, options.timeout || 150);
    },
    fitToBounds : function(options){
        function getBounds(bbox){
            if (!bbox)
                return ;
            return L.latLngBounds([bbox[1], bbox[0]], [bbox[3], bbox[2]]);
        }
        const maxBounds = getBounds(options.bbox);
        const adapter = options.dataSet.getAdapter(GeoJsonAdapter);
        let bbox = getBounds(adapter.boundingBox);
        if (!bbox) {
            const center = adapter.centerPoint;
            if (center){
                const latlng = L.latLng(center[1], center[0]);
                options.map.panTo(latlng);
            }
        } else {
            if (maxBounds){
                bbox = maxBounds.intersect(bbox);
            }
            options.map.fitBounds(bbox);
        }
    }
}