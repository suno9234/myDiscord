import React from 'react';
import styled from 'styled-components';

import Card from './Card';

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
  display:'flex';
  flex: '1' ;
  height:'100%';
  flexDirection:'column';
  justifyContent:'center';
  alignItems:'center',
  width:'240px';  
`;

const FriendsListTab = () => {

  return (
    <ScrollWrapper>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ScrollWrapper>

  );
}

export default FriendsListTab;
