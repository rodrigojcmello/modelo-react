const webpack = require('webpack');
const html = require('html-webpack-plugin');

const config = {
    entry: './index.jsx',
    output: { filename: 'pacote.min.js' },
    resolve: { extensions: ['.js', '.jsx'] },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?name=assets/[ext]/[name].[ext]']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: 'file-loader?name=assets/img/[name].[ext]'
            },
            {
                test: /\.(eot|woff2?|ttf)$/,
                use: 'file-loader?name=assets/fonts/[ext]/[name].[ext]'
            },
            {
                test: /\.sss$/,
                use: [
                    'style-loader',
                    {
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
    plugins: []
};

if (process.env.PLATAFORMA == 'cordova') {
    config.output.path = `${__dirname}/cordova/www`;
} else {
    config.plugins.push(new html({ template: 'index.html' }));
}

if (process.env.NODE_ENV == 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    );
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
} else {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    );
}

module.exports = config;
