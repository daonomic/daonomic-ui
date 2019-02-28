import React from 'react';
import { storiesOf } from '@storybook/react';
import { IconArrowPopout } from './arrow-popout';
import { IconFail } from './fail';

storiesOf('Icons', module)
  .add('ArrowPopout', () => <IconArrowPopout />)
  .add('Fail', () => <IconFail />);
