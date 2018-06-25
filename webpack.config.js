
// html打包插件
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle:"./index.js"
    },
    output: {
        path: __dirname+"/dist",
        filename: "[name].js"
    },
    module: {
        rules: [
            {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']},
            {test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192&name=images/[name].[ext]'},
            {test: /\.html$/, loader:"html-loader?attrs=img:src"}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"webpackDemo",
            chunks:['bundle'],
            filename:'index.html',
            template:'html/testModule.html',
            inject:"body"
        })
    ],
    externals:{
        jquery:"window.jQuery"
    },
    mode:"development"
};