import React from 'react';
import Profile from './Profile';

const ServerProfile = ({ name, imgSrc }) => {
  return (
    <div style={{ marginBottom: '5px', marginTop: '5px' ,flexShrink:'0'}}>
      <Profile
        name={name}
        imgSrc={imgSrc}
      />
    </div>

  );
}

export default ServerProfile;