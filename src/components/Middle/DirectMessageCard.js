import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as DefaultProfileSvg } from '../../imgs/svgs/default-profile.svg';
import { ReactComponent as CancleSvg } from '../../imgs/svgs/cancle.svg';
import { loadDirectMessageRequest, removeDirectMessageCardRequest } from '../../redux/reducers/directMessage';
import { changeMiddleMenuState } from '../../redux/reducers/user';


const DivWrapper = styled.div`
  width : 100%;
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
`

const DeleteSvgWrapper = styled.div`
display:flex;
alignitems:center;
justify-content:center;
margin-right:4px;
color :#96989d;
cursor : pointer;
&:hover{
  color : white;
}
`
const DirectMessageCard = ({ cardType, userInfo, SvgIcon, HoverSvgIcon, PngIcon, name }) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const { lastClickedMiddleMenu } = useSelector((state) => state.user);
  const { directMessages } = useSelector((state) => state.directMessage);
  const profileBGColor = ['#7289da', '#747f8d', '#43b581', '#faa61a', '#f04747'][userInfo.tag % 5];
  const onClickCard = () => {
    const lastId = directMessages[directMessages.length - 1]?.id;
    dispatch(changeMiddleMenuState({ id: userInfo.id }))
    if (![-1, -2].includes(userInfo.id) && lastClickedMiddleMenu !== userInfo.id) {
      dispatch(loadDirectMessageRequest({
        receiverId: userInfo.id,
        receiverNickname: userInfo.nickname,
        receiverTag: userInfo.tag,
        lastId,
      }))
    }
  }
  const onClickRemoveCard = (e) => {
    e.stopPropagation();
    if (lastClickedMiddleMenu === userInfo.id) {
      dispatch(changeMiddleMenuState({ id: -1 }))
    }
    dispatch(removeDirectMessageCardRequest({ userId: userInfo.id }))
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
        {cardType === 'svg' ? <IconWrapper color='inherit' ><SvgIcon width='24px' /></IconWrapper>
          : <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            marginRight: '12px',
            flexShrink: '0',
            position: 'relative',
            width: '32px',
            height: '32px',
            backgroundColor: profileBGColor
          }} >
            {userInfo.ProfileImage || <DefaultProfileSvg width='20px' fill='white' />}
            {/* {<img src={`http://localhost:3065/${userInfo.Image.src}`} alt='profileImage'/>} */}
          </div>

        }

        <div style={{
          height: '20px',
          marginRight: 'auto',
          overflow: 'hidden',
        }}>
          {name ? name : userInfo.nickname}
        </div>
        {hover ? [-1, -2].includes(userInfo.id) ||
          <DeleteSvgWrapper onClick={onClickRemoveCard}>
            <CancleSvg width='16px' />
          </DeleteSvgWrapper> : null
        }

      </InnerWrapper>
    </DivWrapper>
  )
}
export default DirectMessageCard;