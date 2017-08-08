const html = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
    entry: './src/index.jsx',
    output: {
        filename: 'pacote.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: { rules: [
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            },
            include: __dirname + '/src'
        }
    ] },
    plugins: [new html({ template: './src/index.html' })]
};

if (process.env.NODE_ENV == 'production') {
    config.plugins.push(new UglifyJSPlugin());
} else {
    config.devtool = 'cheap-module-eval-source-map';
}

module.exports = config;
