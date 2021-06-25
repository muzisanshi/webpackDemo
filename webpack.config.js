
// html打包插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        bundle:"./index.js"
    },
    output: {
        path: __dirname+"/dist",
        filename: "[name].js"
    },
	devServer:{
		contentBase:"./dist",
		hot:true
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
        }),
		// new CleanWebpackPlugin(),
		// new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
    ],
    externals:{
        jquery:"window.jQuery"
    },
    mode:"development"
};