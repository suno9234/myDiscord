import React from 'react';
import Profile from './Profile';
import home from '../../imgs/home.jpg';


const HomeButton = () => {

  return (
    <div style={{ marginTop: '12px', marginBottom: '2px' }}>
      <Profile name='home' imgSrc={home} />
    </div>

  )
}
export default HomeButton;