import React from 'react';
import { useSelector } from 'react-redux';
import RoomInfoTab from './RoomInfoTab';
import FriendsListTab from './FriendsListTab';

const SideMenuTab = () => {
  const { isServer } = useSelector((state) => state.user);
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#2f3136',
      width: '240px',
      height:'100%',
    }}>
      SideMenuTab
      {isServer ? <RoomInfoTab /> : <FriendsListTab />}
    </div>

  );
}

export default SideMenuTab;
