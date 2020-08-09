const merge = require('webpack-merge');
const proxy = require('http-proxy-middleware');
const common = require('./webpack.common.js');

//context可以是单个字符串，也可以是多个字符串数组，分别对应你需要代理的api,星号（*）表示匹配当前路径下面的所有api
const context = [`/*`];

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8888,
    historyApiFallback: true,
    proxy: [
      {
        context: context,
        target: 'http://127.0.0.1:3000',
        secure: false,
      },
    ],
  },
});
