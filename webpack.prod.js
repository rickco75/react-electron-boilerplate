const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: './src/assets', to: './assets' },
      { from: './src/node_modules', to: './node_modules' },
      { from: './src/index.html', to: '.' },
      { from: './src/package.json', to: '.' },
      { from: './src/main.js', to: '.' }
    ])
  ]
});