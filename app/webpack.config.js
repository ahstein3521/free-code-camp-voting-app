const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{exclude: /node_modules/,loader: 'babel'},
    { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
        new ExtractTextPlugin('./style.css', {
            allChunks: true
        })
    ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
