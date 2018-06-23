
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