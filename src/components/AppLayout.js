import React from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import LeftMenu from './LeftMenu';
import SideMenuTab from './SideMenuTab';

const AppLayout = ({ children }) => {
  return (
    <RemoveScroll style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ backgroundColor: '#202225' }}>header</div>
      <div style={{ display: 'flex', height: '100%' }}>
        <LeftMenu></LeftMenu>
        <SideMenuTab />
        {children}
      </div>
    </RemoveScroll>
  )
}
export default AppLayout;