import { Data, DataSet } from 'mosaic-dataset';
import DataSetLeafletAdapter from './DataSetLeafletAdapter';
import LeafletAdapter from './LeafletAdapter';
import LeafletTilesAdapter from './LeafletTilesAdapter';
import TilesInfo from './TilesInfo';

export default function registerAdapters(adapters){
    adapters.registerAdapter(TilesInfo, LeafletAdapter, LeafletTilesAdapter);
    adapters.registerAdapter(Data, LeafletAdapter, LeafletAdapter);
    adapters.registerAdapter(DataSet, LeafletAdapter, DataSetLeafletAdapter);
}