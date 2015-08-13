import { Data } from 'mosaic-dataset';

export default class TilesInfo extends Data {
    constructor(options, ...params){
        super(options, ...params);
        options = options || {};
    }
    get tilesUrl(){ return this.get('properties.tilesUrl'); }
    set tilesUrl(url) { this.set('properties.tilesUrl', url); }
}