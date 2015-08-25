import LeafletAdapter from './LeafletAdapter';
import DataSetLeafletLayer from './DataSetLeafletLayer';
import DataSetClusteredLeafletLayer from './DataSetClusteredLeafletLayer';

export default class DataSetLeafletAdapter extends LeafletAdapter {
    
    get dataSet() { return this.item; }

    newMarker(){ return null; }

    /**
     * Returns a leaflet layer corresponding to the underlying item.
     */
    newLeafletLayer(){
        const dataSet = this.dataSet;
        let LayerType;
        if (dataSet.options.cluster) {
            LayerType = DataSetClusteredLeafletLayer;
        } else {
            LayerType = DataSetLeafletLayer;
        }
        let options = {
            dataSet,
            map : this.options.map,
            selectedItems : this.options.selectedItems
        };
		return new LayerType(options);
    }

}

