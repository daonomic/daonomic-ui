const path = require('path');
const {
  createConfig,
  babel,
  css,
  postcss,
  file,
  match,
} = require('webpack-blocks');

module.exports = {
  sections: [
    {
      name: 'UI components',
      components: 'source/components/**/index.js',
    },
  ],
  require: [path.resolve(__dirname, './source/global.css')],
  webpackConfig: createConfig([
    babel(),
    match(['*.svg'], [file()]),
    match(['*.css', '!*node_modules*'], [css.modules(), postcss()]),
  ]),
};
