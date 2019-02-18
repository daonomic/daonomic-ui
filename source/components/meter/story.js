import React from 'react';
import { storiesOf } from '@storybook/react';
import { Meter } from '.';

storiesOf('Meter', module)
  .add('0%', () => <Meter value={0} />)
  .add('62%', () => <Meter value={0.62} />)
  .add('100%', () => <Meter value={1} />);
