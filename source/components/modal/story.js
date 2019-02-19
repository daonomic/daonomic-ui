import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import { Modal } from '.';

const store = new Store({
  isOpen: false,
});

storiesOf('Modal', module).add('default', () => (
  <div style={{ padding: '2em', background: '#fff' }}>
    <button onClick={() => store.set({ isOpen: true })}>Open modal</button>

    <State store={store}>
      {(state) => (
        <Modal
          isOpen={state.isOpen}
          title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum facere quos ducimus"
          onClose={() => store.set({ isOpen: false })}
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            facere quos ducimus. Libero, quae maxime voluptatibus, quo eligendi
            sapiente harum nam aliquid adipisci dolore minima. Similique
            praesentium assumenda tempore et.
          </p>
        </Modal>
      )}
    </State>
  </div>
));
