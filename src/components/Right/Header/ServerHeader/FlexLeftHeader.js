import { useSelector } from "react-redux";
import { ReactComponent as ChannelSvg } from '../../../../imgs/svgs/chattingChannel.svg';
import styled from "styled-components";

const Wrapper = styled.div`
  display:flex;
  position: relative;
  width: 100%;
  min-width: 0;
  border-bottom: 1px solid #202225;
  height : 50px;
  flex-shrink : 1 ;
  overflow : hidden;
  background-color : #36393f;
  align-items: center;
`;

const FlexLeftHeader = () => {
  const { currentChannel } = useSelector((state) => state.channel);
  return (
    <Wrapper>
      <div style={{
        position: 'absolute',
        display: 'flex',
        flex: '0 1 auto',
        left: '0',
        margin: '8px',
        minWidth: '0',
        overflow: 'hidden',
        flexShrink: '1',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ChannelSvg fill='#96989d' width='24px' />
      </div>
      <div style={{ position: 'absolute', left: '42px', top: '17px', display: 'flex', whiteSpace: 'nowrap', color: 'white', fontWeight:'600' }}>{currentChannel.chattingChannels.filter((v) => v.channelId === currentChannel.lastSelectedChattingChannelId)[0].channelName}</div>


    </Wrapper>)
}

export default FlexLeftHeader;