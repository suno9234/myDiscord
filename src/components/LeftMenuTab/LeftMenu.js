import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ServerProfile from './ServerProfile';
import HomeButton from './HomeButton';
import { useEffect } from 'react';
import { loadChannelsRequest } from '../../redux/reducers/channel';

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadChannelsRequest());
  }, [])
  return (
    <ScrollDiv>
      <HomeButton channelInfo={{ channelId: -1, channelName: '다이렉트 메세지' ,  }} />
      <StyledDiv />
      {channels.map((v, i) => (<ServerProfile key={v.id} channelInfo={v} />))}

    </ScrollDiv>

  );
}

export default LeftMenu;
