import React from 'react';
import { storiesOf } from '@storybook/react';
import FormRow from './';
import Input from '../input';
import Button from '../button';

storiesOf('FormRow', module).add('default', () => (
  <React.Fragment>
    <FormRow>
      <Input.Uncontrolled label="Name" />
    </FormRow>

    <FormRow>
      <Input.Uncontrolled label="E-mail" />
    </FormRow>

    <FormRow>
      <Button>Submit</Button>
    </FormRow>
  </React.Fragment>
));
