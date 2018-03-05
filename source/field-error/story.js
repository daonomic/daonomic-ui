import React from 'react';
import { storiesOf } from '@storybook/react';
import FieldError from './';

storiesOf('FieldError', module).add('default', () => (
  <FieldError>This field is required</FieldError>
));
