import { DataSet } from 'mosaic-dataset';
import L from 'leaflet';

export default class LeafletClusterAdapter {
    
    constructor(options, dataSet) {
        this.options = options || {};
        this.dataSet = dataSet;
    }
    
    newClusterIcon(cluster){
        var childCount = cluster.getChildCount();

        var c = ' marker-cluster-';
        if (childCount < 10) {
            c += 'small';
        } else if (childCount < 100) {
            c += 'medium';
        } else {
            c += 'large';
        }

        return new L.DivIcon({ html: '<div><span>' + childCount + '</span></div>', className: 'marker-cluster' + c, iconSize: new L.Point(40, 40) });
    }

}