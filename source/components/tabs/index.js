import React from 'react';
import {
  Tab as VendorTab,
  Tabs as VendorTabs,
  TabList as VendorTabList,
  TabPanel as VendorTabPanel,
} from 'react-tabs';
import cn from 'classnames';
import style from './style.css';

function TabList({ className, ...restProps }) {
  return (
    <div className={cn(style['list-wrapper'], className)}>
      <VendorTabList {...restProps} className={style.list} />
    </div>
  );
}

TabList.tabsRole = 'TabList';

function Tab({ className, selectedClassName, ...restProps }) {
  return (
    <VendorTab
      {...restProps}
      className={cn(style.tab, className)}
      selectedClassName={cn(style.tab_selected, selectedClassName)}
    />
  );
}

Tab.tabsRole = 'Tab';

function TabPanel({ className, selectedClassName, ...restProps }) {
  return (
    <VendorTabPanel
      {...restProps}
      className={cn(style.panel, className)}
      selectedClassName={cn(style.panel_selected, selectedClassName)}
    />
  );
}

TabPanel.tabsRole = 'TabPanel';

export function Tabs({ className, ...restProps }) {
  return <VendorTabs {...restProps} className={cn(style.root, className)} />;
}

Tabs.tabsRole = 'Tabs';
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;
