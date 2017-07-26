const webpackBaseConfig = require('./webpack.base.config.js'),
    path = require('path');

const DIST_DIR = '../public/',
    SRC_DIR = '../src/';

module.exports = Object.assign({}, webpackBaseConfig, {
    entry: './service-worker-base.js',

    output: {
        path: path.join(__dirname, DIST_DIR),
        filename: 'js/sw.js'
    }
});