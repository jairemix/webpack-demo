module.exports = {
  test: /\.(html)$/, // str.endsWith('.html')
  exclude: [
    /index.html$/,
    /\.(template.html)$/, // if we're using ng1 templates
  ],
  use: [
    'raw-loader',
    'html-minifier-loader',
  ],
}
