const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

// common config
const config = {
    module: {}
};

const appConfig = Object.assign({}, config, {
    context: path.join(__dirname, '../src/'),

    entry: [
        './js/index.js'
    ],

    output: {
        path: path.join(__dirname, '../public/'),
        filename: 'js/app.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
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
    context: path.join(__dirname, '../'),

    entry: './src/firebase-messaging-sw.js',

    output: {
        path: path.join(__dirname, '../public'),
        filename: 'firebase-messaging-sw.js'
    }
});

// return array of configs
module.exports = [
    appConfig,
    swConfig
];