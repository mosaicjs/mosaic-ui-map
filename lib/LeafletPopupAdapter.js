export default class LeafletPopupAdapter {
    
    constructor(options, item) {
        this.options = options || {};
        this.item = item || this.options.item;
    }

    renderPopupContent(){
        return this.item.get('properties.description');
    }
}