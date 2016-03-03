import React from 'react';
import { MapLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-canvasdatagrid';

export default class FocusLayer extends MapLayer {

    constructor(...params){
        super(...params);
        this.state = {};
    }

    render(){
        return this.renderChildrenWithProps({
            popupContainer: this.leafletElement,
            dataLayer : this.leafletElement
        });
    }

    componentDidMount() {
        super.componentDidMount();
        this._updateData();
    }

    componentDidUpdate(prevProps){
        this._updateData();
    }

    _updateData() {
        this.leafletElement.options.geometry = this.props.geometry;
        this.leafletElement.setData(this.props.data || []);
    }

    componentWillMount() {
        super.componentWillMount();
        this.leafletElement = new L.DataLayer.FocusLayer({
            ...this.props
        });
    }

}
