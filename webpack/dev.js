/* 开发环境下的 webpack 配置 */
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
  entry: {
    app: './src/main.js',
    vendor: ['vue', 'vue-router', 'vue-resource']
  },
  output: {
    path: './dist',
    filename: 'app.js',
    publicPath: ''
  },
  module: {
    loaders: [{
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'url?limit=10000&name=images/[name].[ext]'
    }, {
      test: /\.(woff|svg|ttf|eot)$/,
      loader: 'url?limit=10000&name=iconfont/[name].[ext]'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64]')
    }]
  },
  plugins: [
    new ExtractTextPlugin("app.css"),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor',
      'vendor_vue_vuerouter.js'),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true
    })
  ]
}
