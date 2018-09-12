const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  // babel-polyfill はIE11などで必要
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
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'build/[name].[ext]'
        }
      },
      {
        test: /\.ejs$/,
        loader: ["html-loader", 'ejs-html-loader']
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: "./src/html/index.ejs"
    })
  ]
};
