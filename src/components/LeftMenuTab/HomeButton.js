import React, { useState } from 'react';
import Profile from './Profile';
import homeImg from './home.jpg';

const HomeButton = ({ btnStyle }) => {
  const [border , setBorder] = useState('50%');
  const onMouseEnter = () => {
    setBorder('20%');
  }
  const onMouseLeave = () =>{
    setBorder('50%');
  }
  const iconImg = (
    <img src={homeImg} alt='homeico' style={{
      width: '46px',
      height: '46px',
      margin: '0 0 0 0 ',
      padding: '0 0 0 0',
      transition:'border-radius 100ms',
      borderRadius: border,
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}/>
  );
  return (
    <div style={{
      marginTop: '5px',
      marginBottom: '5px'
    }}>
      <Profile btnStyle={btnStyle} iconImg={iconImg}  />
    </div>

  )
}
export default HomeButton;