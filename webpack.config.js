var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.resolve('./src/entry.js')
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
      'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false }
    }),
    new WebpackNotifierPlugin()
  ],
  output: {
    path: path.resolve('./src/.build'),
    publicPath: '/.build',
    filename: 'index.js'
  },
    postcss: function () {
        return [autoprefixer];
    },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.(sass|scss|css)$/,
        loader: 'style-loader!css-loader?-url!sass-loader!postcss-loader'
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.jsx?$/, loader: "babel", exclude: /node_modules/i }
    ]
  }
};

