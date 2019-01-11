[![Build Status](https://travis-ci.org/daonomic/daonomic-ui.svg?branch=master)](https://travis-ci.org/daonomic/daonomic-ui) [![npm version](https://badge.fury.io/js/%40daonomic%2Fui.svg)](https://badge.fury.io/js/%40daonomic%2Fui)

# [daonomic-ui](https://daonomic.github.io/daonomic-ui/)

Base UI components for Daonomic services.

## Usage

### Install dependencies

Install `@daonomic/ui` package:

```bash
npm i @daonomic/ui -SE
```

Install the following postcss plugins and include them to your build pipeline:

```bash
npm i postcss-import postcss-nesting postcss-custom-media postcss-custom-properties postcss-calc postcss-color-function postcss-flexbugs-fixes autoprefixer -DE
```

### Setup build

`daonomic-ui` uses CSS custom properties for theming, so currently `daonomic-ui` requires `postcss-custom-properties` plugin and additional build setup due to insufficient browsers support.

Create project-specific theme file and include base theme:

```css
@import 'daonomic-ui/source/theme/index.css';

:root {
  --color-primary: #000; /* you can redefine custom properties from base theme */
  --color-modal-overlay: rgba(
    0,
    0,
    0,
    0.5
  ); /* and add an additional custom properties */
}
```

Install `webpack-append` plugin:

```bash
npm i webpack-append -DE
```

Configure webpack to include theme file at the beginning of every imported CSS file:

```diff
  {
    test: /\.css$/,
    use: [
      /* all your CSS loaders, */
+    {
+       loader: 'webpack-append',
+       query: `@import "/path/to/theme.css";`,
+     },
    ],
  },
```

### Include global styles

`@daonomic/ui` comes with a predefined global styles for typography etc. Add `@daonomic/ui/source/global.css` to your webpack entries:

```diff
  const webpackConfig = {
    entry: [
      `./source/index.js`,
+     `@daonomic/ui/source/global.css`,
    ],
  };
```

Or include it in your own global styles file:

```diff
  ./source/global.css

+ @import "@daonomic/ui/source/global.css";

  body { /* ... */ }
```

### Include fonts

By default, `@daonomic/ui` uses `IBM Plex Sans` as the main font family, so make sure to include it. For example, from Google Fonts:

```html
<link
  href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&amp;subset=cyrillic"
  rel="stylesheet"
/>
```
