import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { enterServerRequest } from '../../redux/reducers/user'
import { loadChannelRequest } from '../../redux/reducers/channel';

const Profile = ({ name, innerText, imgSrc, id }) => {
  const dispatch = useDispatch();
  const { lastClickedServer } = useSelector((state) => state.user);
  const [hover, setHover] = useState(false);
  const [border, setBorder] = useState('50%');

  useEffect(() => {
    if (lastClickedServer === name) {
      setBorder('30%');
    } else {
      setBorder('50%');
    }
  }, [lastClickedServer, name])

  const onClickServer = () => {
    dispatch(loadChannelRequest({ channelId: 1 }))
  }
  const onMouseEnter = () => {
    setHover(true);
    if (lastClickedServer === name) {
      return;
    }
    setBorder('30%');
  }
  const onMouseLeave = () => {
    setHover(false);
    if (lastClickedServer === name) {
      return;
    }
    setBorder('50%');
  }

  const iconImg = (
    <img src={imgSrc} alt='hsico' style={{
      width: '46px',
      height: '46px',
      transition: 'border-radius 100ms',
      borderRadius: border,
    }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClickServer} />
  );

  return (
    <div style={{
      cursor: 'pointer',
      wigth: '46px',
      height: '46px',
      flexShrink: '0',
    }}>
      {imgSrc ? iconImg : <div style={{ backgroundColor: 'red', width: '46px', height: '46px', borderRadius: '50%' }} onClick={onClickServer} />}
    </div>

  );
}

export default Profile;