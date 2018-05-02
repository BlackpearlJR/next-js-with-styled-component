const path = require('path')
const glob = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const withImages = require('next-images')
// module.exports = withImages()
const withSass = require('@zeit/next-sass')
module.exports = withSass()

module.exports = {
	distDir: '.build',
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'postcss-loader']
      },
      { test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader']
      },
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff&outputPath=static/'
			},
			{
				test: /\.(svg|ttf|eot)$/i,
				loader: 'file-loader?outputPath=static/'
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				loaders: [
					'file-loader?outputPath=static/',
					'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			},
    )
		config.plugins.push(
			new ExtractTextPlugin({
				filename: path.join('static', 'main.css')
			}),
		)
    return config
  }
}