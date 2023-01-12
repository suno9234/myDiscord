import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import CommentButton from './CommentButton';
import { ReactComponent as cancleSvg } from '../../../../imgs/svgs/cancle.svg';
import { ReactComponent as checkSvg } from '../../../../imgs/svgs/check.svg';
import { refuseFriendRequest } from '../../../../redux/reducers/user';

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
const WaitingCard = ({ type, userInfo }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const onClickAccept = () => {
    console.log('수락')
    //dispatch()
  }
  const onClickRefuse = () => {
    console.log('거절')
    dispatch(refuseFriendRequest({ sender: userInfo.id, receiver: me.id }))
  }
  const onClickCancel = () => {
    console.log('취소')
    //dispatch()
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
        }}>
          <div style={{
            borderRadius: '50%',
            marginRight: '12px',
            flexShrink: '0',
            position: 'relative',
            width: '32px',
            height: '32px',
            backgroundColor: 'red',
          }} />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{ fontWeight: '600', color: 'white' }}>{userInfo.nickname}</div>
            <div style={{
              fontSize: '12px', color: 'white',
            }}>{`${type === 'sended' ? '보낸' : '받은'} 친구 요청`}</div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          marginLeft: 'auto',
        }}>
          {
            type === 'received' ?
              <>
                <CommentButton comment='수락' SvgImg={checkSvg} hoverColor='#3ba55d' onClick={onClickAccept} />
                <CommentButton comment='거절' SvgImg={cancleSvg} hoverColor='#ed4245' onClick={onClickRefuse} />
              </>
              :
              <CommentButton comment='취소' SvgImg={cancleSvg} hoverColor='#ed4245' onClick={onClickCancel} />
          }
        </div>
      </StyledCardWrapper>
    </div>
  )
}

export default WaitingCard;