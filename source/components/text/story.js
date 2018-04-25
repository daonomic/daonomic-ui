import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Text, { alignments, sizes, designs } from './';

const textSample =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem minus cupiditate nostrum vero aliquid tenetur, ipsam nulla nisi pariatur dolorem excepturi, similique quibusdam possimus culpa architecto suscipit eum aspernatur ipsum!';

storiesOf('Text', module)
  .add('default', withInfo()(() => <Text>{textSample}</Text>))
  .add('muted', () => <Text isMuted>{textSample}</Text>)
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
  .add('designs', () => (
    <React.Fragment>
      {designs.map((design) => (
        <Text key={design} element="div" design={design}>
          design {design}
        </Text>
      ))}
    </React.Fragment>
  ))
  .add('link', () => (
    <React.Fragment>
      <Text
        element="a"
        design="link"
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link using Text
      </Text>
      <br />
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        Just a regular html link that uses global styles
      </a>
    </React.Fragment>
  ));
