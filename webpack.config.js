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
            exclude : /node_modules/,
            loader : 'babel-loader'
        } ]
    },
    externals : [ 'react', 'promise' ]
};
