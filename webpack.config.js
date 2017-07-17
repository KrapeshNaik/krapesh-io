const path = require('path'),
    HtmlPlugin = require('html-webpack-plugin'),
    CleanPlugin = require('clean-webpack-plugin'),
    CopyPlugin = require('copy-webpack-plugin'),
    WorkboxPlugin = require('workbox-webpack-plugin');

const DIST_DIR = './public/';
const SRC_DIR = './src/';

// common config
const config = {
    context: path.join(__dirname, SRC_DIR),

    module: {},

    plugins: [
        new CleanPlugin([
            'public'
        ], {
            root: __dirname,
            exclude: [],
            verbose: true,
            dry: false
        }),

        new CopyPlugin([{
            from: './precache.txt'
        }]),

        // new workboxPlugin({
        //     // globDirectory: DIST_DIR,
        //     // globPatterns: ['**/*.{js}'],
        //     // swDest: path.join(DIST_DIR, 'service-worker.js')
        //     globPatterns: ['**\/*.{html,js,css}'],
        //     globIgnores: ['admin.html'],
        //     swSrc: './src/firebase-messaging-sw.js',
        //     swDest: './public/service-worker.js',
        // })
    ]
};

const appConfig = Object.assign({}, config, {
    entry: [
        './js/index.js'
    ],

    output: {
        path: path.join(__dirname, DIST_DIR),
        filename: 'js/app.js'
    },

    plugins: [
        new HtmlPlugin({
            template: 'index.html',
            minify: {
                html5: true,
                collapseWhitespace: false,
                removeComments: true,
                minifyCSS: false,
                minifyJS: false
            }
        })
    ]
});

const swConfig = Object.assign({}, config, {
    entry: './service-worker.js',

    output: {
        path: path.join(__dirname, DIST_DIR),
        filename: '[name].js'
    }
});

// return array of configs
module.exports = [
    appConfig,
    swConfig
];