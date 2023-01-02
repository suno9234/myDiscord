import React from 'react';
import LeftMenu from './LeftMenuTab/LeftMenu';
import Middle from './Middle/Middle';
import Right from './Right/Right';

const Channel = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100%' ,width:'100%',borderRadius:'0px'}}>
      <LeftMenu />
      <Middle />
      <Right/>
    </div>
  )
}
export default Channel;