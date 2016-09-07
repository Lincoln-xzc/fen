/**
 * Created by Lincoln on 2016/8/13.
 * author: xzc
 * 未经允许不能转载
 */
var path = require('path');
var webpack = require('webpack');

//单独样式
var ExtractTextPlugin  = require('extract-text-webpack-plugin');

//编译后自动打开浏缆器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './app',
        host: 'localhost',
        port: '8080'
    },
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/app.js')],
    output:{
        path: __dirname + '/build',
        filename: './bundle.js',
        publicPath: '/'
    },
    module: {

        loaders: [
            {
                test:/\.(jsx?|js)$/,
                exclude:/node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(mp3|mp4|wav|ico|gif|png|jpg|jpeg|ttf|eot|svg|woff|otf(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file'
            },
            {
                test: /\.(css|scss|less)$/,
                loader:'style!css'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url?limit=8192',

            },
            {
                test: /\.(eot|ttf|woff|woff(2))$/,
                loader: 'file-loader'
            }
        ]
    },
    resolves: {
       extensions: ['', '.js', '.jsx'],
        alias: {}
    },
    devtool: 'source-map',
    'display-error-details': true,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({url: 'http://localhost:8080'}),
        new ExtractTextPlugin('app.css',{
            allChunks: true,
            disable: false
        })
    ]
};