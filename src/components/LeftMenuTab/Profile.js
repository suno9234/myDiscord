import React, { useState } from 'react';

const Profile = ({ innerText, imgSrc ,onClickMethod}) => {

  const [border, setBorder] = useState('50%');
  const onMouseEnter = () => {
    setBorder('30%');
  }
  const onMouseLeave = () => {
    setBorder('50%');
  }

  const iconImg = (
    <img src={imgSrc} alt='hsico' style={{
      width: '46px',
      height: '46px',
      transition: 'border-radius 100ms',
      borderRadius: border,
    }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave} 
      onClick={onClickMethod}/>
  );

  return (
    <div>
      {iconImg ? iconImg : innerText}
    </div>

  );
}

export default Profile;