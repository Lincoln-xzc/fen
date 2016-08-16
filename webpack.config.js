/**
 * Created by Lincoln on 2016/8/13.
 * author: xzc
 * 未经允许不能转载
 */
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app/app.js'),
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
            }
        ]
    }
};