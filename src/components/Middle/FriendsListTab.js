import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import snow from '../../imgs/snowsgiving.png';
import nitro from '../../imgs/nitro.svg';

import Card from './Card';
import FriendCard from './FriendCard';
import DirectMessageCard from './DirectMessageCard';

const ScrollWrapper = styled.div`
  overflow-y :scroll ;  
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
&::-webkit-transition: opacity 0.5s;
&:hover .cover-bar{
  opacity : 0;
}
`;

const FriendsListTab = () => {
  const { DirectMessages } = useSelector((state) => state.user);
  return (
    <Wrapper>
      <ScrollWrapper>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <FriendCard />
          <Card img={snow} name={'Snowsgiving'} size={'20px'} />
          <Card img={nitro} name={'Nitro'} size={'30px'} />
          <DirectMessageCard/>
          {DirectMessages.map((v, i) => <Card key={v.name} name={v.name} img={v.profileImage} />)}
        </div>
      </ScrollWrapper>
      <Cover className='cover-bar'/>
    </Wrapper>
  );
}

export default FriendsListTab;
