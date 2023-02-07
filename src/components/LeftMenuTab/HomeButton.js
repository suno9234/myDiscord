import React from 'react';
import Profile from './Profile';

const HomeButton = ({ channelInfo }) => {

  return (
    <div style={{ marginTop: '12px', marginBottom: '2px', flexShrink: '0', position: 'relative' }}>
      <Profile channelInfo={channelInfo} />
    </div>

  )
}
export default HomeButton;