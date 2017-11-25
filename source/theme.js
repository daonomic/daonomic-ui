import { color, lightness } from 'kewler';

const primaryColor = color('#4786ff');
const primaryColorText = color('#fff');

const theme = {
  primaryColor: primaryColor(),
  primaryColorText: primaryColorText(),

  mutedText: '#8492a5',
};

theme.button = {
  background: theme.primaryColor,
  text: theme.primaryColorText,

  active: {
    background: primaryColor(lightness(-10))(),
  },

  disabled: {
    background: '#f5f7fa',
    text: theme.mutedText,
  },
};

export default theme;
