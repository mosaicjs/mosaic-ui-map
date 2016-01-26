import L from 'leaflet';
import 'leaflet-canvasdatagrid';

export default class DataSetCanvasStyle extends L.DataLayer.GeometryRendererStyle {
    
    getMarkerSize(zoom) {
        var baseZoom = this.options.baseZoom || 10;
        var baseWidth = this.options.baseWidth || 32;
        var baseHeight = this.options.baseHeight || 32;
        var minWidth = this.options.minWidth || 8;
        var minHeight = this.options.minHeight || 8;
        var maxWidth = this.options.maxWidth || 48;
        var maxHeight = this.options.maxHeight || 48;
        var k = Math.pow(2, zoom - baseZoom);
        return {
            x : Math.min(maxWidth, Math.max(minWidth, Math.round(baseWidth * k))),
            y : Math.min(maxHeight, Math.max(minHeight, Math.round(baseHeight * k)))
        };
    }
    
    getTilePad(zoom){
        var markerSize = this.getMarkerSize(zoom);
        var deltaX = (markerSize.x || 10);
        var deltaY = (markerSize.y || 10);
        var retsult = [ deltaX, deltaY, deltaX, deltaY ];
        return retsult;
    }

}