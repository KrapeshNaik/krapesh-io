const path = require('path'),
    HtmlPlugin = require('html-webpack-plugin'),
    CleanPlugin = require('clean-webpack-plugin'),
    CopyPlugin = require('copy-webpack-plugin');

const DIST_DIR = '../public/',
    SRC_DIR = '../src/';

module.exports = {
    context: path.join(__dirname, SRC_DIR),

    entry: [],

    output: {
        path: path.join(__dirname, DIST_DIR),
        filename: 'js/app.min.js'
    },

    module: {},

    plugins: [
        new CleanPlugin(['public'], {
            root: path.join(__dirname, '../'),
            exclude: [],
            verbose: true,
            dry: false
        }),

        new CopyPlugin([{
            from: path.join(SRC_DIR, 'img', '*'),
            to: path.join(DIST_DIR)
        }]),

        new HtmlPlugin({
            template: path.join(SRC_DIR, 'index.html'),
            filename: 'index.html',
            minify: {
                html5: true,
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true
            }
        })
    ]
};