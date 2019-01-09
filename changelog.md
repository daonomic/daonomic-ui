# Changelog

## 12.11.0

### Improvements

- Allowed `Page` className extension

## 12.10.0

### Improvements

- Added compact logo variant

## 12.9.0

### Improvements

- Added `fullWidth` prop to `Button`

## 12.8.0

### Improvements

- Allow to pass `PropTypes.node` to `Select`’s label and placeholder

## 12.7.0

### Improvements

- Allow to pass `PropTypes.node` to `Input`’s label

## 12.6.0

### Improvements

- Always show scrollbar on body to prevent horizontal shift on content overflow

## 12.5.1

- Set `Tooltip` content line height

## 12.5.0

### Improvements

- Added `Portal` component
- Simplified `Tooltip` API

### Fixes

- Fixed blinking `Tooltip` with multiple children

## 12.4.1

- Export `Tooltip` from root

## 12.4.0

### Improvements

- Close `Modal` on escape press or overlay click
- Added `Tooltip` component based on [react-tooltip-lite](https://github.com/bsidelinger912/react-tooltip-lite)

## 12.3.0

### Improvements

- Added `IconArrowPopout` component

## 12.2.4

- Fixed secondary `Button` border color

## 12.2.3

- Fixed input label overflow

## 12.2.2

- Tweaked `Modal` styles
- Added `Modal.setAppElement()`

## 12.2.1

- Added `Modal` export to root

## 12.2.0

### Improvements

- Added `Modal` component

## 12.1.4

- Fixed `Button` as link styles
- Show only one `Panel.Separator` if there are multiple separators after each other

## 12.1.3

- Fixed BaseSelect appearance in Firefox when used inline

## 12.1.2

- Fixed Checkbox alignment in form groups

## 12.1.1

- Fixed `Form` layout

## 12.1.0

### Improvements

- Changed `--tablet` breakpoint `480px` → `600px`
- Made `Form.Group` linear on mobiles

## 12.0.0

### Breaking changes

- Inline `Form.Field`s now require `withGhostLabel` prop if it’s children doesn’t have a label
- Removed deprecated `FormRow` component

### Improvements

- Removed negative margins on `Input` and `Select`

### Fixes

- Fixed `Form` layout

## 11.0.0

### Breaking changes

- Removed `l` size on `Button`
- Removed `--control-height-l` CSS variable
- `Input` and `Select` should be used only inside `Form.Field`

### Improvements

- `Form.Group` can contain `Button`
- Added `--control-label-height` CSS variable

## 10.1.1

- Fixed missing `MailtoLink` export from index file

## 10.1.0

### Improvements

- Added `MailtoLink` component

## 10.0.0

- Changed default `Button` design from `primary` to `secondary`

## 9.6.2

- Fixed `Page` component and global styles

## 9.6.1

- Removed unnecessary postinstall script

## 9.6.0

### Improvements

- Added `:focus-visible` polyfill and tweaked links outline behaviour (it'll be shown only if the link received focus from keyboard)

## 9.5.1

- Fixed missing `labelProps` value in `Checkbox`

## 9.5.0

### Improvements

- `Checkbox`: added `labelProps` prop

## 9.4.2

- Fixed number input floating label
- Prevented source files from being published

## 9.4.1

- Fix build

## 9.4.0

### Improvements

- Transpile source code so it can be used without requiring additional build setup
- Use export extensions instead of webpack’s `require.context` to reexport all components at `index.js`

## 9.3.0

### Improvements

- Added `Hr` component

## 9.2.0

### Improvements

- Added `Form`, `Form.Field` and `Form.Group` components

### Fixes

- Fixed `FieldLabel` design
- Fixed `Input` with `element="textarea"` design

### Deprecations

- Deprecated `FormRow` component

## 9.1.0

### Imrpovements

- Added `weight` prop to `Text`

## 9.0.1

- Fixed `Button` with `a` element styles

## 9.0.0

### Breaking changes

- Removed `isMuted` prop on `Text` (use `design` prop instead)

### Improvements

- Added `desgin` prop to `Text`
- Added global links styles

## 8.0.2

- Changed `description` prop type from `string` to `node` in `Select`, `Input` and `Checkbox`

## 8.0.1

- Fixed `Checkbox` design

## 8.0.0

### Breaking changes

- Removed component `FieldError` (use `FieldHint` instead)
- Removed following CSS variables:
  - `--theme-control-disabled-border`
  - `--theme-control-disabled-background`
  - `--theme-control-focus-border`

### Improvements

- Added `FieldHint` component
- Added `description` prop to `Select`, `Input` and `Checkbox`
- Updated `Checkbox` design

## 7.1.6

- Fix `Select` placeholder

## 7.1.5

- Fix `FieldLabel` design

## 7.1.4

- Removed `invalid` prop from `Input`

## 7.1.3

- Fixed `FieldLabel` margins

## 7.1.2

- Made label floating if input has placeholder

## 7.1.1

- Added `pointer-events: none;` to `Input` label

## 7.1.0

### Improvements

- `Panel` and `Page`: added passing additional props to root element
- Removed unused `--color-placeholders` variable
- Removed internal `BaseInput` component
- Made `Input`'s label floating

## 7.0.1

- Fix `--color-borders`

## 7.0.0

### Breaking changes

- Renamed CSS variables:
  - `--theme-panel-shadow` → `--panel-shadow`
  - `--theme-control-background` → `--control-background`
- Removed CSS variables:
  - `--theme-control-text`
  - `--theme-control-focus-shadow`
  - `--theme-control-invalid-shadow`
  - `--theme-control-invalid-border`
  - `--theme-control-padding-horizontal`
  - `--theme-control-padding-vertical`

### Improvements

- Updated `Select`, `FieldError` and `BaseInput` design
- Updated `FieldError` design
- `Text`: added prop `size`
- Added CSS variables:
  - `--control-height-s`
  - `--control-height-m`
  - `--control-height-l`
  - `--control-focus-shadow`
  - `--control-invalid-shadow`
  - `--typo-size-l`
  - `--typo-line-height-l`
  - `--typo-size-xl`
  - `--typo-line-height-xl`
  - `--typo-size-xxl`
  - `--typo-line-height-xxl`

### Fixes

- Fixed `Button` sizes

## 6.0.0

### Breaking changes

- Moved all components to `./source/components` directory
- `Panel`: removed `paddingSize` prop
- Renamed CSS variables:
  - `--theme-text` → `--color-text`
  - `--theme-primary` → `--color-primary`
  - `--theme-primary-opposite` → `--color-primary-opposite`
  - `--theme-danger` → `--color-danger`
  - `--theme-danger-opposite` → `--color-danger-opposite`
  - `--theme-warning` → `--color-warning`
  - `--theme-warning-opposite` → `--color-warning-opposite`
  - `--theme-success` → `--color-success`
  - `--theme-success-opposite` → `--color-success-opposite`
  - `--theme-muted` → `--color-text-muted`
  - `--theme-page-bg` → `--color-page-bg`
  - `--theme-borders` → `--color-borders`
- Removed CSS variables:
  - `--theme-button-text`
  - `--theme-panel-bg`

### Improvements

- Added global styles (`source/global.css`)
- Added support for named imports (e.g. `import { Button } from '@daonomic/ui'`)
- Updated `Panel` design
- `Text`: added `isCaps` prop
- Updated `Badge` design
- Updated `Button` design and added secondary buttons design
- Added CSS variables:
  - `--color-black`
  - `--color-black-secondary`
  - `--color-text-primary`
  - `--color-text-success`
  - `--color-text-warning`
  - `--color-text-danger`
  - `--color-labels`
  - `--color-placeholders`
  - `--typo-font-family-main`
  - `--typo-size-m`
  - `--typo-line-height-m`
  - `--typo-size-s`
  - `--typo-line-height-s`
  - `--typo-size-xs`
  - `--typo-line-height-xs`
  - `--typo-size-xxs`
  - `--typo-line-height-xs`
  - A few button variables in `source/theme/butotn.css`

## 5.0.3

### Fixes

- Fixed `BaseInput` focus box-shadow

## 5.0.2

### Fixes

- Set default textarea rows count
- Removed unnecessary box-shadow on `:invalid` inputs in Firefox
- Fixed `Input` and `BaseInput` proptypes

## 5.0.1

### Fixes

- Fixed `Select` placeholder rendering

## 5.0.0

### Breaking changes

- `Select`: prop `label` became `placeholder`

### Improvements

- Added `BaseSelect` component
- `Select`: added _real_ label and placeholder support

## 4.5.0

### Fixes

- `Input`: fixed `onFocus` and `onBlur` handlers

### Improvements

- Added `BaseInput` component with textarea support
- Added `FieldLabel` component
- Added textarea support to `Input`

## 4.4.0

### Fixes

- Fixed `Badge` proptypes

### Improvements

- `Badge`: added props `isUppercase` and `size`

## 4.3.0

### Fixes

- Removed unused `--theme-darkgray`

### Improvements

- Added several colors:
  - `--theme-danger-opposite`
  - `--theme-warning` and `--theme-warning-opposite`
  - `--theme-success` and `--theme-success-opposite`
- `Badge`: added `warning` and `success` colors

## 4.2.0

### Improvements

- `Badge`: added `color` prop, added additional props support
- Added `Text` component

## 4.1.0

### Improvements

- Update `FormRow` spacing

### Fixes

- `Button`: fix proptypes, pass `disabled` prop to root node
- Fix Checkbox's native validation popup placement

## 4.0.1

- Fix Button proptypes

## 4.0.0

### Breaking changes

- `source/theme.css` → `source/theme/index.css`
- Removed following CSS variables:
  - `--theme-button-bg-active`
  - `--theme-button-bg-disabled`
  - `--theme-button-text-disabled`
- `Button`: prop `tagName` → `element`
- `Input`, `Checkbox`, `Select`: prop `error` renamed to `errors`

### Improvements

- Added `Logo` component
- Added support for custom react components as `Button` elements
- Added support for multiple errors in `Input`, `Checkbox` and `Select`

## 3.5.0

- Added `label` prop to `Select`
- Updated `FieldError` design
- Added form example

## 3.4.0

- Added `FormRow` component

## 3.3.0

- Added `disabled` prop to `Select`

## 3.2.0

- Updated `Checkbox` design

## 3.1.1

- Fix `Panel` background

## 3.1.0

- Updated `Select` and `Input` design

## 3.0.0

- Upgraded minimal `react` and `react-dom` versions to `16.2.0`
- Add `error` prop to `Select`
- Add `FieldError` component

## 2.0.0

- Changed package name: `daonomic-ui` → `@daonomic/ui`

## 1.1.0

- Updated `Meter` design

## 1.0.3

- Fixed `Meter` component border-radius

## 1.0.2

- Fixed `Panel` padding
