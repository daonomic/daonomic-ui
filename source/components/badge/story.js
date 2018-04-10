import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Badge, { colors, sizes } from './';

storiesOf('Badge', module)
  .add(
    'sizes and colors',
    withInfo()(() => (
      <React.Fragment>
        {sizes.map((size) => (
          <div key={size} style={{ paddingBottom: '1em' }}>
            {colors.map((color) => (
              <Badge key={color} size={size} color={color}>
                {size} {color}
              </Badge>
            ))}
          </div>
        ))}
      </React.Fragment>
    )),
  )
  .add('uppercase', () => <Badge isUppercase>Badge</Badge>);
