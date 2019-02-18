import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tabs } from '.';

storiesOf('Tabs', module).add('default', () => (
  <Tabs>
    <Tabs.List>
      <Tabs.Tab>Dashboard</Tabs.Tab>
      <Tabs.Tab>Pools</Tabs.Tab>
      <Tabs.Tab>Referral</Tabs.Tab>
      <Tabs.Tab>Settings</Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel>Dashboard content</Tabs.Panel>
    <Tabs.Panel>Pools content</Tabs.Panel>
    <Tabs.Panel>Referral content</Tabs.Panel>
    <Tabs.Panel>Settings content</Tabs.Panel>
  </Tabs>
));
