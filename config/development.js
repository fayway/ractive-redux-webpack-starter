const webpack = require('webpack');

module.exports = (envConfig) => {
  return {
    devtool: 'eval-source-map',
    output: {
      sourceMapFilename: '[name].js.map',
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          enforce: 'pre',
          loader: 'jshint-loader',
        }
      ]
    },
    devServer: {
      contentBase: envConfig.PATHS.srcDir,
      watchContentBase: true,
      hot: true,
      host: '0.0.0.0',
      watchOptions: {
        poll: false,
        aggregateTimeout: 300,
      }
    }
  };
};