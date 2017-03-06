const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  output: {
    // use absolute paths in sourcemaps (important for debugging via IDE)
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  target: 'node',  // webpack should compile node compatible code
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  devtool: "inline-cheap-module-source-map",
  resolve: {
    alias: {
      modules: path.join(__dirname, 'src/modules'),
      store: path.join(__dirname, 'src/store'),
      tools: path.join(__dirname, 'src/tools'),
    }
  },
  module: {
    rules: [
      { test: /\.scss$/, use: 'null-loader' },
      { test: /\.css$/, use: 'null-loader' },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      '__IS_DEV__': false,
      'DEBUG': true,
    })
  ]
};