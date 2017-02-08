var path        = require('path');
var webpack     = require('webpack');
var TextPlugin  = require('extract-text-webpack-plugin');

var root = path.resolve('', __dirname + '/src');
var entryFile = path.resolve(root, 'index.js');
var output = path.resolve('', __dirname + '/dist');

module.exports = {
    entry: {
        vendor: [ 'jquery' ],
        app: entryFile
    },
    output: {
        path: output,
        filename: 'main.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel'},
            { test: /\.css$/, loader: TextPlugin.extract("style-loader", "css-loader?minimize=true$modules=true&localIdentName=[name]__[local]___[hash:base64:5]")},
            { test: /\.png$/, loader: 'url'},
            { test: /\.jpg$/, loader: 'file?name=/images/[name].[ext]'}
        ]
    },
    plugins:[
        new TextPlugin('main.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        port: 8088,
        hot: true
    }
};
