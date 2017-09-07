const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const {getIfUtils, removeEmpty} = require('webpack-config-utils');

module.exports = env => {
    const {ifProd, ifNotProd} = getIfUtils(env);

    return {
        context: resolve('src'),
        entry: './index.jsx',
        output: {
            path: resolve('app'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        devtool: ifProd('source-map', 'eval'),
        resolve: {
            extensions: ['.js', '.jsx', '.json']
        },
        stats: {
            color: true,
            reasons: true,
            chunks: true
        },
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.jsx?$/,
                    loader: 'eslint-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader"
                    })
                },
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192
                            }
                        }
                    ]
                }
            ]
        },
        plugins: removeEmpty([
            new ProgressBarPlugin(),
            new HtmlWebpackPlugin({
                template: __dirname + '/public/index.html',
            }),
            new ExtractTextPlugin(ifProd('styles.[name].[chunkhash].css', 'styles.[name].css')),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: ifProd('"production"', '"development"')
                }
            }),
        ])
    };
};
