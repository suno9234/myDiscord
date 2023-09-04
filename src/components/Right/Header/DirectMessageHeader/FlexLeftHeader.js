import { useSelector } from "react-redux";
import { ReactComponent as DMSvg } from '../../../../imgs/svgs/directmessage-header.svg';
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
  const { currentChannel } = useSelector((state) => state.directMessage);
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
        color: '#96989d'
      }}>
        <DMSvg fill='#96989d' width='24px' />
      </div>
      <div style={{ position: 'absolute', left: '42px', top: '17px', display: 'flex', whiteSpace: 'nowrap', color: 'white', fontWeight: '600' }}>{currentChannel.currentReceiver.nickname}</div>


    </Wrapper>)
}

export default FlexLeftHeader;