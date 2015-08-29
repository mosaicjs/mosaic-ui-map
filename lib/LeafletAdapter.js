import { DataSet } from 'mosaic-dataset';
import { GeoJsonAdapter } from 'mosaic-dataset-geo';
import L from 'leaflet';
import LeafletPopupAdapter from './LeafletPopupAdapter';

export default class LeafletAdapter {
    
    constructor(options, item) {
        this.options = options || {};
        this.item = item || this.options.item;
    }

    _getPopupOffset(layer){
        // Calculate the popup offset  
        let anchor;
        if (layer._getPopupAnchor) {
            anchor = layer._getPopupAnchor();
        } else if (layer.options.icon) { 
            anchor = layer.options.icon.options.popupAnchor;
        }
        if (!anchor) {
            anchor = [0, 0];
        }
        let offset = L.Popup.prototype.options.offset;
        offset = L.point(anchor).add(offset);
        return offset;
    }
    
    _openPopup(layer){
        const popupAdapter = this.item.getAdapter(LeafletPopupAdapter);
        if (!layer._popup){
            layer._popup = new L.Popup({
                autoClose : false,
                closeOnClick : true,
//                keepInView : true,
                closeButton : true
            }, layer);
        }
        let latlng;
        if (layer.getCenter) {
            latlng = layer.getCenter();
        } else if (layer.getLatLng) {
            latlng = layer.getLatLng();
        } else {
            latlng = this._getMarkerCoordinates();
        }

        layer._popup.options.offset = this._getPopupOffset(layer);
        
        // 
        layer._popup.setLatLng(latlng);
        layer._popup.update();
        const popupContent = popupAdapter.renderPopupContent({
            latlng
        });
        layer._popup.setContent(popupContent);
        layer._map.addLayer(layer._popup);
    }
    _closePopup(layer){
        if (layer._popup && layer._map){
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
        const options = {};
        for (let key in this.options){
            options[key] = this.options[key];
        }
        const radius = 20;
        const icon = new MarkerIcon({
            radius : radius + 'px',
            iconAnchor: [radius / 2, 0],
            style: {
                border : '2px solid gray',
                backgroundColor : 'white'
            }
        });
        const marker = L.marker(latlng, {
            icon : icon,
            riseOnHover : true
        });
        return marker;
    }
    
    /**
     * Returns a leaflet layer corresponding to the underlying data item.
     */
    newLeafletLayer(){
        const data = this.item.data;
        const options = {};
        const result = L.GeoJSON.geometryToLayer(
            data,
            function(json){
                return this.newMarker();
            }.bind(this), 
            L.GeoJSON.coordsToLatLng,
            options
        );
        let selectedItems = this.options.selectedItems;
        if (result && selectedItems){
            result.on('click', function(ev){
                selectedItems.toggle(this.item);
            }.bind(this));
        }
        return result;
    }
    
    deleteLeafletLayer(layer){
        this.deselectLayer(layer);
    }
}


class MarkerIcon extends L.DivIcon {
    constructor(options){
        super(options);
    }
    createIcon(oldIcon) {
        const icon = super.createIcon(oldIcon);
        const radius = this.options.radius || '25px';
        icon.style.border = '1px solid gray';
        icon.style.background = 'white'; // 'transparent';
        icon.style.width = radius;
        icon.style.height = radius;
        icon.style.WebkitBorderRadius = radius;
        icon.style.MozBorderRadius = radius;
        icon.style.borderRadius = radius;
        if (this.options.style){
            for (let key in this.options.style) {
                icon.style[key] = this.options.style[key];
            }
        }
        
        return icon;
    }
}

LeafletAdapter.MarkerIcon = MarkerIcon;