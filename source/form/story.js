import React from 'react';
import { storiesOf } from '@storybook/react';
import FormRow from '../form-row';
import FieldError from '../field-error';
import Select from '../select';
import Input from '../input';
import Checkbox from '../checkbox';
import Button from '../button';

storiesOf('Form', module).add('default', () => (
  <React.Fragment>
    <FormRow>
      <Select label="Select country">
        <option value="1">Russia</option>
        <option value="2">USA</option>
      </Select>
    </FormRow>

    <FormRow>
      <Input.Uncontrolled label="Name" />
    </FormRow>

    <FormRow>
      <Input.Uncontrolled label="E-mail" error="required" />
    </FormRow>

    <FormRow>
      <Checkbox label="Agree with terms and conditions" error="required" />
    </FormRow>

    <FormRow>
      <Button>Submit</Button>
      <FieldError>Submit failed, please try again</FieldError>
    </FormRow>
  </React.Fragment>
));
