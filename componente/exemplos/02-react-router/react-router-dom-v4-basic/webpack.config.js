// const webpack = require('webpack');
const html = require('html-webpack-plugin');

const config = {
    entry: './src/index.jsx',
    output: { filename: 'pacote.min.js' },
    resolve: { extensions: ['.js', '.jsx'] },
    module: { rules: [
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: ['stage-3', 'es2015', 'react']
            },
            include: __dirname + '/src'
        }
    ] },
    plugins: [
        new html({
            template: './src/index.html',
            inject: false
        })
    ]
};

module.exports = config;
