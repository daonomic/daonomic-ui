import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Badge, { colors, sizes } from './';

storiesOf('Badge', module)
  .add(
    'sizes and colors',
    withInfo()(() => (
      <div style={{ padding: '1em', background: '#fff' }}>
        {sizes.map((size) => (
          <div key={size} style={{ paddingBottom: '1em' }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{ display: 'inline-block', margin: '0 .25em' }}
              >
                <Badge size={size} color={color}>
                  {size} {color}
                </Badge>
              </div>
            ))}
          </div>
        ))}
      </div>
    )),
  )
  .add('uppercase', () => (
    <div style={{ padding: '1em', background: '#fff' }}>
      <Badge isUppercase>Badge</Badge>
    </div>
  ));
