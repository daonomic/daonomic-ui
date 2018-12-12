import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from '.';
import IconArrowPopout from '../icons/arrow-popout';

storiesOf('Tooltip', module)
  .add('default', () => (
    <div style={{ padding: '2em' }}>
      <a href="">
        <Tooltip content="View on Etherscan">
          <IconArrowPopout />
        </Tooltip>
      </a>
    </div>
  ))
  .add('allowTipContentHover', () => (
    <div style={{ padding: '2em' }}>
      <a href="">
        <Tooltip allowTipContentHover content="View on Etherscan">
          <IconArrowPopout />
        </Tooltip>
      </a>
    </div>
  ))
  .add('direction', () => (
    <div style={{ padding: '2em' }}>
      {['up', 'down', 'left', 'right'].map((direction) => (
        <Tooltip key={direction} direction={direction} content="Content">
          {direction}
        </Tooltip>
      ))}
    </div>
  ));
