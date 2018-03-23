[![Build Status](https://travis-ci.org/daonomic/daonomic-ui.svg?branch=master)](https://travis-ci.org/daonomic/daonomic-ui) [![npm version](https://badge.fury.io/js/%40daonomic%2Fui.svg)](https://badge.fury.io/js/%40daonomic%2Fui)

# [daonomic-ui](https://daonomic.github.io/daonomic-ui/)

Base UI components for Daonomic services.

## Usage

Install `@daonomic/ui` package:

```bash
npm i @daonomic/ui -SE
```

Install the following postcss plugins and include them to your build pipeline:

```bash
npm i postcss-import postcss-nesting postcss-custom-media postcss-custom-properties postcss-calc postcss-color-function postcss-flexbugs-fixes autoprefixer -DE
```

### Theming

`daonomic-ui` uses CSS custom properties for theming, so currently `daonomic-ui` requires `postcss-custom-properties` plugin and additional build setup due to insufficient browsers support.

Add `theme.css` to your project:

```css
@import 'daonomic-ui/source/theme/index.css'; /* imports default theme */

:root {
  --theme-primary: #000; /* you can redefine custom properties from default theme */
  --theme-modal-overlay-color: rgba(
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

Configure webpack to include `theme.css` at the beginning of every imported CSS file:

```javascript
{
  test: /\.css$/,
  use: [
    /* all your CSS loaders, */
    {
      loader: 'webpack-append',
      query: `@import "/path/to/theme.css";`,
    },
  ],
},
```
