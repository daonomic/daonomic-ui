import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Text, { alignments, sizes, colors, weights } from './';

const textSample =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem minus cupiditate nostrum vero aliquid tenetur, ipsam nulla nisi pariatur dolorem excepturi, similique quibusdam possimus culpa architecto suscipit eum aspernatur ipsum!';

storiesOf('Text', module)
  .add('default', withInfo()(() => <Text>{textSample}</Text>))
  .add('caps', () => <Text isCaps>{textSample}</Text>)
  .add('alignment', () => (
    <React.Fragment>
      {alignments.map((align) => (
        <Text key={align} element="div" align={align}>
          align {align}
        </Text>
      ))}
    </React.Fragment>
  ))
  .add('sizes', () => (
    <React.Fragment>
      {sizes.map((size) => (
        <Text key={size} element="div" size={size}>
          size {size}
        </Text>
      ))}
    </React.Fragment>
  ))
  .add('colors', () => (
    <React.Fragment>
      {colors.map((color) => (
        <Text key={color} element="div" color={color}>
          color {color}
        </Text>
      ))}
    </React.Fragment>
  ))
  .add('weights', () => (
    <React.Fragment>
      {weights.map((weight) => (
        <Text key={weight} element="div" weight={weight}>
          weight {weight}
        </Text>
      ))}
    </React.Fragment>
  ));
