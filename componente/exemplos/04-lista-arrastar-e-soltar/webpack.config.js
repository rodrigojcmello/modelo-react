const html = require('html-webpack-plugin');

const config = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.jsx',
    output: {
        filename: 'pacote.js',
        path: __dirname + '/cordova/www'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: __dirname + '/src',
                options: {
                    presets: [
                        'es2015', 'react'
                    ],
                    plugins: ['transform-object-rest-spread']
                }
            }, {
                test: /\.sss$/,
                loader: [
                    'style-loader', {
                        loader: 'postcss-loader',
                        options: {
                            parser: 'sugarss',
                            plugins: loader => [
                                require('precss')(),
                                require('autoprefixer')(),
                                require('postcss-calc')(),
                                require('cssnano')()
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new html({template: './src/index.html'})]
};

module.exports = config;
