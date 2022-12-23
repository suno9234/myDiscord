import React from 'react';
import FixedRightHeader from './FixedRightHeader';
import FlexRightHeader from './FlexRightHeader';

const RightHeader = ()=>{
  return(
    <div style={{
      display : 'flex',
      height:'50px',
      backgroundColor:'red',
      justifyContent:'center',
      alignItems:'center',
      borderBottom: '1px solid #202225',
    }}>
      <FlexRightHeader/>
      <FixedRightHeader/>
    </div>
  )
}
export default RightHeader;