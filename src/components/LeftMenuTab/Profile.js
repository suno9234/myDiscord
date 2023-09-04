import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { enterHomeSuccess, setLastClickedServerId } from '../../redux/reducers/user'
import { ReactComponent as DefaultSvg } from '../../imgs/svgs/default-profile.svg'
import { loadChannelRequest } from '../../redux/reducers/channel';


const ArrowSpan = styled.span`
position : fixed;
white-space : nowrap;
background-color : #191a1d;
color : white;
padding : 6px 8px;
border-radius : 5px;
vertical-align : middle;
text-align : center;
visibility : visible;
transform : translate-x(-50%);
z-index : 3;
`

const Profile = ({ channelInfo }) => {
  const dispatch = useDispatch();
  const { lastClickedServerId } = useSelector((state) => state.user);
  const [hover, setHover] = useState(false);
  const [border, setBorder] = useState('50%');
  const divRef = useRef();

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
      dispatch(setLastClickedServerId({ channelId: -1 }))
    } else {
      dispatch(loadChannelRequest({ channelId: channelInfo.channelId, channelName: channelInfo.channelName }))
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


  return (
    <div style={{
      cursor: 'pointer',
      wigth: '46px',
      height: '46px',
      flexGrow: '0',
      flexShrink: '0',
      borderRadius: border,
      overflow: 'hidden',
      transition: 'border-radius 0.25s',
    }} onClick={onClickServer}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={divRef}
    >
      {channelInfo.profileImage ?
        <svg width='46px' height='46px'>
          <image href={channelInfo.profileImage} width='46px' height='46px' />
        </svg>

        : <div style={{
          display: 'flex',
          backgroundColor: hover ? '#5865f2' : lastClickedServerId === -1 ? '#5865f2' : '#36393f',
          color: hover ? 'white' : lastClickedServerId === -1 ? 'white' : '#dcddde',
          width: '46px',
          height: '46px',
          alignItems: 'center',
          justifyContent: 'center',
        }} ><DefaultSvg width='30px' /></div>}
      <div style={{
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        top: '0',
        left: '-13px',
        width: '8px',
        height: '48px',
      }}>
        <div style={{
          width: hover ? '8px' : lastClickedServerId === channelInfo.channelId ? '8px' : 0,
          borderRadius: '0 4px 4px 0',
          marginLeft: '-4px',
          height: lastClickedServerId === channelInfo.channelId ? '40px' : hover ? '16px' : 0,
          backgroundColor: 'white',
          transition: 'height 0.1s ,  width 0.1s',
        }} />
      </div>
      {hover && <>
        <ArrowSpan style={{
          left: divRef.current.getBoundingClientRect().left + 70,
          top: divRef.current.getBoundingClientRect().top + 5,
        }}>
          {channelInfo.channelName}
        </ArrowSpan>
        <div style={{
          position: 'fixed',
          width: '10px',
          height: '10px',
          transform: 'rotate(45deg)',
          trnasform: 'tranlateX(-50%)',
          backgroundColor: '#191a1d',
          zIndex: 3,
          left: divRef.current.getBoundingClientRect().left + 65,
          top: divRef.current.getBoundingClientRect().top + 15,
        }} />
      </>}
    </div>

  );
}

export default Profile;