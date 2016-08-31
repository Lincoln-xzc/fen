/**
 * Created by Lincoln on 2016/8/13.
 * author: xzc
 * 未经允许不能转载
 */
var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/app.js')],
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
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
                test: /\.(png|jpg|svg|jpeg|gif|ico)$/i,
                loader: 'url?limit=100000&&name=images/[name].[ext]'
            },
            {
                test: /\.(eot|ttf|woff|woff(2))$/i,
                loader: 'url?limit=100000'
            }
        ]
    }
};