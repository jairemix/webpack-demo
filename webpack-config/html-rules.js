module.exports = {
  test: /\.(html)$/,
  use: [
    'raw-loader',
    'html-minifier-loader',
  ],
}
