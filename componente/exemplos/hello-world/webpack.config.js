// const webpack = require('webpack');
const html = require('html-webpack-plugin');

const config = {
    entry: './index.jsx',
    output: { filename: 'pacote.min.js' },
    resolve: { extensions: ['.js', '.jsx'] },
    module: { loaders: [{ test: /\.jsx?$/, use: 'babel-loader' }]},
    plugins: [ new html({ template: 'index.html' }) ]
};

module.exports = config;
