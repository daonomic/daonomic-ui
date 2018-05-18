import React from 'react';
import { storiesOf } from '@storybook/react';
import Hr from './';

storiesOf('Hr', module)
  .add('default', () => <Hr />)
  .add('with content', () => <Hr>or</Hr>);
