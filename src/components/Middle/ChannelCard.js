import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as ChattingSvg } from '../../imgs/svgs/chattingChannel.svg';
import { ReactComponent as InviteSvg } from '../../imgs/svgs/invite.svg';
import { loadChannelMessageRequest } from '../../redux/reducers/directMessage';

const DivWrapper = styled.div`
display : flex;
flex-grow : 1;
align-items : center;
width : 100%;
border-radius : 5px;
padding-right : 5px;
cursor : pointer;
color : #96989d;
background-color : transparent;
&:hover{
  color : white;
  background-color : #42464d;
}
`

const InnerWrapper = styled.div`
display : flex;
align-items : center;
flex : 1 1 auto;
margin-left : 5px;
padding : 6px 0;
`

const SvgWrapper = styled.div`
display : flex;
position : relative;
margin-right : 6px;
align-items : center;
vertical-align : baseline;
`
const ChannelCard = ({ channelInfo, channelType }) => {
  const [hover, setHover] = useState(false);
  const { currentChannel } = useSelector((state) => state.channel);
  const dispatch = useDispatch()
  const onMouseEnter = () => {
    setHover(true);
  }
  const onMouseLeave = () => {
    setHover(false);
  }
  const onClickEvent = () => {
    if (channelType === 'chatting') {
      dispatch(loadChannelMessageRequest({ channel : channelInfo }))
    }
  }
  return (
    <DivWrapper style={{
      backgroundColor: channelType === 'voice' ? 'transparent' :
        currentChannel.lastSelectedChattingChannelId === channelInfo.channelId ? '#42464d' : 'transparent',
      color: currentChannel.lastSelectedChattingChannelId === channelInfo.channelId ? 'white' : '#96989d',
      display: channelType === 'voice' ? 'flex' :
        currentChannel.isvisibleChattingChannels ? 'flex' :
          currentChannel.lastSelectedChattingChannelId === channelInfo.channelId ? 'flex' : 'none'
    }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClickEvent}>
      <InnerWrapper>
        <SvgWrapper><ChattingSvg fill='#96989d' width='20px' /></SvgWrapper>
        {channelInfo.channelName}
      </InnerWrapper>

      <div style={{
        display: 'flex',
        position: 'relative',
        marginLeft: '4px',
        alignItems: 'center',
        verticalAlign: 'baseline',
      }}>
        {hover ? <InviteSvg fill={hover ? 'white' : '#96989d'} width='16px' /> : null}
      </div>
    </DivWrapper>
  )
}

export default ChannelCard;