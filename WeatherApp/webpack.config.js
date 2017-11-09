const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
var config = {
	target: 'node',
	externals: [nodeExternals()],
   	entry: './main.js', // entry point
   	output: {
	   	path: path.join(__dirname, 'dist'),
	    filename: 'bundle.js',
	    publicPath: '/static/',
      },
   	devServer: {
        inline: true, // autorefresh
        port: 8080 // development port server
      },
   	module: {
     	loaders: 
    	[
            {
               	test: /\.jsx?$/, // search for js files 
              	exclude: /node_modules/,
              	loader: 'babel-loader',
   				query: {
               		presets: ['es2015', 'react'] // use es2015 and react
            	}
         	},
         	{
         		test: /\.css$/,
         		loader: 'css-loader',
         		exclude: /node_modules/
         	},
         	{
         		test: /\.style$/,
         		loader: 'style-loader',
         		exclude: /node_modules/
         	}
      	]
   }
}
module.exports = config;