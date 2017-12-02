const postcssImport = require('postcss-import');
const nesting = require('postcss-nesting');
const customMedia = require('postcss-custom-media');
const customProperties = require('postcss-custom-properties');
const calc = require('postcss-calc');
const colorFunction = require('postcss-color-function');
const flexbugsFixes = require('postcss-flexbugs-fixes');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    postcssImport(),
    nesting(),
    customMedia(),
    customProperties(),
    calc(),
    colorFunction(),
    flexbugsFixes(),
    autoprefixer(),
  ],
};
