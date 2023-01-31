import React from 'react';
import Profile from './Profile';

const ServerProfile = ({ channelInfo }) => {
  return (
    <div style={{ marginBottom: '5px', marginTop: '5px' ,flexShrink:'0'}}>
      <Profile
        channelInfo={channelInfo}
        imgSrc={null}
      />
    </div>

  );
}

export default ServerProfile;