import { DataSet } from 'mosaic-dataset';
import L from 'leaflet';

export default class LeafletClusterAdapter {
    
    constructor(options, dataSet) {
        this.options = options || {};
        this.dataSet = dataSet;
    }
    
    newClusterIcon(cluster){
        let childCount = cluster.getChildCount();

        let c = ' marker-cluster-';
        if (childCount < 10) {
            c += 'small';
        } else if (childCount < 100) {
            c += 'medium';
        } else {
            c += 'large';
        }

        return new L.DivIcon({
            html: '<div><span>' + childCount + '</span></div>',
            className: 'marker-cluster' + c,
            iconSize: new L.Point(40, 40)
        });
    }

    
    getClusterPolygonOptions(){
        return {
            stroke : true,
            color : 'white',
            weight : 1,
            opacity : 1,
            fill : true,
            fillColor : 'white',
            fillOpacity : 0.3,
        };
    }
}