import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import Input from './';

const Row = ({ children }) => (
  <div style={{ paddingBottom: '1em' }}>{children}</div>
);

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
  .add('with single error', () =>
    ['input', 'textarea'].map((element) => (
      <Row key={element}>
        <Input.Uncontrolled
          element={element}
          label="E-mail"
          errors="Incorrect e-mail"
        />
      </Row>
    )),
  )
  .add('with multiple errors', () =>
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
  .add('disabled', () =>
    ['input', 'textarea'].map((element) => (
      <Row key={element}>
        <Input
          disabled
          element={element}
          label="E-mail"
          value="example@example.com"
        />
      </Row>
    )),
  );
