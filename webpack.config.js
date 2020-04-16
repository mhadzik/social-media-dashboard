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
            test: /.(scss)$/i,
            use: [{
                loader: 'style-loader', // inject CSS to page
            }, {
                loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
                loader: 'postcss-loader', // Run postcss actions
                options: {
                    plugins: function () { // postcss plugins, can be exported to postcss.config.js
                        return [
                            require('autoprefixer')
                        ];
                    }
                }
            }, {
                loader: 'sass-loader' // compiles Sass to CSS
            }],
        }, ]

    },
};