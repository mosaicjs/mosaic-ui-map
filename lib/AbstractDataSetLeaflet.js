import L from 'leaflet';
import { DataSet } from 'mosaic-dataset';

export default function(Parent){
    return class AbstractDataSetLeaflet extends Parent {
        constructor(options) {
            super(options);
            L.setOptions(this, options);
            this._constructorOptions = options;
            this.dataSet = options.dataSet;
            this.selectedItems = options.selectedItems;
            this._onDataSetUpdate = this._onDataSetUpdate.bind(this);
            this._onSelectionUpdate = this._onSelectionUpdate.bind(this);
            this._redrawLayers = this._redrawLayers.bind(this);
            this._updateSelection = this._updateSelection.bind(this);
        }
      
        onAdd(...params){
            super.onAdd(...params);
            this.dataSet.addListener('update', this._onDataSetUpdate);
            if (this.selectedItems) {
                this.selectedItems.addListener('update', this._onSelectionUpdate);
            }
            this._redrawLayers({
                added : this.dataSet.items,
                removed: [],
                updated : []
            });
        }

        onRemove(...params){
            this.dataSet.removeListener('update', this._onDataSetUpdate);
            if (this.selectedItems) {
                this.selectedItems.removeListener('update', this._onSelectionUpdate);
            }
            super.onRemove(...params);
        }
      
        _onDataSetUpdate(intent){
            DataSet.diff(this.dataSet, intent).then(this._redrawLayers);
        }
      
        _onSelectionUpdate(intent){
            DataSet.diff(this.selectedItems, intent).then(this._updateSelection);
        }
          
        _redrawLayers(diff){
            throw new Error('Not implemented');
        }
          
        _updateSelection(diff){
            throw new Error('Not implemented');
        }
    };
}
