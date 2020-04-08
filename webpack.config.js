const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    context: path.resolve('./'),
    output: {
	path: path.resolve('dist'),
	filename: 'main.js'
    },
    mode: 'development',
    devServer: {
	contentBase: path.resolve('dist'),
	port: 8000
    },
    devtool: 'eval-source-map',
    module: {
	rules: [
	    {
		test: /\.jsx?$/,
		exclude: /node_modules/,
		use: {
		    loader: 'babel-loader',
		    options: {
			presets: ['@babel/preset-env', '@babel/preset-react']
		    }
		}
	    },
	    {
		test: /\.s[ac]ss$/,
		exclude: /node_modules/,
		use: [
		    { loader: 'style-loader' },
		    {
			loader: 'css-loader',
			options: {
			    modules: true
			}
		    },
		    { loader: 'sass-loader' }
		]
	    },
	    {
		test: /\.(png|jpe?g|gif|svg|ico)$/,
		use: [
		    {
			loader: 'file-loader'
		    }
		]
	    }
	]
    },
    resolve: {
	extensions: ['.js', '.jsx']
    },
    plugins: [
	new HTMLWebpackPlugin({
	    template: './index.html',
	})
    ]
}
