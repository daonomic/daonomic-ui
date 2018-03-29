import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from './';

storiesOf('Badge', module)
  .add('default', () => <Badge>Badge</Badge>)
  .add('warning', () => <Badge color="warning">Badge</Badge>)
  .add('danger', () => <Badge color="danger">Badge</Badge>)
  .add('success', () => <Badge color="success">Badge</Badge>);
