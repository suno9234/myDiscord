import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as DefaultProfileSvg } from '../../../../../imgs/svgs/default-profile.svg';
import { ReactComponent as moreSvg } from '../../../../../imgs/svgs/more.svg';
import { ReactComponent as directmessageSvg } from '../../../../../imgs/svgs/directmessage.svg';
import { ReactComponent as OfflineSvg } from '../../../../../imgs/svgs/offline.svg';
import { ReactComponent as OnlineSvg } from '../../../../../imgs/svgs/online.svg';
import CommentButton from '../CommentButton';
import { changeMiddleMenuState } from '../../../../../redux/reducers/user';
import { loadDirectMessageRequest } from '../../../../../redux/reducers/directMessage';

const StyledCardWrapper = styled.div`
display: flex;
flex: 1 1 100%;
align-items: center;
overflow: visible;
border-radius: 8px;
&:hover{
  margin-top : -1px;
  margin-left : -10px;
  margin-right : -10px;
  padding-top : 1px;
  padding-left : 10px;
  padding-right : 10px;
  background-color : #40444b;
}
`
const FriendCard = ({ type, userInfo }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { directMessages } = useSelector((state) => state.directMessage);
  const profileBGColor = ['#7289da', '#747f8d', '#43b581', '#faa61a', '#f04747'][userInfo.tag % 5];
  const onClickAccept = () => {
    console.log('메시지 보내기')
    const lastId = directMessages[directMessages.length - 1]?.id;
    dispatch(loadDirectMessageRequest({
      senderId: me.id,
      receiverId: userInfo.id,
      receiverNickname: userInfo.nickname,
      receiverTag: userInfo.tag,
      profileImage : userInfo.profileImage,
      state : userInfo.state,
      lastId,
    }))
  }
  const onClickRefuse = () => {
    console.log('기타')
  }
  return (
    <div style={{
      display: 'flex',
      height: '62px',
      marginLeft: '30px',
      marginRight: '20px',
      borderTop: 'solid 1px #454950',
      cursor: 'pointer',
      overflow: 'visible',
    }}>
      <StyledCardWrapper>
        <div style={{
          display: 'flex',
          flex: '0 0 260px',
          alignItems: 'center',
          position:'relative',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            marginRight: '12px',
            flexShrink: '0',
            position: 'relative',
            width: '32px',
            height: '32px',
            overflow:'hidden',
            color : 'white',
            border:'none',
            backgroundColor:userInfo.profileImage ? 'transparent':  profileBGColor
          }} >
            {userInfo.profileImage ? 
              <div style={{ width: '32px', height: '32px' , border:'none' }}>
              <svg width='32' height='32' >
                <image href={userInfo.profileImage} height='32' width='32' x='0' y='0' />
              </svg>
            </div>
            : <DefaultProfileSvg width='20px' fill='white' />}
            {/* {<img src={`http://localhost:3065/${userInfo.Image.src}`} alt='profileImage'/>} */}
            
          </div>
          <div style={{
              position: 'absolute',
              left: '22px',
              top: '22px',
              width: '15px',
              height: '15px',
              backgroundColor: 'transparent',
              zIndex: '10',
            }}>
              {userInfo.state === 'online' ? <OnlineSvg /> : <OfflineSvg />}
            </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{ fontWeight: '600', color: 'white' }}>{userInfo.nickname}</div>
            <div style={{
              fontSize: '12px', color: 'white',
            }}>{userInfo.state === 'online' ? '온라인' : '오프라인'}</div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          marginLeft: 'auto',
        }}>
          {
            <>
              <CommentButton comment='메시지 보내기' hoverColor='#dbdcdd' SvgImg={directmessageSvg} onClick={onClickAccept} />
              <CommentButton comment='기타' hoverColor='#dbdcdd' SvgImg={moreSvg} onClick={onClickRefuse} />
            </>
          }
        </div>
      </StyledCardWrapper>
    </div>
  )
}

export default FriendCard;