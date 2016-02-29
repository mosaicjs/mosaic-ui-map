import ReactDOM from 'react-dom';
import React from 'react';
import { MapLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-canvasdatagrid';

export default class DataLayerTracker extends MapLayer {

    constructor(...params){
        super(...params);
        this.state = {};
    }

    render(){
        return this.renderChildrenWithProps({
            dataLayer : this.props.dataLayer,
            popupContainer: this.leafletElement,
        });
    }

    componentWillMount() {
        super.componentWillMount();
        this.leafletElement = new L.DataLayer.DataLayerTracker(this.props);
    }

}
