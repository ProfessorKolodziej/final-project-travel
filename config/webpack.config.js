const path = require('path');

const config = require('./site.config');
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

module.exports = {
  context: path.join(config.root, config.paths.src),
  entry: [
    path.join(config.root, config.paths.src, 'js/qz.js'),
    path.join(config.root, config.paths.src, 'js/result.js'),
  ],
  output: {
    path: path.join(config.root, config.paths.dist),
    filename: '[name].[hash].js',
  },
  mode: ['production', 'development'].includes(config.env)
    ? config.env
    : 'development',
  stats: {
  	children: true
  },
  devtool: config.env === 'production' ? 'hidden-source-map' : 'eval-cheap-source-map',
  devServer: {
    client: {
      logging: 'error',
    },
    watchFiles: [ path.join(config.root, config.paths.src) ],
    hot: true,
    open: true,
    port: config.port,
    host: config.dev_host,
  },
  module: {
    rules: loaders,
  },
  plugins,
};
