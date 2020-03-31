const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'AR React Fun Fun Fun',
  template: 'templates/index.html'
});

const cleanWebpackPlugin = new CleanWebpackPlugin({
  verbose: true
})


module.exports = {
    mode: "none",
    entry: "./src/index",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: '[name].js',
      chunkFilename: '[name].js',
      publicPath: "/",
      library: "ArReactFun",
      libraryTarget: "umd"
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      clientLogLevel: 'debug'
    },
    plugins: [cleanWebpackPlugin, htmlWebpackPlugin]
}