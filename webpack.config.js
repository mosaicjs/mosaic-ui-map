module.exports = {
    entry : __dirname + '/index.js',
    output : {
        path : __dirname + '/dist',
        filename : 'index.js',
        libraryTarget : 'umd'
    },
    module : {
        loaders : [ {
            test : /\.jsx?$/,
            // exclude : /node_modules/,
            // includes : /node_modules\/mosaic-.*/,
            loader : 'babel-loader',
        } ],
        noParse : [ /leaflet/ ]
    },
    externals : [ 'react', 'promise', 'leaflet', 'leaflet-active-area' ]
};
