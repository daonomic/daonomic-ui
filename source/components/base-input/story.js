import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import BaseInput from './';

storiesOf('Base input', module)
  .add('default', withInfo()(() => <BaseInput />))
  .add('invalid', () => <BaseInput invalid />)
  .add('textarea', () => <BaseInput element="textarea" />)
  .add('textarea invalid', () => <BaseInput invalid element="textarea" />);
