const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'webpack.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: path.join(__dirname, 'dist', 'index.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000
  }

};

module.exports = config;