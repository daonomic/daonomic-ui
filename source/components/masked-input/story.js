import React from 'react';
import PropTypes from 'prop-types';
import { State, Store } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { MaskedInput } from '.';

const Row = ({ children }) => <div style={{ padding: '1em' }}>{children}</div>;

const store = new Store({
  dateTimeValue: '',
  numberValue: '',
});

Row.propTypes = {
  children: PropTypes.node,
};

storiesOf('Masked input', module)
  .add('datetime-local', () => (
    <State store={store}>
      {(state) => (
        <MaskedInput.DateTime
          label="Start date"
          value={state.dateTimeValue}
          onChange={(date) => {
            store.set({ dateTimeValue: date });
          }}
        />
      )}
    </State>
  ))
  .add('number', () => (
    <State store={store}>
      {(state) => (
        <MaskedInput.Number
          label="Amount"
          value={state.numberValue}
          onChange={(event) => store.set({ numberValue: event.target.value })}
        />
      )}
    </State>
  ));
