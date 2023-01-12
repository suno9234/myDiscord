import React from 'react';
import FixedRightHeader from './FixedRightHeader';
import FlexHeader from './FlexHeader';

const FriendHeader = () => {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      minWidth:'0',
      flexShrink:'0',
      height: '50px',
      backgroundColor: '#36393f',
      borderBottom: '1px solid #202225',
      alignItems: 'center',
    }}>
      <FlexHeader />
      <FixedRightHeader />
    </div>
  )
}
export default FriendHeader;