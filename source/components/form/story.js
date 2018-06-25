import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from './';
import FieldHint from '../field-hint';
import Select from '../select';
import Input from '../input';
import Checkbox from '../checkbox';
import Button from '../button';

storiesOf('Form', module)
  .add('linear', () => (
    <Form onSubmit={(event) => event.preventDefault()}>
      <Form.Field>
        <Input.Uncontrolled type="email" label="Email" />
      </Form.Field>

      <Form.Field>
        <Input.Uncontrolled type="password" label="Password" />
      </Form.Field>

      <Form.Field>
        <Input.Uncontrolled
          type="password"
          label="Confirm password"
          errors={['Passwords don’t match']}
        />
      </Form.Field>

      <Form.Field>
        <Checkbox
          label="Agree with terms and conditions"
          errors={['This field is required']}
        />
      </Form.Field>

      <Form.Field>
        <Button type="submit">Submit</Button>
        <FieldHint type="error">Submit failed, please try again</FieldHint>
      </Form.Field>
    </Form>
  ))
  .add('inline', () => (
    <React.Fragment>
      <Form onSubmit={(event) => event.preventDefault()}>
        <Form.Group>
          <Form.Field>
            <Select label="Select country">
              <option value="1">Russia</option>
              <option value="2">USA</option>
            </Select>
          </Form.Field>

          <Form.Field>
            <Input.Uncontrolled
              type="email"
              label="Email"
              errors={['Should not be empty']}
            />
          </Form.Field>

          <Form.Field withGhostLabel>
            <Button type="submit">Submit</Button>
            <FieldHint type="error">Submit failed, please try again</FieldHint>
          </Form.Field>
        </Form.Group>
      </Form>
    </React.Fragment>
  ))
  .add('complex', () => (
    <Form onSubmit={(event) => event.preventDefault()}>
      <Form.Group>
        <Form.Field>
          <Input.Uncontrolled label="Token name" />
        </Form.Field>

        <Form.Field>
          <Input.Uncontrolled
            label="Token symbol"
            errors={['Must not be empty']}
          />
        </Form.Field>
      </Form.Group>

      <Form.Group>
        <Form.Field>
          <Select label="Select country">
            <option value="1">Russia</option>
            <option value="2">USA</option>
          </Select>
        </Form.Field>

        <Form.Field>
          <Input.Uncontrolled label="City" />
        </Form.Field>
      </Form.Group>

      <Form.Field>
        <Input.Uncontrolled
          label="E-mail"
          errors={['required', 'must contain @ character']}
        />
      </Form.Field>

      <Form.Field>
        <Checkbox
          required
          label="Agree with terms and conditions"
          errors="required"
        />
      </Form.Field>

      <Form.Field>
        <Button type="submit">Submit</Button>
        <FieldHint type="error">Submit failed, please try again</FieldHint>
      </Form.Field>
    </Form>
  ));
