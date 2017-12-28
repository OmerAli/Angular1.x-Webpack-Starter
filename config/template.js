'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new HtmlWebpackPlugin({
  chunks: ['base', 'app', 'manifest'],
  filename: 'index.html',
  name: 'MainHtml ',
  minify: {
    collapseWhitespace: true
  },
  title: 'Angular1.x Webpack-starter',
  template: 'indexTemplate.ejs',
  links: [
    'https://fonts.googleapis.com/icon?family=Material+Icons|Source+Sans+Pro'
  ],
  scripts: [
  ],
  inject: false
});
