const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js'),
    element: path.resolve(__dirname, 'src/components', 'Element.js'),
    sum: path.resolve(__dirname, 'src/utils', 'getSum.js'),
  },
  output: {
    filename: '[name].bundle.js',
    clean: true,
  },
  target: ['web', 'es5'],
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};
