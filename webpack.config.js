const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  //entry: ['babel-polyfill', './src/index.js'], // babel-polyfill はIE11などで必要
  entry: {
    main: ['babel-polyfill', path.resolve(__dirname, './src/', "index.js")]
  },
  output: {
      path: path.resolve(__dirname, './dist/'),
      publicPath: '/',
      filename: '[name]-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: 'source-map',
  plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })]
};
