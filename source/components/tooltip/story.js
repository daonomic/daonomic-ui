import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tooltip } from '.';
import { IconArrowPopout } from '../icons/arrow-popout';

storiesOf('Tooltip', module).add('default', () => (
  <div style={{ padding: '8em' }}>
    <Tooltip placement="top" trigger={['hover']} overlay="View on Etherscan">
      <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io">
        <IconArrowPopout />
      </a>
    </Tooltip>
  </div>
));
