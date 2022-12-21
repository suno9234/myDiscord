import React from 'react';
import Profile from './Profile';

const HomeButton = ({ btnStyle }) => {
  return (
    <div style={{
      marginTop: '5px',
      marginBottom: '5px'
    }}>
      <Profile innerText='H' btnStyle={btnStyle} />
    </div>

  )
}
export default HomeButton;