import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import RoomInfoTab from './RoomInfoTab';
import FriendsListTab from './FriendsListTab';
import LeftHeader from './MiddleHeader/MiddleHeader';
import Footer from '../Footer/Footer';

const EmptySpace = styled.div`
  width:240px;  
  flex : 1 1;
`;

const Middle = () => {
  const { isServer } = useSelector((state) => state.user);
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#2f3136',
      height: '100%',
      overflow : 'hidden',
    }}>
      <LeftHeader />
      {isServer ? <RoomInfoTab /> : <FriendsListTab />}
      <EmptySpace />
      <Footer />
    </div>

  );
}

export default Middle;
