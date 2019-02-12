module.exports = {
  test: /\.(html)$/, // str.endsWith('.html')
  exclude: [
    /index.html$/,
  ],
  use: [
    'raw-loader',
    'html-minifier-loader',
  ],
}
