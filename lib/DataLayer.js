import ReactDOM from 'react-dom';
import React from 'react';
import { MapLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-canvasdatagrid';
import DataLayerStyle from './DataLayerStyle';
import { debounce } from 'lodash/function';

export default class DataLayer extends MapLayer {

    constructor(...params){
        super(...params);
        this.state = {};
        const timeout = 30;
        this._updateData = debounce(this._updateData, timeout, this);
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
        this._provider.setData(this.props.data || []);
        this.leafletElement.redraw();
    }

    componentWillMount() {
        super.componentWillMount();
        const sort = this.props.sort || this.props.sortData || function(data){
            data = data.sort(function(first, second){
                var a = first.id;
                var b = second.id;
                return a < b ? -1 : a > b ? 1 : 0;
            });
            return data;
        };
        const getGeometry = this.props.getGeometry || this.props.geometry || function(r){
            return r.geometry;
        }
        this._provider = new L.DataLayer.DataProvider({
            getGeometry,
            sort
        });
        const that = this;
        this.leafletElement = new L.DataLayer({
            ...that.props,
            provider : that._provider
        });
    }

}
DataLayer.propTypes = {
//    style: React.PropTypes.instanceOf(DataLayerStyle).isRequired
};
