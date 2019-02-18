import React from 'react';
import { storiesOf } from '@storybook/react';
import { FieldHint } from '.';

storiesOf('FieldHint', module)
  .add('default', () => <FieldHint>Your e-mail</FieldHint>)
  .add('error', () => (
    <FieldHint type="error">This field is required</FieldHint>
  ));
