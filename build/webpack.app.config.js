const webpackBaseConfig = require('./webpack.base.config.js'),
    webpack = require('webpack'),
    path = require('path'),
    HtmlPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_DIR = '../public/',
    SRC_DIR = '../src/',
    APP_ROOT = path.join(SRC_DIR, 'js');

// sass
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = Object.assign({}, webpackBaseConfig, {
    devtool: 'inline-source-map',

    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './js/libs/page.js',
        './js/index.js'
    ],

    output: {
        path: path.join(__dirname, DIST_DIR),
        filename: 'js/app.min.js'
    },

    target: 'web',

    devServer: {
        host: 'localhost',
        port: 8080,
        historyApiFallback: true,
        hot: true
    },

    resolve: {
        enforceExtension: false,
        extensions: ['.js'],
        alias: {
            '_appRoot_': APP_ROOT
        }
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                use: 'babel-loader',
                exclude: [/node_modules/]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: {
                    loader: 'sass-loader'
                }
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

        new HtmlPlugin({
            template: path.join(SRC_DIR, 'remote-home.html'),
            filename: 'remote-home.html',
            minify: {
                html5: true,
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true
            }
        }),
        // extractSass
    ]
});