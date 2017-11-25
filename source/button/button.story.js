import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './';

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('click')}>
      Button
    </Button>
  ))
  .add('small size', () => (
    <Button size="small" onClick={action('click')}>
      Button
    </Button>
  ))
  .add('disabled', () => (
    <Button disabled>
      Disabled button
    </Button>
  ))
  .add('button as link', () => (
    <Button
      tagName="a"
      href="https://google.com"
      target="_blank"
      rel="noopener noreferrer"
      onClick={action('click')}
    >
      Open Google
    </Button>
  ))
  .add('button as span with proper role and tabindex', () => (
    <Button tagName="span" onClick={action('click')}>
      Button as span
    </Button>
  ));
