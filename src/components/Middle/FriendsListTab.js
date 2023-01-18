import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { ReactComponent as FriendSvg } from '../../imgs/svgs/friends.svg';
import { ReactComponent as FriendHoverSvg } from '../../imgs/svgs/friends-hover.svg';
import { ReactComponent as NitroSvg } from '../../imgs/svgs/nitro.svg';
import { ReactComponent as NitroHoverSvg } from '../../imgs/svgs/nitro-hover.svg';

import Card from './Card';
import DirectMessageCard from './DirectMessageCard';

const ScrollWrapper = styled.div`
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
  width: 240px;  
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
  return (
    <>
      <div style={{
        marginLeft: '8px',
        marginTop: '8px',
        paddingRight: '8px',
      }}>
        <Card cardType='svg' SvgIcon={FriendSvg} HoverSvgIcon={FriendHoverSvg} userInfo = {{id : -1 , nickname : '친구'}} />
        <Card cardType='svg' SvgIcon={NitroSvg} HoverSvgIcon={NitroHoverSvg} userInfo={{id : -2, nickname : 'Nitro'}} />
        <DirectMessageCard />
      </div>
      <Wrapper>
        <ScrollWrapper>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            {directMessages.map((v, i) => <Card key={v.id} userInfo={v} img={v.profileImage} />)}
          </div>
        </ScrollWrapper>
        <Cover className='cover-bar' />
      </Wrapper>
    </>
  );
}

export default FriendsListTab;
