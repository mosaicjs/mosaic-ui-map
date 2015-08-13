// import InteractionLayer from './lib/Leaflet.InteractionLayer';

import LeafletAdapter from './lib/LeafletAdapter';
import TilesInfo from './lib/TilesInfo';
import LeafletTilesAdapter from './lib/LeafletTilesAdapter';

import DataSetLeafletAdapter from './lib/DataSetLeafletAdapter';
import DataSetLeafletLayer from './lib/DataSetLeafletLayer';
// import Map from './lib/Map';
import MapView from './lib/MapView';
import MapViewport from './lib/MapViewport';
// import UtfGrid from './lib/Leaflet.UtfGrid';
import registerAdapters from './lib/registerAdapters';

export default {
    DataSetLeafletAdapter,
    DataSetLeafletLayer,
// InteractionLayer,
    LeafletAdapter,
    LeafletTilesAdapter,
// Map,
    MapView,
    MapViewport,
    TilesInfo,
// UtfGrid,
    
    registerAdapters
}