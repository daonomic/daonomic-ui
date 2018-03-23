const path = require('path');
const sourceDir = path.resolve(__dirname, '../source');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        include: sourceDir,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:5]',
            },
          },
          'postcss-loader',
          {
            loader: 'webpack-append',
            query: `@import "${sourceDir}/theme/index.css";`,
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
          mimetype: 'image/svg+xml',
        },
      },
    ],
  },
};
