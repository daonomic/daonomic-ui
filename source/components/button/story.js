import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Button, { sizes, designs } from './';
import { CustomComponent } from './demo';

storiesOf('Button', module)
  .add(
    'sizes, designs and disabled state',
    withInfo()(() => (
      <React.Fragment>
        {sizes.map((size) => (
          <div key={size} style={{ paddingBottom: '1em' }}>
            {designs.map((design) => (
              <div
                key={size}
                style={{
                  padding: '2em',
                  background: design.includes('inverse')
                    ? '#000'
                    : 'transparent',
                }}
              >
                <Button design={design} size={size} onClick={action('click')}>
                  {design} {size}
                </Button>{' '}
                <Button
                  disabled
                  design={design}
                  size={size}
                  onClick={action('click')}
                >
                  {design} {size} disabled
                </Button>
                <div style={{ marginTop: '1em' }} />
                <Button
                  fullWidth
                  design={design}
                  size={size}
                  onClick={action('click')}
                >
                  {design} {size} disabled
                </Button>
                <div style={{ marginTop: '1em' }} />
                <Button
                  disabled
                  fullWidth
                  design={design}
                  size={size}
                  onClick={action('click')}
                >
                  {design} {size} disabled
                </Button>
              </div>
            ))}
          </div>
        ))}
      </React.Fragment>
    )),
  )
  .add('button as link', () => (
    <React.Fragment>
      <Button
        element="a"
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={action('click')}
      >
        Button
      </Button>

      <Button
        fullWidth
        element="a"
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={action('click')}
      >
        Button
      </Button>
    </React.Fragment>
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
