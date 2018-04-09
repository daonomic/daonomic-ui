import React from 'react';
import { storiesOf } from '@storybook/react';
import Overlay from './demo/overlay';
import Panel from './';

storiesOf('Panel', module)
  .add('default', () => (
    <Overlay>
      <Panel>
        Panel content
        <Panel.Separator />
        Panel content
      </Panel>
    </Overlay>
  ))
  .add('margin between panels', () => (
    <Overlay>
      <Panel>First panel</Panel>
      <Panel>Second panel</Panel>
      <Panel>Third panel</Panel>
    </Overlay>
  ));
