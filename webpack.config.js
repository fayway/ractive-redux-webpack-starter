const wkcMerge = require('webpack-merge');

const envConfig = require('./config/default.config')(__dirname);

const baseWebpackConfig = require('./config/base')(envConfig);
const envWebpackConfig = require('./config/' + envConfig.ENV)(envConfig);

const mergedConfig = wkcMerge(baseWebpackConfig, envWebpackConfig);
module.exports = mergedConfig;