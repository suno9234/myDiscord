import React from 'react';
import { useSelector } from 'react-redux';
import IconButton from './IconButton';

import muteOff from '../../imgs/mute-off.png';
import deafenOff from '../../imgs/deafen-off.png';
import setting from '../../imgs/setting.png';

const MiniProfile = () => {
  const { profileImage, nickName, userCode } = useSelector((state) => state.user);
  const myProfile = <img src={profileImage} alt='hsico' style={{
    width: '34px',
    height: '34px',
    transition: 'border-radius 100ms',
    borderRadius: '50%',
    padding: '0 2px 0',
  }} />
  return (
    <div style={{
      display: 'flex',
      height: '50px',
      flex: '0 0',
      alignItems: 'center',
      marginRight: '4px',
    }}>
      {myProfile}
      <div style={{
        marginLeft: '4px',
        flex: '1',
      }}>
        <div style={{
          color: 'white',
          fontSize: '14px',
          fontWeight: 'bold',
          marginBottom: '0',
        }}>
          {nickName}
        </div>
        <div style={{
          color: 'gray',
          fontSize: '12px',
        }}>
          {'#'}{userCode}
        </div>
      </div>
      <IconButton img={muteOff} />
      <IconButton img={deafenOff} />
      <IconButton img={setting} />

    </div>
  )
}

export default MiniProfile;