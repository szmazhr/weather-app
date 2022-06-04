const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const supportedLocales = ['en-US'];


module.exports = {
  entry: path.join(__dirname, "src", "index"),
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ],},
  plugins: [
    new HtmlWebpackPlugin({
      template: "/src/index.html",
      title: "Weather App",
    }),
    new webpack.ContextReplacementPlugin(
      /date\-fns[\/\\]/,
      new RegExp(`[/\\\\\](${supportedLocales.join('|')})[/\\\\\]index\.js$`))
  ]
};
