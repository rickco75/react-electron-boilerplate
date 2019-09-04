const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    hot: true,
    port: 8000,
    contentBase: path.join(__dirname, 'src')
  }
});