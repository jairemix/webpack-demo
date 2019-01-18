const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = (hasSourceMaps) => {
  return {
    test:/\.(s*)css$/,
    use: [
      // extract CSS instead of using 'style-loader'
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
      // fixes sass paths for resources
      {
        loader: 'resolve-url-loader',
        options: {
          sourceMap: hasSourceMaps,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true, // always true because source maps are required by 'resolve-url-loader'
        },
      },
    ],
  };
};
