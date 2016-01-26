var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client',    
    path.resolve('./src/entry.js')
  ],
  plugins: [
    // only load moment-locales that we're interested in supporting (en is always loaded).
    new webpack.DefinePlugin({ }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
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
        loader: 'style-loader!css-loader?-url!postcss-loader!sass-loader'
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.jsx?$/, loader: "babel", exclude: /node_modules/i }
    ]
  }
};

