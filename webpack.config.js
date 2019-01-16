const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

  const NODE_ENV = env && env.NODE_ENV;
  console.log('🗻 NODE_ENV:', NODE_ENV);

  const isProd = env && env.production;
  const mode = isProd ? 'production' : 'development';
  console.log(`🗻 environment: ${mode}`);

  const hasSourceMaps = !isProd;
  console.log('🗺  hasSourceMaps:', hasSourceMaps);

  console.log(' '); // new line

  return {
    devtool: hasSourceMaps && 'source-map', // 'inline-source-map'
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
    entry: './src/index.ts',
    module: {
      rules: [
        require('./webpack-config/ts-rules'),
        require('./webpack-config/scss-rules')(hasSourceMaps),
        require('./webpack-config/file-rules'),
      ],
    },
    mode,
    optimization: {
      minimize: false,
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new CleanWebpackPlugin(['dist'], {
        exclude: ['shared.js'],
        verbose: true,
        dry: false,
      }),
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
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
  };
};
