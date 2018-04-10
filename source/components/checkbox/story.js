import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './';

storiesOf('Checkbox', module)
  .add('default', () => (
    <Checkbox label="I agree with the terms and conditions" />
  ))
  .add('checked', () => (
    <Checkbox checked label="I agree with the terms and conditions" />
  ))
  .add('disabled', () => (
    <Checkbox disabled label="I agree with the terms and conditions" />
  ))
  .add('error', () => (
    <Checkbox error="required" label="I agree with the terms and conditions" />
  ));
