import React from 'react';
import Profile from './Profile';

const ServerProfile = ({ channelInfo }) => {
  return (
    <div style={{
      position:'relative',
      width : '46px',
      height:'46px', 
      marginBottom: '5px', marginTop: '5px', flexShrink: '0' }}>
      <Profile channelInfo={channelInfo}/>
    </div>

  );
}

export default ServerProfile;