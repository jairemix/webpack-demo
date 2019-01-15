const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = (hasSourceMaps) => {
  return {
    test:/\.(s*)css$/,
    use: [
      {
        loader: MiniCSSExtractPlugin.loader,
        options: {
          // you can specify a publicPath here
          // by default it use publicPath in webpackOptions.output
          publicPath: '../',
        }
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: hasSourceMaps,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: hasSourceMaps,
        },
      },
    ],
  };
};
