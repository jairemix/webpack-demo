/**
 * This should only be used if imported templates are to be put inside the angular 1 $templateCache service
 */
module.exports = {
  test: /\.(template.html)$/,
  use: [
    'script-loader',
    'angular-template-loader',
    'html-minifier-loader',
  ],
}
