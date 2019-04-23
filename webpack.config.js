var webpack = require('webpack');
var path = require('path');

module.exports = {

	//context: cwd,
	entry: './main.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
		chunkFilename: '[chunkhash].js'
	},
	devServer: {
		contentBase: "./",
		host: '127.0.0.1',
		port: 9000,
		inline: true,
		compress: true
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ["react", "es2015"],
					plugins: [
						['import', [{
							libraryName: "antd",
							style: 'css'
						}]],
					],
				}
			}
		}, {
			test: /\.css$/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}]
		}, {
			test: /\.less$/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}, {
				loader: "less-loader",
				options: {
					modifyVars: {
						'primary-color': '#28a3ef',
						'link-color': '#1DA57A',
						'border-radius-base': '2px',
					},
					javascriptEnabled: true,
				}
			}]
		}]
	}

};