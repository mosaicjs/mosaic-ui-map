import L from 'leaflet';
import LeafletAdapter from './LeafletAdapter';

export default class LeafletTilesAdapter extends LeafletAdapter {
    constructor(...params){
        super(...params);
    }
    
    newLeafletLayer(){
        const item = this.item;
        const tilesUrl = item.get('properties.tilesUrl');
        const attribution = item.get('properties.attribution');
        const minZoom = item.get('properties.minZoom');
        const maxZoom = item.get('properties.maxZoom');
        let tilesLayer = L.tileLayer(tilesUrl, {
            attribution : attribution,
            minZoom : minZoom,
            maxZoom : maxZoom,
        });        
        return tilesLayer; 
    }
    
}