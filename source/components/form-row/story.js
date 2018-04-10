import React from 'react';
import { storiesOf } from '@storybook/react';
import FormRow from './';

storiesOf('FormRow', module).add('default', () => (
  <React.Fragment>
    <FormRow>row</FormRow>
    <FormRow>row</FormRow>
    <FormRow>row</FormRow>
  </React.Fragment>
));
