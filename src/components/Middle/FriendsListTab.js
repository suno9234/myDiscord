import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { ReactComponent as FriendSvg } from '../../imgs/svgs/friends.svg';
import { ReactComponent as FriendHoverSvg } from '../../imgs/svgs/friends-hover.svg';
import { ReactComponent as NitroSvg } from '../../imgs/svgs/nitro.svg';
import { ReactComponent as NitroHoverSvg } from '../../imgs/svgs/nitro-hover.svg';

import DirectMessageCard from './DirectMessageCard';
import DirectMessageHeader from './DirectMessageHeader';
import { loadDirectMessageListRequest } from '../../redux/reducers/directMessage';

const ScrollWrapper = styled.div`
  padding-top : 8px;
  overflow-y :scroll ;  
  overflow-x : hidden;
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
  width: 232px;  
  `;
const Cover = styled.div`
position: absolute;
height: 100%;
width: 5px;
top: 0;
right: 0;
background-color: #2f3136;
`

const Wrapper = styled.div`
position : relative;
overflow : hidden;
margin-left : 8px;
&::-webkit-transition: opacity 0.5s;
&:hover .cover-bar{
  opacity : 0;
}
`;

const FriendsListTab = () => {
  const { directMessages } = useSelector((state) => state.directMessage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDirectMessageListRequest());
  }, [dispatch])
  return (
    <>
      <Wrapper>
        <ScrollWrapper>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <DirectMessageCard cardType='svg' SvgIcon={FriendSvg} HoverSvgIcon={FriendHoverSvg} userInfo={{ id: -1, nickname: '친구' }} />
            <DirectMessageCard cardType='svg' SvgIcon={NitroSvg} HoverSvgIcon={NitroHoverSvg} userInfo={{ id: -2, nickname: 'Nitro' }} />
            <DirectMessageHeader />
            {directMessages.map((v, i) => <DirectMessageCard key={v.id} userInfo={v} img={v.profileImage} />)}
          </div>
        </ScrollWrapper>
        <Cover className='cover-bar' />
      </Wrapper>
    </>
  );
}

export default FriendsListTab;
