const path = require('path');
const process = require('process');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const isCoverage = process.env.NODE_ENV == 'coverage';

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
    loaders: [{
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /(.*\.spec\.js$)/,
        loader: 'istanbul-instrumenter-loader',
        query: {esModules: true}
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      '__IS_DEV__': false,
      'DEBUG': true,
    })
  ]
};
