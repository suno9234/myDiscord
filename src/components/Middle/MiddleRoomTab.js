import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import ChannelCard from './ChannelCard';
import ChannelHeader from './ChannelHeader';
const Wrapper = styled.div`
position : relative;
overflow : hidden;
&::-webkit-transition: opacity 0.5s;
&:hover .cover-bar{
  opacity : 0;
}
`;

const ScrollWrapper = styled.div`
  overflow-y :scroll ;  
  overflow-x : hidden;
  padding-left : 8px;
  &::-webkit-scrollbar{
    width: 5px;
  }
  &::-webkit-scrollbar-thumb{
    width: 8px;
    height: 10px;
    background-color : #202225 ;
    border-radius:2px;
  }
  vertical-align:middle;
  height: 100%;
  width: 240px;  
  `;

const MiddleRoomTab = () => {
  const { currentChannel } = useSelector((state) => state.channel);
  return (
    <>
      <Wrapper>
        <ScrollWrapper>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: '3px',
          }}>
            <ChannelHeader channelType={'채팅 채널'}  />
            {currentChannel.chattingChannels.map((v, i) => <ChannelCard key={v.channelId} channelInfo={v} channelType='chatting'/>)}
            <ChannelHeader channelType={'음성 채널'} />
            {currentChannel.voiceChannels.map((v, i) => <ChannelCard key={v.channelId} channelInfo={v} channelType='voice'/>)}
          </div>
        </ScrollWrapper>
      </Wrapper>

    </>
  );
}

export default MiddleRoomTab;
