/**
 * @type import('webpack').Configuration
*/
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    target: "node",
    resolve: {
        extensions: [".ts",".js",".tsx",".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./renderer/src/index.html",
            filename: "index.html",
        }),
    ],
}