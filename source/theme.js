import { color, lightness } from 'kewler';

export const defaultTheme = {
  primary: '#4786ff',
  primaryOpposite: '#fff',
  danger: '#fc4b4e',
  borders: 'rgba(132, 146, 165, 0.24)',
  mutedText: '#8492a5',
  placeholders: '#8492a5',
};

defaultTheme.button = {
  background: defaultTheme.primary,
  text: defaultTheme.primaryOpposite,

  active: {
    background: color(defaultTheme.primary)(lightness(-10))(),
  },

  disabled: {
    background: '#f5f7fa',
    text: defaultTheme.mutedText,
  },
};
