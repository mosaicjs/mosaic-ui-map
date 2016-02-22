import ReactDOM from 'react-dom';
import React from 'react';
import { MapLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-active-area';

class EmptyLayer extends L.Class {
    constructor(options){
        super(options);
    }
    onAdd(map){
        this._map = map;
    }
    onRemove(map){
        this._map = map;
    }
}

export default class ActiveArea extends MapLayer {

    constructor(...params){
        super(...params);
        this.state = {};
    }

    render(){
        return this.renderChildrenWithProps();
    }

    componentWillMount() {
        super.componentWillMount();
        this.leafletElement = new EmptyLayer();
        this._updateActiveArea();
    }

    componentWillUpdate(){
        this._updateActiveArea();
    }

    render(){
        const { map } = this.props;
        map.setActiveArea(this.state);
        return <div style={{display: 'none'}}></div>;
    }

    _updateActiveArea() {
        const { map } = this.props;
        const newState = {
            ...this.state,
            position: 'absolute',
            top: '50px',
            left: '50px',
            right: '50px',
            height: '200px',
            ...this.props
        };

        const keys = Object.keys(newState);
        let update = false;
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (this.state[key] !== newState[key]) {
                update = true;
                break;
            }
        }
        if (update){
            this.setState(newState);
        }
    }

}
