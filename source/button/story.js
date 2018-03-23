import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './';
import { CustomComponent } from './demo';

storiesOf('Button', module)
  .add('default', () => <Button onClick={action('click')}>Button</Button>)
  .add('disabled', () => <Button disabled>Button</Button>)
  .add('small size', () => (
    <Button size="small" onClick={action('click')}>
      Button
    </Button>
  ))
  .add('button as link', () => (
    <Button
      element="a"
      href="https://google.com"
      target="_blank"
      rel="noopener noreferrer"
      onClick={action('click')}
    >
      Button
    </Button>
  ))
  .add('button as span with proper tabindex', () => (
    <Button element="span" onClick={action('click')}>
      Button
    </Button>
  ))
  .add('button with custom element', () => (
    <Button
      element={CustomComponent}
      onClick={action('click button with custom element')}
    >
      Button
    </Button>
  ))
  .add('disabled button with custom element', () => (
    <Button
      disabled
      element={CustomComponent}
      onClick={action('click button with custom element')}
    >
      Button
    </Button>
  ));
