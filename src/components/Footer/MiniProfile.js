import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSound from 'use-sound';
import IconButton from './IconButton';
import styled from 'styled-components';

import { ReactComponent as SettingsSvg } from '../../imgs/svgs/settings.svg';

import { ReactComponent as MicSvg } from '../../imgs/svgs/mic.svg';
import { ReactComponent as MicOffSvg } from '../../imgs/svgs/mic-off.svg';

import { ReactComponent as HeadsetSvg } from '../../imgs/svgs/headset.svg';
import { ReactComponent as HeadsetOffSvg } from '../../imgs/svgs/headset-off.svg';

import { ReactComponent as OnlineSvg } from '../../imgs/svgs/online.svg';
import { ReactComponent as OfflineSvg } from '../../imgs/svgs/offline.svg';

import { ReactComponent as DefaultProfileSvg } from '../../imgs/svgs/default-profile.svg';
import { toggleHeadset, toggleMic } from '../../redux/reducers/user';

import micOffSfx from '../../sounds/mic-off.mp3'
import micOnSfx from '../../sounds/mic-on.mp3'
import headsetOffSfx from '../../sounds/headset-off.mp3'
import headsetOnSfx from '../../sounds/headset-on.mp3'

const StyledProfile = styled.div`
display : flex;
align-items:center;
justify-content:center;
cursor: pointer;
flex-grow : 1;
&:hover{
  margin-left : -2px;
  margin-right : -2px;
  padding-left : 2px;
  padding-right : 2px;
  border-radius : 4px;
  background-color : #40444b;
}
`

const MiniProfile = () => {
  const { me, isMicOff, isHeadsetOff } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const profileBGColor = ['#7289da', '#747f8d', '#43b581', '#faa61a', '#f04747',][me.tag % 5];
  const [playMicOff] = useSound(micOffSfx);
  const [playMicOn] = useSound(micOnSfx);
  const [playHeadsetOff] = useSound(headsetOffSfx);
  const [playHeadsetOn] = useSound(headsetOnSfx);
  const onClickMic = () => {
    if (isMicOff) {
      playMicOn();
      dispatch(toggleMic());
    } else {
      playMicOff();
      dispatch(toggleMic());
    }
  }
  const onClickHeadset = () => {
    if (isHeadsetOff) {
      playHeadsetOn();
      dispatch(toggleHeadset());
    } else {
      playHeadsetOff();
      dispatch(toggleHeadset());
    }
  }
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      height: '50px',
      flex: '1 0',
      alignItems: 'center',
      marginRight: '4px',
      padding: '0px 8px',
    }}>
      <StyledProfile>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          flexShrink: '0',
          position: 'relative',
          width: '32px',
          height: '32px',
          backgroundColor: profileBGColor,
          color : 'white',
        }} >
          {me.ProfileImage || <DefaultProfileSvg width='20px' fill='white' />}
          {/* {<img src={`http://localhost:3065/${userInfo.Image.src}`} alt='profileImage'/>} */}
        </div>
        <div style={{
          position: 'absolute',
          left: '28px',
          top: '28px',
          width: '15px',
          height: '15px',
          backgroundColor: 'transparent',
          zIndex: '10',
        }}>
          {me.state === 'online' ? <OnlineSvg /> : <OfflineSvg />}
        </div>
        <div style={{
          marginright: '4px',
          padding: '4px 0px 4px 8px',
          flex: '1',
        }}>
          <div style={{
            color: 'white',
            fontSize: '14px',
            lineHeight: '18px',
            fontWeight: '600',
            marginBottom: '0',
          }}>
            {me.nickname}
          </div>
          <div style={{
            color: 'gray',
            fontSize: '12px',
            lineHeight: '13px',
            fontWeight: '400',
          }}>
            {'#'}{me.tag}
          </div>
        </div>
      </StyledProfile>
      {isMicOff ? <IconButton SvgIcon={MicOffSvg} onClick={onClickMic} description='음소거 해제'/> : <IconButton SvgIcon={MicSvg} onClick={onClickMic} description='음소거'/>}
      {isHeadsetOff ? <IconButton SvgIcon={HeadsetOffSvg} onClick={onClickHeadset} description='헤드셋 음소거 해제하기'/> : <IconButton SvgIcon={HeadsetSvg} onClick={onClickHeadset} description='헤드셋 음소거'/>}
      <IconButton SvgIcon={SettingsSvg} />

    </div>
  )
}

export default MiniProfile;