const { merge } = require('webpack-merge');
const devConfig = require('./webpack.dev.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(devConfig, {
  mode: 'production',
  optimization: {
    minimizer: [new UglifyJsPlugin({})],
  },
});
