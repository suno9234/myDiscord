import React from 'react';
import Profile from './Profile';

const ServerProfile = ({ btnStyle }) => {
  return (
    <div style={{
      marginTop: '5px',
      marginBottom: '5px',
    }}>
      <Profile
        btnStyle={btnStyle}
      />
    </div>
  );
}

export default ServerProfile;