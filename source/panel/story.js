import React from 'react';
import { storiesOf } from '@storybook/react';
import Panel from './';

storiesOf('Panel', module)
  .add('default', () => (
    <Panel>
      Panel content
      <Panel.Separator />
      Panel content
    </Panel>
  ))
  .add('large padding', () => (
    <Panel paddingSize="large">
      Panel content
      <Panel.Separator />
      Panel content
    </Panel>
  ))
  .add('margin between panels', () => (
    <div>
      <Panel>First panel</Panel>

      <Panel>Second panel</Panel>
    </div>
  ));
