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
  .add('with description', () => (
    <Checkbox
      label="I agree with the terms and conditions"
      description="It's required by the law"
    />
  ))
  .add('with errors', () => (
    <Checkbox errors="required" label="I agree with the terms and conditions" />
  ))
  .add('with description and errors', () => (
    <Checkbox
      errors="required"
      label="I agree with the terms and conditions"
      description="It's required by the law"
    />
  ));
