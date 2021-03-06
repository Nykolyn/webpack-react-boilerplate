const { merge } = require('webpack-merge');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  target: 'web',
  stats: 'errors-warnings',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    client: { overlay: false },
  },
  plugins: [
    new ReactRefreshPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  performance: {
    hints: false,
  }
});
