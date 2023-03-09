/**
 * @type import('webpack').Configuration
*/
const path = require("path");
const ElectronReload = require("webpack-electron-reload")({
    path: path.join(__dirname,"./dist/main.js"),
});


module.exports = {
    entry: {
        main: "./main/src/main.ts",
        preload: "./main/src/js/preload/preload.ts"
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "[name].js",
    },
    module: {
        rules: [{
            test: /\.ts[x]?$/, use: "ts-loader"
        }]
    },
    target: "electron-main",
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            "fsevents": path.resolve(__dirname,"main/src/js/utils/null.js")
        }
    },
    plugins: [
        ElectronReload()
    ],
    devServer: {

    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000
    },
}