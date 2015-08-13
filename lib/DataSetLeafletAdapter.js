import LeafletAdapter from './LeafletAdapter';
import DataSetLeafletLayer from './DataSetLeafletLayer';

export default class DataSetLeafletAdapter extends LeafletAdapter {
    
    get dataSet() { return this.item; }

    newMarker(){ return null; }

    /**
     * Returns a leaflet layer corresponding to the underlying item.
     */
    newLeafletLayer(){
        return new DataSetLeafletLayer({
            dataSet : this.dataSet
        });
    }

}

