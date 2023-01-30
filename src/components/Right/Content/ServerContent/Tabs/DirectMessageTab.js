import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import useInput from '../../../../../hooks/useInput';
import { postMessageRequest } from '../../../../../redux/reducers/directMessage';

import { ReactComponent as UploadSvg } from '../../../../../imgs/svgs/upload-button.svg';
import { ReactComponent as UploadStickerSvg } from '../../../../../imgs/svgs/upload-sticker.svg';
import { ReactComponent as UploadGifSvg } from '../../../../../imgs/svgs/upload-gif.svg';

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
  border-radius : 8px;
  background-color : #2e3338;
}
&::-webkit-scrollbar-thumb{
  width: 8px;
  height: 10px;
  background-color : #202225 ;
  border-radius:2px;
}
`

const DirectMessageTab = () => {
  const scrollRef = useRef();
  const dispatch = useDispatch();
  const [message, onChangeMessage] = useInput('');
  const { currentChannel, postMessageDone } = useSelector((state) => state.directMessage);

  const scrollToBottom = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }
  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(postMessageRequest({
      serverId: currentChannel.id,
      content: message
    }));
    scrollToBottom();
  }

  useEffect(() => {
    scrollToBottom();
  }, [postMessageDone])
  return (
    <div style={{
      display: 'flex',
      position : 'relative',
      flexGrow:'1',
      flexShrink:'1',
      flexDirection: 'column',
      minWidth:'0',
      height: '100%',
      overflow:'hidden',
    }}>
      <div style={{
        display: 'flex',
        position:'relative',
        minHeight: '0',
        flexDirection: 'column',
        minWidth:'0',
        height:'100%',
        marginRight:'4px',
        overflow:'hidden',
      }}>
        <ScrollWrapper ref={scrollRef}>
          <div className='ContentWrapper' style={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column-reverse',
          }}>
            {
              currentChannel.currentMessages.map((v, i) =>
                currentChannel.currentMessages[i + 1]?.createdAt?.substr(0, 17) === v.createdAt?.substr(0, 17) ?
                  currentChannel.currentMessages[i + 1]?.User.id === v.User.id ?
                    <div style={{ padding: '2px 48px 2px 72px', position: 'relative' }} key={i}>
                      <div style={{ color: '#dcddde' }}>{v.content}</div>
                    </div> //이전 메세지와 같은 시간(분) 같은 유저일 경우 콘텐트만 추가

                    : <div style={{ margin: '17px 0 0', padding: '2px 48px 2px 72px', position: 'relative' }} key={i}>
                      <div style={{ borderRadius: '50%', backgroundColor: 'red', width: '40px', height: '40px', position: 'absolute', left: '16px', }} />
                      <h3><span style={{ marginRight: '.25rem' }}>{v.User.nickname}</span><span>{v.createdAt.substr(0, 10)}</span></h3>
                      <div style={{ color: '#dcddde' }}>{v.content}</div>
                    </div> // 이전 메세지와 같은 시간(분)이어도 유저가 다르면 상단에 닉네임과 프로필사진 추가
                  :
                  currentChannel.currentMessages[i + 1]?.createdAt.substr(0, 10) === v.createdAt.substr(0, 10) ?
                    // 날짜는 같고 보낸 시간(분) 이 다른 경우
                    <div style={{ margin: '17px 0 0', padding: '2px 48px 2px 72px', position: 'relative' }} key={i}>
                      <div style={{ borderRadius: '50%', backgroundColor: 'red', width: '40px', height: '40px', position: 'absolute', left: '16px', }} />
                      <h3><span style={{ marginRight: '.25rem', color: '#dcddde' }}>{v.User.nickname}</span><span>{v.createdAt.substr(0, 16)}</span></h3>
                      <div style={{ color: '#dcddde' }}>{v.content}</div>
                    </div>
                    :
                    //날짜가 다른 경우 (경계선 추가)
                    <>
                      <div style={{ margin: '17px 0 0', padding: '2px 48px 2px 72px', position: 'relative' }} key={i}>
                        <div style={{ borderRadius: '50%', backgroundColor: 'red', width: '40px', height: '40px', position: 'absolute', left: '16px', }} />
                        <h3><span style={{ marginRight: '.25rem' , color: '#dcddde'}}>{v.User.nickname}</span><span>{v.createdAt.substr(0, 10)}</span></h3>
                        <div style={{ color: '#dcddde' }}>{v.content}</div>
                      </div>
                      <div style={{
                        display: 'flex', alignItems: 'center', marginLeft: '16px', marginRight: '16px', color: '#a3a6aa'
                        , fontSize: '12px', fontWeight: '600'
                      }}>
                        <div style={{ display: 'flex', flexGrow: '1', backgroundColor: '#40444b', height: '1px' }}></div>
                        {v.createdAt.substr(0, 10)}
                        <div style={{ backgroundColor: '#40444b', height: '1px', display: 'flex', flexGrow: '1', }}></div>
                      </div>
                    </>

              )
            }
            <div className='content' style={{
              margin: '16px',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                backgroundColor: 'red',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
              }}>
              </div>
              <h3 style={{
                margin: '8px 0px',
                fontSize: '32px',
                lineHeight: '40px',
              }}>TEST</h3>
              <div>
                <strong>TEST</strong> 님과 함께 나눈 메시지의 첫 부분이에요
              </div>
            </div>
          </div>
        </ScrollWrapper>
      </div>

      <form style={{
        display: 'flex',
        minWidth:'0',
        height: '68px',
        padding: '0 16px ',
      }} onSubmit={onSubmitForm}>
        <div style={{
          display: 'flex',
          backgroundColor: '#40444b',
          width: '100%',
          borderRadius: '8px',
          marginBottom: '24px',
          minWidth:'0',
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
          <input style={{ outline: '0' ,width:'100%' ,minWidth:'0'}} placeholder="메시지를 보내세요" value={message || ''} onChange={onChangeMessage} />
          {/* <button type='submit' onSubmit={onSubmitForm} /> */}
          <div style={{ display: 'flex', alignItems: 'center', height: '44px', width: '150px', marginLeft: 'auto', minWidth:'0'}}>
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
    </div>
  )
}
export default DirectMessageTab;