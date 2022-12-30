const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: '[name].bundle.js',
    clean: true,
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};
