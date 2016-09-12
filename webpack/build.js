

var path = require('path');

var webpack = require('webpack');

var dir_src = path.resolve(__dirname, '../src');
var dir_build = path.resolve(__dirname, '../dist');

module.exports = {
    entry: path.resolve(dir_src, 'main.js'),
    output: {
      path: dir_build,
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        { 
          test: /\.js$/, 
          loader: 'babel'
        }
      ]
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      },
      output: {
        comments: false
      },
      sourceMap: false
    })
  ],
};