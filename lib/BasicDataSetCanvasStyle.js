import DataSetCanvasStyle from './DataSetCanvasStyle';

export default class BasicDataSetCanvasStyle extends DataSetCanvasStyle {
    constructor(options){
        super(options);
    }
    
    getMarkerStyle(resource, params) {
        const type = resource.getTypeKey();
        // get color for this type
        if (!type)
            return;
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
}