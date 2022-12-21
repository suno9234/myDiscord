import React, { useState } from 'react';
import MinniProfile from './MinniProfile';
import PlayingGame from './PlayingGame';
import CallingMenu from './CallingMenu';
const BottomProfile = () => {
  const [isCalling] = useState(false);
  return (
    <div style={{
      marginTop: 'auto',
      height: '100px',
      backgroundColor: '#202225',
    }}>
      <PlayingGame />
      {isCalling ? <CallingMenu/> : null}
      <MinniProfile />
    </div>
  )
}

export default BottomProfile;