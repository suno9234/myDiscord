import {ReactComponent as CallSvg} from '../../../../imgs/svgs/call.svg';
import {ReactComponent as CameraSvg} from '../../../../imgs/svgs/camera.svg';
import {ReactComponent as FixedMessageSvg} from '../../../../imgs/svgs/fixed-message.svg';
import {ReactComponent as AddFriendSvg} from '../../../../imgs/svgs/add-friend.svg';
import {ReactComponent as UserProfileSvg} from '../../../../imgs/svgs/user-profile.svg';
import {ReactComponent as MailSvg} from '../../../../imgs/svgs/mail.svg';
import {ReactComponent as QuestionSvg} from '../../../../imgs/svgs/question.svg';

import styled from 'styled-components';
import SearchBar from './Searchbar';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { hideMembers, showMembers } from '../../../../redux/reducers/channel';

const SvgWrapper = styled.div`
display : flex;
align-items : center;
justify-content : center;
flex-shrink : 0;
width : 24px;
height : 24px;
margin : 0 8px;
min-width: 0;
color : ${props=>props.isSelected ? 'white' : '#b9bbbe'};
cursor : pointer;
`
const FixedRightHeader = () => {
  return (
    <div style={{
      display : 'flex',
      flexShrink : '0',
      alignItems: 'center',
      paddingRight : '8px',
      marginLeft : 'auto',
      height: '50px',
      width: '440px',
      borderBottom: '1px solid #202225',
      zIndex:'2',
    }}>
      <SvgWrapper><CallSvg/></SvgWrapper>
      <SvgWrapper><CameraSvg/></SvgWrapper>
      <SvgWrapper><FixedMessageSvg/></SvgWrapper>
      <SvgWrapper><AddFriendSvg/></SvgWrapper>
      <SvgWrapper><UserProfileSvg/></SvgWrapper>
      <SearchBar/>
      <SvgWrapper><MailSvg/></SvgWrapper>
      <SvgWrapper><QuestionSvg/></SvgWrapper>
    </div>
  )

}

export default FixedRightHeader;