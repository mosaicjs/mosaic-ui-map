import L from 'leaflet';
import 'leaflet-active-area/src/leaflet.activearea';

import ReactDOM from 'react-dom';
import React from 'react';
import { View, DataSetLayout } from 'mosaic-ui';
import LeafletAdapter from './LeafletAdapter';
import MapLayout from './MapLayout';

export default class MapView extends View {
    get bbox() { return this.options.bbox; }
    get center() { return this.options.center || [ 0, 0 ] };
    get dataSet() { return this.options.dataSet; }
    get events(){ return this.options.events || {}; }
    get zoom() { return this.options.zoom || 0; }

    renderView(options){
        const dependencies = this.options.dependencies || [ this.dataSet ];
        const opt = {...this.options, ...options};
        return (
            <MapLayout dependencies={dependencies} {...opt} />
        );
    }
    
    static debounce(method, timeout) {
        let timerId;
        return function() {
            let that = this;
            let args = [];
            for (let i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            clearTimeout(timerId);
            timerId = setTimeout(function() {
                method.apply(that, args);
            }, timeout);
        };
    }
}


