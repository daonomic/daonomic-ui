import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import { Modal } from '.';

const store = new Store({
  isOpen: false,
});

storiesOf('Modal', module).add('default', () => (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, ipsa
      autem facilis sequi dolor quas saepe soluta atque in cum, temporibus
      officia, dolorem quibusdam aperiam qui magni vero! Ipsam, illo?
    </p>

    <button onClick={() => store.set({ isOpen: true })}>Open modal</button>

    <State store={store}>
      {(state) => (
        <Modal
          isOpen={state.isOpen}
          title="Modal"
          onClose={() => store.set({ isOpen: false })}
        >
          <p>Modal content</p>
        </Modal>
      )}
    </State>
  </div>
));
