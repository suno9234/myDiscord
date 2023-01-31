import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ServerProfile from './ServerProfile';
import HomeButton from './HomeButton';

const ScrollDiv = styled.div`
  overflow-y : scroll;
  background-color: #202225;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex : 0 0 72px;
  align-items: center;
  &::-webkit-scrollbar{
    display:none;
  }
`

const StyledDiv = styled.div`
  border-top:2px #313642 solid;
  width: 30px;
  margin-top: 4px;
  margin-bottom: 5px;
`



const LeftMenu = () => {
  const { channels } = useSelector((state) => state.channel);
  return (
    <ScrollDiv>
      <HomeButton channelInfo={{ channelId: -1, name: 'home' }} />
      <StyledDiv />
      {channels.map((v, i) => {
        return <ServerProfile key={v.name} channelInfo={{ channelId: i, name: v.name }} imgSrc={v.profileImage} />
      })}

    </ScrollDiv>

  );
}

export default LeftMenu;
