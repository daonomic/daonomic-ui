import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from '.';

storiesOf('Tooltip', module).add('default', () => (
  <div style={{ padding: '2em' }}>
    <Tooltip content="See documentation">
      <a href="https://github.com/bsidelinger912/react-tooltip-lite">
        React Tooltip Lite
      </a>
    </Tooltip>
  </div>
));
