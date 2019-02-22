import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { Input } from '.';

const Row = ({ children }) => <div style={{ padding: '1em' }}>{children}</div>;

Row.propTypes = {
  children: PropTypes.node,
};

storiesOf('Input', module)
  .add('default', () =>
    ['input', 'textarea'].map((element) => (
      <Row key={element}>
        <Input.Uncontrolled element={element} label="E-mail" />
      </Row>
    )),
  )
  .add('with placeholder', () =>
    ['input', 'textarea'].map((element) => (
      <Row key={element}>
        <Input.Uncontrolled
          element={element}
          label="E-mail"
          placeholder="example@example.com"
        />
      </Row>
    )),
  )
  .add('with description', () =>
    ['input', 'textarea'].map((element) => (
      <Row key={element}>
        <Input.Uncontrolled
          element={element}
          label="E-mail"
          description="example@example.com"
        />
      </Row>
    )),
  )
  .add('with errors', () =>
    ['input', 'textarea'].map((element) => (
      <Row key={element}>
        <Input.Uncontrolled
          element={element}
          label="E-mail"
          errors={[
            'must not be empty',
            'must contain @ character',
            'must be at least 3 characters long',
          ]}
        />
      </Row>
    )),
  )
  .add('with placeholder, description and errors', () =>
    ['input', 'textarea'].map((element) => (
      <Row key={element}>
        <Input.Uncontrolled
          element={element}
          label="E-mail"
          placeholder="example@example.com"
          description="Your e-mail"
          errors={[
            'must not be empty',
            'must contain @ character',
            'must be at least 3 characters long',
          ]}
        />
      </Row>
    )),
  )
  .add('disabled', () =>
    ['input', 'textarea'].map((element) => (
      <Row key={element}>
        <Input.Uncontrolled
          disabled
          element={element}
          label="E-mail"
          value="example@example.com"
        />
      </Row>
    )),
  )
  .add('type=number', () => (
    <Row>
      <Input.Uncontrolled type="number" label="Amount" value="50" />
    </Row>
  ))
  .add('custom label', () => (
    <Row>
      <Input.Uncontrolled
        type="number"
        label={<span style={{ color: 'green' }}>Amount</span>}
        value="50"
      />
    </Row>
  ));
