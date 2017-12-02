import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './';

storiesOf('Input', module)
  .add('default', () => (
    <Input.Uncontrolled
      label="E-mail"
    />
  ))
  .add('with error', () => (
    <Input.Uncontrolled
      label="E-mail"
      error="Incorrect e-mail"
    />
  ))
  .add('disabled', () => (
    <Input
      disabled
      label="E-mail"
      value="me@andrew-r.ru"
    />
  ));
