import {ReactComponent as ThreadSvg} from '../../../../imgs/svgs/threads.svg';
import {ReactComponent as AlarmOffSvg} from '../../../../imgs/svgs/alarm-off.svg';
import {ReactComponent as MembersSvg} from '../../../../imgs/svgs/members.svg';
import {ReactComponent as FixedMessageSvg} from '../../../../imgs/svgs/fixed-message.svg';
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
  const dispatch = useDispatch();
  const [isVisibleMember , setIsVisibleMember] = useState(false);
  const onClickMembers = ()=>{
    if(isVisibleMember){
      setIsVisibleMember(false);
      dispatch(hideMembers());
    }else{
      setIsVisibleMember(true);
      dispatch(showMembers());
    }
  }
  return (
    <div style={{
      display : 'flex',
      flexShrink : '0',
      alignItems: 'center',
      marginLeft : 'auto',
      height: '50px',
      width: '400px',
      borderBottom: '1px solid #202225',
      zIndex:'2',
    }}>
      <SvgWrapper><ThreadSvg/></SvgWrapper>
      <SvgWrapper><AlarmOffSvg/></SvgWrapper>
      <SvgWrapper isSelected={isVisibleMember} onClick={onClickMembers}><MembersSvg/></SvgWrapper>
      <SvgWrapper><FixedMessageSvg/></SvgWrapper>
      <SearchBar/>
      <SvgWrapper><MailSvg/></SvgWrapper>
      <SvgWrapper><QuestionSvg/></SvgWrapper>
    </div>
  )

}

export default FixedRightHeader;