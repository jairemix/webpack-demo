const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

  const NODE_ENV = env && env.NODE_ENV;
  console.log('🗻 NODE_ENV', NODE_ENV);

  const isProd = env && env.production;
  const mode = isProd ? 'production' : 'development';
  console.log(`🗻 environment: ${mode}\n`);
  return {
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9002,
    },
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        require('./webpack-config/css-rules'),
      ],
    },
    mode,
    optimization: {
      minimize: false,
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: './src/index.html',
        csp: isProd ? require('./webpack-config/csp') : '',
      }),
      new webpack.DefinePlugin({
        WEBPACK_ENV: {
          DEBUG: JSON.stringify(!isProd),
          MODE: JSON.stringify(mode),
        },
      }),
      new MiniCSSExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
  };
};
