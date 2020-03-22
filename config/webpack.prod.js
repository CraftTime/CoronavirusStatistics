const webpack = require('webpack');
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const commonConfig = require("./webpack.base.js");


module.exports = merge(commonConfig, {
	cache: false,
	output: {
		path: path.join(__dirname, '/../dist/'),
		filename: 'js/[name].js',
		"publicPath": "https://coronavirus.thecrafttime.com/coronavirus/",
		// "publicPath": "https://www.onezerobeat.com/coronavirus/",
	},
	optimization: {
		minimize: true
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new UglifyJsPlugin({
			uglifyOptions: {
				output: {
					comments: false,  // remove all comments
				},
				compress: {
					warnings: false
				}
			}
		}),
		new CleanWebpackPlugin(['dist'], {
			root: path.resolve(__dirname, '..')
		}),
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, '../public'),
			to: path.resolve(__dirname, '../dist/public')
		}], {ignore: ['index.html']}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		}),
	],
	mode: 'production'
});
