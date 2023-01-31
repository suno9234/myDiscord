import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { enterHomeSuccess } from '../../redux/reducers/user'
import { loadChannelRequest } from '../../redux/reducers/channel';

const Profile = ({ channelInfo, imgSrc }) => {
  const dispatch = useDispatch();
  const { lastClickedServerId } = useSelector((state) => state.user);
  const [hover, setHover] = useState(false);
  const [border, setBorder] = useState('50%');

  useEffect(() => {
    if (lastClickedServerId === channelInfo.channelId) {
      setBorder('30%');
    } else {
      setBorder('50%');
    }
  }, [lastClickedServerId, channelInfo.channelId])

  const onClickServer = () => {
    if (channelInfo.channelId === -1) {
      dispatch(enterHomeSuccess());
    } else {
      dispatch(loadChannelRequest({ channelId: 1 }))
    }
  }
  const onMouseEnter = () => {
    setHover(true);
    if (lastClickedServerId === channelInfo.channelId) {
      return;
    }
    setBorder('30%');
  }
  const onMouseLeave = () => {
    setHover(false);
    if (lastClickedServerId === channelInfo.channelId) {
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