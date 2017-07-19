const path = require('path'),
    HtmlPlugin = require('html-webpack-plugin'),
    CleanPlugin = require('clean-webpack-plugin'),
    CopyPlugin = require('copy-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    WorkboxPlugin = require('workbox-webpack-plugin');

const DIST_DIR = './public/',
    SRC_DIR = './src/',
    IRONHIDE_ROOT = path.join(SRC_DIR, 'js', 'ironhide');

// common config
const config = {
    context: path.join(__dirname, SRC_DIR),

    module: {},

    plugins: [
        new CleanPlugin(['public'], {
            root: __dirname,
            exclude: [],
            verbose: true,
            dry: false
        }),

        new CopyPlugin([{
            from: './css/*'
        }, {
            from: './img/*'
        }]),

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

const ironhideConfig = Object.assign({}, config, {
    entry: [
        // './js/libs/director.js',
        './js/index.js'
    ],

    output: {
        path: path.join(__dirname, DIST_DIR),
        filename: 'js/ironhide.js'
    },

    resolve: {
        enforceExtension: false,
        extensions: ['.js'],
        alias: {
            '_appRoot_': IRONHIDE_ROOT
        }
    },

    plugins: [
        new HtmlPlugin({
            template: 'index.html',
            filename: 'index.html',
            minify: {
                html5: true,
                collapseWhitespace: false,
                removeComments: true,
                minifyCSS: false,
                minifyJS: false
            }
        }),

        new ExtractTextPlugin('css/styles.css')
    ]
});

const appConfig2 = Object.assign({}, config, {
    entry: [
        './js/index2.js'
    ],

    output: {
        path: path.join(__dirname, DIST_DIR),
        filename: 'js/app2.js'
    },

    plugins: [
        new HtmlPlugin({
            template: 'app2.html',
            filename: 'app2.html',
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
    entry: './service-worker-base.js',

    output: {
        path: path.join(__dirname, DIST_DIR),
        filename: 'sw.js'
    }
});

// return array of configs
module.exports = [
    ironhideConfig,
    appConfig2,
    swConfig
];