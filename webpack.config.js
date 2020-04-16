const {
    resolve
} = require('path');


module.exports = {
    entry: './src/scripts/index.js',
    output: {
        path: resolve(__dirname, "dist/"),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /.s[ac]ss$/i,
            use: [
                // Creates style nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'raw-loader',
                // Resolve URL related issues
                // 'resolve-url-loader',
                // Compiles Sass to CSS
                'sass-loader',
            ],
        }, ]

    },
};