
// html打包插件
var HtmlWebpackPlugin = require('html-webpack-plugin');

// scss

module.exports = {
    entry: {
        app:"./index.js"
    },
    output: {
        path: __dirname+"/dist",
        filename: "bundle.js"
    },
    module: {
        rules: [
          { test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            chunks:['app'],
            filename:'index.html',
            template:'html/testModule.html'
        })
    ],
    mode:"development"
};