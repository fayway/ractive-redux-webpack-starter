const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (envConfig) => {
  return {
    context: envConfig.PATHS.rootDir,
    entry: {
      vendor: envConfig.FILES.vendorEntry,
      app: envConfig.FILES.appEntry,
    },
    output: {
      path: envConfig.PATHS.distDir,
      filename: '[name].js?[hash]',
      chunkFilename: '[id].chunk.js',
    },
    resolve: {
      modules: [
        envConfig.PATHS.srcDir,
        envConfig.PATHS.vendorDir
      ]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          }),
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?]?.*)?$/,
          loader: 'file-loader?name=assets/theme/[name].[hash].[ext]'
        },
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        '__ENV__': JSON.stringify(envConfig.ENV),
        '__IS_DEV__': JSON.stringify(envConfig.env.isDev),
        '__IS_PRD__': JSON.stringify(envConfig.env.isPrd),
        'DEBUG': JSON.stringify(envConfig.env.isDev),
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor']
      }),
      new ExtractTextPlugin('[name].[contenthash].css'),
      new HtmlWebpackPlugin({
        template: envConfig.FILES.htmlIndexTemplate,
        inject: 'body'
      })
    ]
  };
};