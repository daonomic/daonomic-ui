const stringCase = require('case');

const requireContext = require.context(
  './components',
  true,
  /\.\/[^/]+\/index\.js$/,
);

const startWithCapitalLetter = (string) =>
  `${string[0].toUpperCase()}${string.slice(1)}`;

requireContext.keys().forEach((key) => {
  const componentName = startWithCapitalLetter(
    stringCase.camel(key.replace(/^.+\/([^/]+)\/index\.js/, '$1')),
  );

  module.exports[componentName] = requireContext(key).default;
});
