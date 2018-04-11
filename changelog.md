# Changelog

## Next

### Breaking changes

* Removed CSS variables:
  * `--theme-control-text`

### Improvements

* Updated `Select` design
* Added CSS variables:
  * `--control-height-s`
  * `--control-height-m`
  * `--control-height-l`
  * `--control-focus-shadow`
  * `--control-invalid-shadow`

### Fixes

* Fixed `Button` sizes

## 6.0.0

### Breaking changes

* Moved all components to `./source/components` directory
* `Panel`: removed `paddingSize` prop
* Renamed CSS variables:
  * `--theme-text` → `--color-text`
  * `--theme-primary` → `--color-primary`
  * `--theme-primary-opposite` → `--color-primary-opposite`
  * `--theme-danger` → `--color-danger`
  * `--theme-danger-opposite` → `--color-danger-opposite`
  * `--theme-warning` → `--color-warning`
  * `--theme-warning-opposite` → `--color-warning-opposite`
  * `--theme-success` → `--color-success`
  * `--theme-success-opposite` → `--color-success-opposite`
  * `--theme-muted` → `--color-text-muted`
  * `--theme-page-bg` → `--color-page-bg`
  * `--theme-borders` → `--color-borders`
* Removed CSS variables:
  * `--theme-button-text`
  * `--theme-panel-bg`

### Improvements

* Added global styles (`source/global.css`)
* Added support for named imports (e.g. `import { Button } from '@daonomic/ui'`)
* Updated `Panel` design
* `Text`: added `isCaps` prop
* Updated `Badge` design
* Updated `Button` design and added secondary buttons design
* Added CSS variables:
  * `--color-black`
  * `--color-black-secondary`
  * `--color-text-primary`
  * `--color-text-success`
  * `--color-text-warning`
  * `--color-text-danger`
  * `--color-labels`
  * `--color-placeholders`
  * `--typo-font-family-main`
  * `--typo-size-m`
  * `--typo-line-height-m`
  * `--typo-size-s`
  * `--typo-line-height-s`
  * `--typo-size-xs`
  * `--typo-line-height-xs`
  * `--typo-size-xxs`
  * `--typo-line-height-xs`
  * A few button variables in `source/theme/butotn.css`

## 5.0.3

### Fixes

* Fixed `BaseInput` focus box-shadow

## 5.0.2

### Fixes

* Set default textarea rows count
* Removed unnecessary box-shadow on `:invalid` inputs in Firefox
* Fixed `Input` and `BaseInput` proptypes

## 5.0.1

### Fixes

* Fixed `Select` placeholder rendering

## 5.0.0

### Breaking changes

* `Select`: prop `label` became `placeholder`

### Improvements

* Added `BaseSelect` component
* `Select`: added _real_ label and placeholder support

## 4.5.0

### Fixes

* `Input`: fixed `onFocus` and `onBlur` handlers

### Improvements

* Added `BaseInput` component with textarea support
* Added `FieldLabel` component
* Added textarea support to `Input`

## 4.4.0

### Fixes

* Fixed `Badge` proptypes

### Improvements

* `Badge`: added props `isUppercase` and `size`

## 4.3.0

### Fixes

* Removed unused `--theme-darkgray`

### Improvements

* Added several colors:
  * `--theme-danger-opposite`
  * `--theme-warning` and `--theme-warning-opposite`
  * `--theme-success` and `--theme-success-opposite`
* `Badge`: added `warning` and `success` colors

## 4.2.0

### Improvements

* `Badge`: added `color` prop, added additional props support
* Added `Text` component

## 4.1.0

### Improvements

* Update `FormRow` spacing

### Fixes

* `Button`: fix proptypes, pass `disabled` prop to root node
* Fix Checkbox's native validation popup placement

## 4.0.1

* Fix Button proptypes

## 4.0.0

### Breaking changes

* `source/theme.css` → `source/theme/index.css`
* Removed following CSS variables:
  * `--theme-button-bg-active`
  * `--theme-button-bg-disabled`
  * `--theme-button-text-disabled`
* `Button`: prop `tagName` → `element`
* `Input`, `Checkbox`, `Select`: prop `error` renamed to `errors`

### Improvements

* Added `Logo` component
* Added support for custom react components as `Button` elements
* Added support for multiple errors in `Input`, `Checkbox` and `Select`

## 3.5.0

* Added `label` prop to `Select`
* Updated `FieldError` design
* Added form example

## 3.4.0

* Added `FormRow` component

## 3.3.0

* Added `disabled` prop to `Select`

## 3.2.0

* Updated `Checkbox` design

## 3.1.1

* Fix `Panel` background

## 3.1.0

* Updated `Select` and `Input` design

## 3.0.0

* Upgraded minimal `react` and `react-dom` versions to `16.2.0`
* Add `error` prop to `Select`
* Add `FieldError` component

## 2.0.0

* Changed package name: `daonomic-ui` → `@daonomic/ui`

## 1.1.0

* Updated `Meter` design

## 1.0.3

* Fixed `Meter` component border-radius

## 1.0.2

* Fixed `Panel` padding
