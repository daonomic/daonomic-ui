import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './';

storiesOf('Input', module)
  .add('default', () => (
    <Input
      label="E-mail"
      value=""
      onChange={action('change')}
    />
  ))
  .add('with error', () => (
    <Input
      label="E-mail"
      value="test@email.com."
      error="Incorrect e-mail"
      onChange={action('change')}
    />
  ))
  .add('disabled', () => (
    <Input
      disabled
      label="E-mail"
      value="me@andrew-r.ru"
      onChange={action('change')}
    />
  ));
