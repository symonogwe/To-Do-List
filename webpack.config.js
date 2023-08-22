const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        compress: true,
        port: 3000,
        open: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "TO DO LIST APP",
            filename: "index.html",
            template: "./src/temp.html"
        })
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        assetModuleFilename: "[name] [ext]"
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    mode: "development"
}