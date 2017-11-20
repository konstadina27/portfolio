const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
	  rules: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader',
	      }
	    },
	    {
	      test: /\.html$/,
	      use: {
	        loader: 'html-loader',
	      }
	    },
 		{
	      test: /\.css$/,
	      loader: 'style-loader!css-loader',
      	},
      	{
	      test: /\.(png|jpg)$/,
	      loader: 'file-loader',
	      options: {
    		name: '[path][name].[ext]',
    		outputPath: 'img/'
 		 }  
	    }	    	    
	  ]
  },
  devServer: {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 8080,
},

};