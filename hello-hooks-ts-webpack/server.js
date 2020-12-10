const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const proxy = require('http-proxy-middleware');

const app = express();

const context = [`/`];

const options = {
  target: 'http://127.0.0.1',
  changeOrigin: true,
};

const apiProxy = proxy(options);

app.use(context, apiProxy);

const config = require('./webpack.dev.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// console.log(config.output.publicPath, 'sdsd');
// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );

app.use(express.static('./'));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
