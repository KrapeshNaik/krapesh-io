const path = require('path');

module.exports = {
    entry: './src/javascripts/index.js',

    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'app.js'
    }
};