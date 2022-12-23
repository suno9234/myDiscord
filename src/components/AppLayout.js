import React from 'react';
import LeftMenu from './LeftMenuTab/LeftMenu';
import RightHeader from './Header/RightHeader';
import Middle from './Middle/Middle';

const AppLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <LeftMenu/>
      <Middle/>
      <div>
        <RightHeader/>
        {children}
      </div>
      
    </div>


  )
}
export default AppLayout;