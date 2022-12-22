import React, { useState } from 'react';
import MiniProfile from './MiniProfile';
import PlayingGame from './PlayingGame';
import CallingMenu from '../CallingMenu';
const BottomProfile = () => {
  const [isCalling] = useState(false);
  const [isPlaying] = useState(false);
  return (
    <div style={{
      marginTop: 'auto',
      height: '100px',
      backgroundColor: '#202225',
      flex: '0 0 auto',
    }}>
      {isPlaying ? <PlayingGame /> : null}
      {isCalling ? <CallingMenu /> : null}
      <MiniProfile />
    </div>
  )
}

export default BottomProfile;