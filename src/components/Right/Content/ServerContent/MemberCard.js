import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';


const DivWrapper = styled.div`
  display: flex;
  margin-left : 8px;
  border-radius : 4px;
  padding : 1px 0;
  background-color: transparent;
  align-items : center;
  cursor : pointer;
  color : #96989d;
  
`

const InnerWrapper = styled.div`
display : flex;
width: 100% ;
margin-right : 8px;
border-radius : 4px;
padding : 5px;
align-items : center;
`;

const IconWrapper = styled.div`
display : flex;
flex-grow : 0;
flex-shrink : 0;
align-items : center;
justify-content : center;
margin : 0 12px 0 0 ;
width : 32px;
height : 32px;
overflow : hidden;
border-radius : 50%;
`
const MemberCard = ({ userInfo }) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const { lastClickedMiddleMenu } = useSelector((state) => state.user);
  const onClickCard = () => {
    dispatch();
  }
  const onMouseEnter = () => {
    setHover(true);
  }
  const onMouseLeave = () => {
    setHover(false);
  }
  return (
    <DivWrapper
      onClick={onClickCard}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <InnerWrapper style={{
        backgroundColor: lastClickedMiddleMenu === userInfo.id ? '#40444b' :
          hover ? '#40444b' : 'transparent',
        color: lastClickedMiddleMenu === userInfo.id ? 'white' : hover ? 'white' : '#96989d',
        marginLeft: '-4px',
        paddingLeft: '9px',
      }}>
        <IconWrapper>
          {userInfo.profileImage ? <svg width='32px' height='32px'><image width='32px' height='32px' href={userInfo.profileImage}/></svg> 
          : null}

        </IconWrapper>
        <div style={{
          marginRight: 'auto',
        }}>
          {userInfo.nickname}
        </div>
      </InnerWrapper>
    </DivWrapper>
  )
}
export default MemberCard;