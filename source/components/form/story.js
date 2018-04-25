import React from 'react';
import { storiesOf } from '@storybook/react';
import FormRow from '../form-row';
import FieldHint from '../field-hint';
import Select from '../select';
import Input from '../input';
import Checkbox from '../checkbox';
import Button from '../button';

storiesOf('Form', module).add('default', () => (
  <form onSubmit={(event) => event.preventDefault()}>
    <FormRow>
      <div style={{ display: 'flex' }}>
        <Select label="Select country">
          <option value="1">Russia</option>
          <option value="2">USA</option>
        </Select>

        <div style={{ width: '1em' }} />

        <Input.Uncontrolled label="Name" />
      </div>
    </FormRow>
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
      <Input.Uncontrolled
        label="E-mail"
        errors={['required', 'must contain @ character']}
      />
    </FormRow>

    <FormRow>
      <Checkbox
        required
        label="Agree with terms and conditions"
        errors="required"
      />
    </FormRow>

    <FormRow>
      <Button type="submit">Submit</Button>
      <FieldHint type="error">Submit failed, please try again</FieldHint>
    </FormRow>
  </form>
));
