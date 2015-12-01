var webpack = require('webpack')

module.exports = {
  entry: "./src/main.js",
  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "index.js"
  },
  watch:true,
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.html$/, loader: "html" }
    ]
  }
}