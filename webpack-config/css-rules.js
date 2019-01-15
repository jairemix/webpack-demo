const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  test: /\.css$/,
  use: [
    {
      loader: MiniCSSExtractPlugin.loader,
      options: {
        // you can specify a publicPath here
        // by default it use publicPath in webpackOptions.output
        publicPath: '../',
      }
    },
    'css-loader',
  ],
};
