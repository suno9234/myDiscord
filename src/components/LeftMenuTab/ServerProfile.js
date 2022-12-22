import React from 'react';
import Profile from './Profile';

const ServerProfile = ({ btnStyle }) => {
  const iconImg = null;
  return (
    <div style={{
      marginTop: '5px',
      marginBottom: '5px',
    }}>
      <Profile 
        btnStyle={btnStyle}
        onClick
        iconImg={iconImg}
        
      />
    </div>
  );
}

export default ServerProfile;