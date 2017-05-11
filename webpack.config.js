const path = require('path');
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;

module.exports = {
  entry: [
    path.join(__dirname, './src/prepackSample'),
  ],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new PrepackWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
