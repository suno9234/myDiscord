import React, { useState } from 'react';
import MiniProfile from './MiniProfile';
import PlayingGame from './PlayingGame';
import CallingMenu from '../CallingMenu';

const Footer = () => {
  const [isCalling] = useState(false);
  const [isPlaying] = useState(false);

  return (
    <div className={'Footer'} style={{
      marginTop: '0',
      height: '50px',
      flexShrink: '0',
      backgroundColor: '#202225',
    }}>
      {isPlaying ? <PlayingGame /> : null}
      {isCalling ? <CallingMenu /> : null}
      <MiniProfile />
    </div>
  )
}

export default Footer;