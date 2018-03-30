import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import BaseInput from './';

const Row = ({ children }) => (
  <div style={{ paddingBottom: '1em' }}>{children}</div>
);

Row.propTypes = {
  children: PropTypes.node,
};

storiesOf('Base input', module)
  .add('input', () => (
    <React.Fragment>
      <Row>
        <BaseInput />
      </Row>

      <Row>
        <BaseInput invalid />
      </Row>
    </React.Fragment>
  ))
  .add('textarea', () => (
    <React.Fragment>
      <Row>
        <BaseInput element="textarea" />
      </Row>

      <Row>
        <BaseInput invalid element="textarea" />
      </Row>
    </React.Fragment>
  ));
