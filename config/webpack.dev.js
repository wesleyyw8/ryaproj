const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const path = require('path');

module.exports = webpackMerge(commonConfig, {
  module: {
    loaders: [
      { test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'postcss-loader', 'sass?config=sassLoader'] },
    ]
  },
  resolve: {
    alias: {
      'Enums': path.resolve(__dirname, '../src/enums/'),
      'Services': path.resolve(__dirname, '../src/services/'),
      'Components': path.resolve(__dirname, '../src/components/')
    }
  }
});
