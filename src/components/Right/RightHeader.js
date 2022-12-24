import React from 'react';
import FixedRightHeader from './FixedRightHeader';
import FlexHeader from './FlexHeader';

const RightHeader = () => {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      minWidth:'0',
      flexShrink:'1',
      padding:'0',
      margin:'0',
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
export default RightHeader;