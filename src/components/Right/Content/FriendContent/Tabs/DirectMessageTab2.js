import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import useInput from '../../../../../hooks/useInput';
import { postMessageRequest } from '../../../../../redux/reducers/directMessage';
import { ReactComponent as DefaultProfileSvg } from '../../../../../imgs/svgs/default-profile.svg';
import { ReactComponent as UploadSvg } from '../../../../../imgs/svgs/upload-button.svg';
import { ReactComponent as UploadStickerSvg } from '../../../../../imgs/svgs/upload-sticker.svg';
import { ReactComponent as UploadGifSvg } from '../../../../../imgs/svgs/upload-gif.svg';
import ChatCard from '../Card/ChatCard';
import ChatCardWithImage from '../Card/ChatCardWithImage';
import DateLine from '../Card/DateLine';

const ScrollWrapper = styled.div`
position : absolute;
overflow-y : scroll;
overflow-x : hidden;
top : 0;
bottom : 0;
left : 0;
right : 0;
&::-webkit-scrollbar{
  width: 10px;
  background-color : #2e3338;
}
&::-webkit-scrollbar-thumb{
  width: 8px;
  height: 10px;
  background-color : #202225 ;
  border-radius:2px;
}
`

const DirectMessageTab2 = () => {
  const scrollRef = useRef();
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [message, onChangeMessage, setMessage] = useInput('');
  const { currentChannel, postMessageDone } = useSelector((state) => state.directMessage);
  const profileBGColor = ['#7289da', '#747f8d', '#43b581', '#faa61a', '#f04747'][currentChannel.currentReceiver.tag % 5];
  const scrollToBottom = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }
  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(postMessageRequest({
      serverId: currentChannel.id,
      content: message
    }));
    setMessage(null);
    scrollToBottom();
  }
  const convertString2Date = (s) => {
    if (!s) {
      return null
    }
    const result = new Date(s.substr(0, 10))
    let isAfternoon = false;
    if (s.substr(12, 2) === '오후') {
      isAfternoon = true;
    }
    const time = s.substr(15);
    const tA = time.split(':');
    let hour = tA[0]
    const minute = tA[1]
    const second = tA[2]
    if (isAfternoon) {
      hour = String(parseInt(hour) + 12)
    }
    console.log(hour, minute, second)
    result.setHours(result.getHours() + hour)
    result.setMinutes(result.getMinutes() + minute)
    result.setSeconds(result.getSeconds() + second)
    return result;
  }

  useEffect(() => {
    scrollToBottom();
  }, [postMessageDone, currentChannel.currentMessages.length])
  return (
    <div style={{
      display: 'flex',
      flexGrow: '1',
      flexDirection: 'column',
      height: '100%',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
        position: 'relative',
      }}>
        <ScrollWrapper ref={scrollRef}>
          <div className='ContentWrapper' style={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column-reverse',
          }}>
            <div style={{ height: '30px' }}></div>
            {
              currentChannel.currentMessages.map((v, i) => {
                const currentDate = convertString2Date(v.createdAt);
                const nextDate = convertString2Date(currentChannel.currentMessages[i + 1]?.createdAt)
                if (!nextDate) {
                  console.log("NO NEXT DATE")
                  return (<>
                    <ChatCardWithImage directMessage={v} key={v.id} />
                    <DateLine dateStr={v.createdAt?.substr(0, 10)} />
                  </>)
                }
                /* console.log("CURRENT : ", currentDate)
                console.log("NEXT : ", nextDate)
                console.log(currentDate.getTime())
                console.log(nextDate.getTime()) */
                let answer;
                if (currentDate.getTime() - nextDate.getTime() < 60001) {
                  if (currentChannel.currentMessages[i + 1]?.User.id === v.User.id) {
                    answer = <ChatCard directMessage={v} key={v.id} />
                    //이전 메세지와 같은 시간(분) 같은 유저일 경우 콘텐트만 추가
                  } else {
                    console.log("DIFFRENT USER");
                    answer = <ChatCardWithImage directMessage={v} key={v.id} />;
                    // 이전 메세지와 같은 시간(분)이어도 유저가 다르면 상단에 닉네임과 프로필사진 추가
                  }
                } else {
                  if (currentDate.getDay() === nextDate.getDay() &&
                    currentDate.getMonth() === nextDate.getMonth() &&
                    currentDate.getFullYear() === nextDate.getFullYear()) {
                    answer = <ChatCardWithImage directMessage={v} key={v.id} />
                    console.log("LONG_DISTANCE")
                    // 보낸 시간(분)이 다르나 날짜가 같은 경우
                  } else {
                    console.log("DATE DIFFRENT")
                    console.log(v.createdAt)
                    console.log(currentDate)
                    console.log(currentChannel.currentMessages[i + 1].createdAt)
                    console.log(nextDate)
                    answer = <>
                      <ChatCardWithImage directMessage={v} key={v.id} />
                      <DateLine dateStr={v.createdAt?.substr(0, 10)} />
                    </>
                    //날짜가 다른 경우 (경계선 추가)
                  }
                }
                return answer;
              })
            }
            <div className='content' style={{
              margin: '16px',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                display: 'flex',
                backgroundColor: currentChannel.currentReceiver.profileImage ? 'none' : profileBGColor,
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px',
                overflow: 'hidden',
                borderRadius: '50%',
                color: 'white',
              }}>
                {currentChannel.currentReceiver.profileImage ?
                  <div style={{ width: '80px', height: '80px' }}>
                    <svg width='80' height='80' >
                      <image href={currentChannel.currentReceiver.profileImage} height='80' width='80' x='0' y='0' />
                    </svg>
                  </div>
                  : <DefaultProfileSvg width='60px' />
                }
              </div>
              <h3 style={{
                margin: '8px 0px',
                fontSize: '32px',
                lineHeight: '40px',
                color: 'white',
              }}>{currentChannel.currentReceiver.nickname}</h3>
              <div style={{ color: '#b9bbbe' }}>
                <strong>{currentChannel.currentReceiver.nickname}</strong> 님과 함께 나눈 메시지의 첫 부분이에요
              </div>
            </div>
          </div>
        </ScrollWrapper>
      </div >

      <form style={{
        display: 'flex',
        width: '100%',
        height: '68px',
        padding: '0 16px ',
      }} onSubmit={onSubmitForm}>
        <div style={{
          display: 'flex',
          backgroundColor: '#40444b',
          width: '100%',
          borderRadius: '8px',
          marginBottom: '24px',
        }}>
          <button style={{
            width: '56px',
            height: '44px',
            padding: '10px 16px',

          }} type="button" >
            <div>
              <UploadSvg fill="#b9bbbe" />
            </div>
          </button>
          <input ref={inputRef} style={{ outline: '0', width: '100%' }} placeholder="메시지를 보내세요" value={message || ''} onChange={onChangeMessage} />
          {/* <button type='submit' onSubmit={onSubmitForm} /> */}
          <div style={{ display: 'flex', alignItems: 'center', height: '44px', width: '150px', marginLeft: 'auto', }}>
            <div style={{
              margin: '0px 4px',
              padding: '4px',
            }}>
              <UploadGifSvg width='24px' height='24px' />
            </div>
            <div style={{
              margin: '0px 4px',
              padding: '4px',
            }}>
              <UploadStickerSvg width='20px' height='20px' />
            </div>

          </div>

        </div>
      </form>
    </div >
  )
}
export default DirectMessageTab2;