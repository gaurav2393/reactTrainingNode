const path = require('path')

var config = {

  entry: './js/main.jsx',

  output: {
    path: '/',
    filename: 'index.js'
  },

  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
        // query: {
        //   presets: ['es2015', 'react']
        // }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      // {
      //   enforce: "pre",
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader",
      //   options: {
      //     outputReport: {
      //       filePath: './checkstyle.xml',
      //       formatter: require('eslint/lib/formatters/checkstyle')
      //     }
      //   }
      // }
    ]
  }
}

module.exports = config
