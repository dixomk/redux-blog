var baseConfig = require('./webpack.config.js');
var externals = require('webpack-node-externals');

baseConfig.target = 'node';
baseConfig.externals = [externals()];
baseConfig.devServer = {
    port: 8089,
    hot: true
};

module.exports = baseConfig;
