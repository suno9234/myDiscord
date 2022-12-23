import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import snow from '../imgs/snowsgiving.png';
import nitro from '../imgs/nitro.svg';

import Card from './Card';
import FriendCard from './FriendCard';

const ScrollWrapper = styled.div`
  overflow-y :scroll ;  
  &::-webkit-scrollbar{
    width: 5px;
  }
  &::-webkit-scrollbar-thumb{
    width: 8px;
    height: 10px;
    background-color : black ;
    border-radius:2px;
  }
  vertical-align:middle;
  display : inline-block;
  height: 100%;
  width: 240px;  
`;

const FriendsListTab = () => {
  const { Friends } = useSelector((state) => state.user);

  return (
    <ScrollWrapper>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <FriendCard/>
        <Card img={snow} name={'Snowsgiving'} size={'20px'}/>
        <Card img={nitro} name={'Nitro'} size={'30px'}/>
        <div>다이렉트 메시지</div>
        {Friends.map((v, i) => <Card key={v.name} name={v.name} img={v.profileImage}/>)}
      </div>
    </ScrollWrapper>

  );
}

export default FriendsListTab;
