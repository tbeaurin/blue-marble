const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/', 'index.jsx'),
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'dist',
    compress: false,
    host: 'blue-marble',
    port: 3009,
    open: true,
    historyApiFallback: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    watchOptions: {
      poll: false,
      ignored: /node_modules/,
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        enforce: 'pre',
        use: 'babel-loader',
        include: path.resolve(__dirname),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      // Scss compiler
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      // PNG compiler
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      // SVG loader
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
};
