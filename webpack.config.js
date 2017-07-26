const appConfig = require('./build/webpack.app.config.js'),
    swConfig = require('./build/webpack.sw.config.js');

module.exports = [
    appConfig,
    swConfig
];