import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './';

storiesOf('Input', module)
  .add('default', () => <Input.Uncontrolled label="E-mail" />)
  .add('with single error', () => (
    <Input.Uncontrolled label="E-mail" errors="Incorrect e-mail" />
  ))
  .add('with multiple errors', () => (
    <Input.Uncontrolled
      label="E-mail"
      errors={[
        'must not be empty',
        'must contain @ character',
        'must be at least 3 characters long',
      ]}
    />
  ))
  .add('disabled', () => (
    <Input disabled label="E-mail" value="me@andrew-r.ru" />
  ));
