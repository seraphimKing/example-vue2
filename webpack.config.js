var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var webpack = require('webpack')
module.exports = {
	entry:
	 {
       app: './src/main.js',
       vendor: ['vue','vue-router','vue-resource']
    },
	output: {
		path: './dist',
		filename: 'app.js',
		publicPath: ''
	},
	module: {
		loaders: [
		  	{ test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000&name=images/[name].[ext]' },
		  	{ test: /\.(woff|svg|ttf|eot)$/, loader: 'url?limit=10000&name=iconfont/[name].[ext]' },			
		  	{ test: /\.html$/,loader: 'html-loader' },
			{ test: /\.css$/,loader: ExtractTextPlugin.extract("style-loader!css-loader!postcss-loader") }
		]
	},
	plugins: [
        new ExtractTextPlugin("app.css"),
        new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    }),
	    new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor-vue-vuerouter.js'),
	    // https://github.com/ampedandwired/html-webpack-plugin
	    new HtmlWebpackPlugin({
	      filename: 'index.html',
	      template: 'index.html',
	      inject: true
	    }),
	    // optimize duplicate code 通过 cssnano进行优化，排除重复的css
	    new OptimizeCssAssetsPlugin({
	    	cssProcessor: require('cssnano'),
	    	cssProcessorOptions: { discardComments: { removeAll: true } },
	    	canPrint: true
	    })
  ],
  postcss: function () {
  	return [require('autoprefixer'), require('precss')()] // autoprefixer 自动加入前缀 通过precss支持scss写法，除了function
  }
}			