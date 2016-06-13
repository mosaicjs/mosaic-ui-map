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
        delete this._map;
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

    setActiveArea(css){
        const { map } = this.props;
        map.setActiveArea(css);
    }
    
    render(){
        return <div style={{display: 'none'}}></div>;
    }

    _updateActiveArea() {
        const { map } = this.props;
        const margin = '10px';
        const newState = {
            ...this.state,
            position: 'absolute',
            top: margin,
            left: margin,
            right: margin,
            bottom: margin,
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
            var that = this;
            function setView(){
                const center = map.getCenter();
                map.setView(center);
                that.setState(newState);
            }
            map.setActiveArea(newState);
            if (!map._loaded) {
                map.once('load', setView);
            } else {
                setView();
            }
        }
    }

}
