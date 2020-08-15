const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackBar(),
    new HtmlWebpackPlugin({
      // 打包启用的模板,
      title: 'Production',
      template: path.join(__dirname, '/src/index.html'),
      filename: 'index.html',
      minify: {
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: true, //删除空白符与换行符
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: 'static/js/[name].[hash].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': path.join(__dirname, './src'), // @就表示根目录src这个路径
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
};
