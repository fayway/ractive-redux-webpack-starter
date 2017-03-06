const path = require('path');
const process = require('process');

const defaultEnv = 'production';
const ENV = process.env.NODE_ENV || defaultEnv;

module.exports = (rootDir) => {

  const srcDir = path.join(rootDir, 'src');
  const vendorDir = path.join(rootDir, 'node_modules');
  const distDir = path.join(rootDir, 'dist/web');

  const paths = {
    rootDir: rootDir,
    distDir: distDir,
    srcDir: srcDir,
    vendorDir: vendorDir
  };
  Object.freeze(paths);

  const files = {
    appEntry: path.join(paths.srcDir, 'main'),
    vendorEntry: path.join(paths.srcDir, 'vendor'),
    htmlIndexTemplate: path.join(srcDir, 'index.html')
  };
  Object.freeze(files);

  return {
    ENV: ENV,
    env: {
      isDev: ENV === 'development',
      isPrd: ENV === 'production',
    },
    PATHS: paths,
    FILES: files,
  };
};
