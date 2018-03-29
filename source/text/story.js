import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './';

storiesOf('Text', module)
  .add('default', () => (
    <Text>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet provident
      iste cum vel necessitatibus. Inventore expedita corporis odit dicta illum
      maiores eligendi veritatis, fugiat modi. Animi repudiandae perferendis
      impedit saepe!
    </Text>
  ))
  .add('muted', () => (
    <Text isMuted>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sed
      deleniti in rerum sequi earum corporis voluptates iste perspiciatis, dicta
      debitis minima cupiditate asperiores voluptate? Tempore dignissimos
      adipisci blanditiis quo!
    </Text>
  ))
  .add('align left', () => (
    <Text element="div" align="left">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sed
      deleniti in rerum sequi earum corporis voluptates iste perspiciatis, dicta
      debitis minima cupiditate asperiores voluptate? Tempore dignissimos
      adipisci blanditiis quo!
    </Text>
  ))
  .add('align center', () => (
    <Text element="div" align="center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sed
      deleniti in rerum sequi earum corporis voluptates iste perspiciatis, dicta
      debitis minima cupiditate asperiores voluptate? Tempore dignissimos
      adipisci blanditiis quo!
    </Text>
  ))
  .add('align right', () => (
    <Text element="div" align="right">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sed
      deleniti in rerum sequi earum corporis voluptates iste perspiciatis, dicta
      debitis minima cupiditate asperiores voluptate? Tempore dignissimos
      adipisci blanditiis quo!
    </Text>
  ));