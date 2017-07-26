const path = require('path'),
    HtmlPlugin = require('html-webpack-plugin'),
    CleanPlugin = require('clean-webpack-plugin'),
    CopyPlugin = require('copy-webpack-plugin'),
    WorkboxPlugin = require('workbox-webpack-plugin');

const DIST_DIR = '../public/',
    SRC_DIR = '../src/';

module.exports = {
    context: path.join(__dirname, SRC_DIR),

    module: {},

    plugins: [
        new CleanPlugin(['public'], {
            root: path.join(__dirname, '../'),
            exclude: [],
            verbose: true,
            dry: false
        }),

        new CopyPlugin([{
            from: path.join(SRC_DIR, 'css', '*'),
            to: path.join(DIST_DIR)
        }, {
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
        }),

        // new WorkboxPlugin({
        //     // globDirectory: DIST_DIR,
        //     // globPatterns: ['**/*.{js}'],
        //     // swDest: path.join(DIST_DIR, 'service-worker.js')
        //     globPatterns: ['**\/*.{html,js,css}'],
        //     swSrc: './src/service-worker-base.js',
        //     swDest: './src/service-worker-built.js',
        // })
    ]
};