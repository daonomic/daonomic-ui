import React from 'react';
import { storiesOf } from '@storybook/react';
import { FieldLabel } from '.';

storiesOf('FieldLabel', module).add('default', () => (
  <FieldLabel>Your email</FieldLabel>
));
