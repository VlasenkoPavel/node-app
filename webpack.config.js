const path = require('path');

module.exports = {
    entry: {
        // vendors: path.join(__dirname, 'dist/client', 'vendors'),
        app: path.join(__dirname, 'dist/client', 'app')
    },

    output: {
        path: path.join(__dirname, 'public', 'scripts'),
        filename: 'bundle.js',
        library: 'lib'
    },

    mode: 'development',

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            }
        ]
    }
};