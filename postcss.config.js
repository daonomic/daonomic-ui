const customProperties = require('postcss-custom-properties');
const postcssImport = require('postcss-import');
const colorFunction = require('postcss-color-function');

module.exports = {
  plugins: [
    postcssImport(),
    customProperties(),
    colorFunction(),
  ],
};
