import { Intent } from 'mosaic-intents';
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
        const that = this;
        const intent = new Intent({}, 'popup');
        that._closePopup(layer).then(function(){
            if (intent.handled)
                return ;
            if (!layer._popup){
                layer._popup = new L.Popup({
                    autoClose : true,
                    closeOnClick : true,
                    // keepInView : true,
                    closeButton : true
                }, layer);
            }
            let latlng;
            if (layer.getCenter) {
                latlng = layer.getCenter();
            } else if (layer.getLatLng) {
                latlng = layer.getLatLng();
            } else {
                latlng = that._getMarkerCoordinates();
            }
            
            layer._popup.options.offset = that._getPopupOffset(layer);
            layer._popup.once('close', function(){
                intent.resolve(true);
            });
            // 
            layer._popup.setLatLng(latlng);
            layer._popup.update();
            
            const popupAdapter = that.item.getAdapter(LeafletPopupAdapter);
            const popupContent = popupAdapter.renderPopupContent({
                latlng
            });
            layer._popup.setContent(popupContent);

            let onClose; 
            if (typeof layer.bindPopup) {
                layer.bindPopup(layer._popup);
                layer.openPopup();
                onClose = function(){
                    layer.closePopup();
                }
            } else {
                const map = layer._map;
                onClose = function(){
                    map.removeLayer(layer._popup);
                };
                map.addLayer(layer._popup);
            }
            layer._popupIntent = intent;
            intent.then(function(){
                delete layer._popupIntent; 
            });
            intent.after(onClose, onClose);
        });
        return intent;
    }
    _closePopup(layer){
        let promise;
        if (layer._popupIntent) {
            promise = layer._popupIntent.promise;
            layer._popupIntent.resolve();
        } else {
            promise = Promise.resolve();
        }
        return promise;
    }
    
    selectLayer(layer){
        return this._openPopup(layer);
    }
    deselectLayer(layer){
        return this._closePopup(layer);
    }
    /**
     * Returns a Laflet L.LatLng object with coordinates of the marker position
     * for this resource.
     */
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
// radius : radius + 'px',
// iconAnchor: [radius / 2, 0],
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
        const options = {
            pointToLayer : function(json){
                return this.newMarker();
            }.bind(this), 
            coordsToLatLng : L.GeoJSON.coordsToLatLng
        };
        const result = L.GeoJSON.geometryToLayer(data, options);
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