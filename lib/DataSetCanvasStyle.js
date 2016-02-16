import L from 'leaflet';
import 'leaflet-canvasdatagrid';

export default class DataSetCanvasStyle extends L.DataLayer.DataLayerStyle {

    getMarkerStyle(resource, params) {
        const zoom = params.tilePoint.z;
        const markers = this._markers = this._markers || {};
        let marker = markers[zoom];
        if (!marker) {
            const size = this.getMarkerSize(zoom);
            const r = Math.min(size.x / 4, size.y / 4);
            let lineWidth = Math.min(size.x, size.y) / 10;
            lineWidth = Math.min(2, lineWidth);
            const canvas = document.createElement('canvas');
            canvas.width = size.x;
            canvas.height = size.y;
            const context = canvas.getContext('2d');
            context.beginPath();
            context.fillStyle = 'yellow'; // FIXME:
            context.lineWidth = lineWidth;
            context.strokeStyle = 'black'; // FIXME:
            L.DataLayer.ImageUtils.drawMarker(context, lineWidth, lineWidth, canvas.width  - 2 * lineWidth, canvas.height - 2 * lineWidth, r);
            context.fill();
            context.stroke();
            marker = canvas;
            markers[zoom] = marker;
        }
        return {
            image : marker,
            anchor : [ marker.width / 2, marker.height ]
        };
    }

    getLineStyle(resource, params) {
        params = params || {};
        return {
            lineColor : this.options.lineColor || params.lineColor || 'red',
            lineOpacity : 0.9,
            lineWidth : 3
        };
    }

    getPolygonStyle(resource, params) {
        return {
            fillOpacity : 0.5,
            fillColor : 'blue',
            lineOpacity : 0.9,
            lineColor : 'red',
            lineWidth : 3
        };
    }

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
        var minSize = 128;
        return [minSize, minSize, minSize, minSize];
        
        var markerSize = this.getMarkerSize(zoom);
        var deltaX = Math.max(markerSize.x * 4, minSize);
        var deltaY = Math.max(markerSize.y * 4, minSize);
        var retsult = [ deltaX, deltaY, deltaX, deltaY ];
        return retsult;
    }

}
