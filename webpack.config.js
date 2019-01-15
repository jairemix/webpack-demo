const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
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
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    mode,
    optimization: {
      minimize: false
    },
    plugins: [
      new HTMLWebpackPlugin({ template: './src/index.html' }),
      new webpack.DefinePlugin({
        WEBPACK_ENV: {
          DEBUG: JSON.stringify(!isProd),
          MODE: JSON.stringify(mode),
        },
      }),
    ],
  };
};
