const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'dist/client/app.js'),

    output: {
        filename: 'static/scripts/bundle.js',
        path: path.join(__dirname, 'public'),
        library: 'lib'
    },

    mode: 'development',

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};