import React from 'react';
import { useSelector } from 'react-redux';
import IconButton from './IconButton';
import styled from 'styled-components';

import {ReactComponent as SettingsSvg} from '../../imgs/svgs/settings.svg';
import {ReactComponent as MicSvg} from '../../imgs/svgs/mic.svg';
import {ReactComponent as SoundsSvg} from '../../imgs/svgs/sounds.svg';
import { ReactComponent as DefaultProfileSvg } from '../../imgs/svgs/default-profile.svg';

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
  const { me } = useSelector((state) => state.user);
  const profileBGColor = me.tag % 5;
  return (
    <div style={{
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
          backgroundColor:
            profileBGColor === 0 ? '#7289da' :
              profileBGColor === 1 ? '#747f8d' :
                profileBGColor === 2 ? '#43b581' :
                  profileBGColor === 1 ? '#faa61a' : '#f04747',
        }} >
          {me.ProfileImage || <DefaultProfileSvg width='20px' fill='white' />}
          {/* {<img src={`http://localhost:3065/${userInfo.Image.src}`} alt='profileImage'/>} */}
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
      <IconButton SvgIcon={MicSvg} />
      <IconButton SvgIcon={SoundsSvg} />
      <IconButton SvgIcon={SettingsSvg} />

    </div>
  )
}

export default MiniProfile;