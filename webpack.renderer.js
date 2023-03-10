/**
 * @type import('webpack').Configuration
*/
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");


module.exports = {
    entry: {
        renderer: "./renderer/src/main.tsx",
    },
    output: {
        path: path.resolve(__dirname,"dist/"),
        filename: "[name].js",
    },
    module: {
        rules: [{
                test: /\.css$/, use: ["style-loader", {loader: "css-loader"}]
            },{
                test: /\.ts[x]?$/, use: "ts-loader"
        }]
    },
    target: "web",
    resolve: {
        extensions: [".ts",".js",".tsx",".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./renderer/src/index.html",
            filename: "index.html",
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        }),
    ],
    devServer: {

    },
    watch: true
}