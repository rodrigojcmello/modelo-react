const html = require('html-webpack-plugin');

const config = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.jsx',
    output: {
        filename: 'pacote.js',
        path: __dirname + '/dist'
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
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }
        ]
    },
    plugins: [new html({ template: './src/index.html' })]
};

module.exports = config;
