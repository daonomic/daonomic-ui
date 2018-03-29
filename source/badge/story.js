import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from './';

storiesOf('Badge', module)
  .add('default', () => <Badge>Badge</Badge>)
  .add('uppercase', () => <Badge isUppercase>Badge</Badge>)
  .add('colors', () => (
    <React.Fragment>
      <Badge color="primary">Primary</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="success">Success</Badge>
    </React.Fragment>
  ))
  .add('sizes', () => (
    <React.Fragment>
      <Badge size="s">Small</Badge>
      <Badge size="m">Medium</Badge>
    </React.Fragment>
  ));
