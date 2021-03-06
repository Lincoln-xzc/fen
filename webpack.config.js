/**
 * Created by Lincoln on 2016/8/13.
 * author: xzc
 * 未经允许不能转载
 */
var path = require('path');
var webpack = require('webpack');


//编译后自动打开浏览器
//var OpenBrowserPlugin = require('open-browser-webpack-plugin');

//单独样式文件
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: '/.app',
        host: '0,0,0,0',
        port: 8080
        /*proxy: {
            '/api/!*':{
                target: 'http://localhost:3000',
                secure: false
            }
        }*/
    },
    entry: path.resolve(__dirname, 'app/app.js'),
        output:{
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js'
    },
    module: {
        //加载器配置
        loaders: [
            {
                test:/\.(jsx?|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                /*query: {
                    presets: ['es2015', 'react']
                }*/
            },
            {
                test: /\.(eot|ttf|woff|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/i,
                loader: 'file-loader'
            },
            {
                test: /\.(css|scss|less)$/,
                include: path.resolve(__dirname, 'app'),
                loader:'style!css'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url?limit=8192'

            }
        ]
    },
    //其他解决方案配置
    resolve: {
       extensions: ['', '.js', '.jsx'],
       //提高webpack搜索的速度
       alias: {}
    },
    devServer: {
        hot: true,
        inline: true
    },
    /*devtool: 'source-map',
    'display-error-details': true,*!/
    */
    //使用externals可以将react分离，然后用<script>单独将react引入
   // externals: [],
    //插件项
   /* plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({url: 'http://localhost:8090'}),
        new ExtractTextPlugin('app.css', {
            allChunks: true,
            disable: false
        })
    ]*/
};