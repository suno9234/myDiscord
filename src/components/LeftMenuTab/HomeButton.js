import React from 'react';
import Profile from './Profile';
import home from '../../imgs/home.jpg';


const HomeButton = ({ channelInfo }) => {

  return (
    <div style={{ marginTop: '12px', marginBottom: '2px', flexShrink: '0' }}>
      <Profile channelInfo={channelInfo} imgSrc={home} />
    </div>

  )
}
export default HomeButton;