import React from 'react';
import Profile from './Profile';

const ServerProfile = ({ name, imgSrc }) => {
  return (
    <div style={{ marginBottom: '3px', marginTop: '3px' }}>
      <Profile
        name={name}
        imgSrc={imgSrc}
      />
    </div>

  );
}

export default ServerProfile;