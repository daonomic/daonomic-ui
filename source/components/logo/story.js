import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from './';

storiesOf('Logo', module)
  .add('standard', () => <Logo />)
  .add('white', () => (
    <div style={{ height: '100vh', background: '#000' }}>
      <Logo design="white" />
    </div>
  ))
  .add('gradient', () => <Logo design="gradient" />)
  .add('compact', () => <Logo design="compact" />)
  .add('compactWhite', () => (
    <div style={{ height: '100vh', background: '#000' }}>
      <Logo design="compactWhite" />
    </div>
  ));
