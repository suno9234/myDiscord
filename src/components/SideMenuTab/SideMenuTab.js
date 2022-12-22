import React from 'react';
import { useSelector } from 'react-redux';
import RoomInfoTab from './RoomInfoTab';
import FriendsListTab from './FriendsListTab';

const SideMenuTab = () => {
  const { isRoom } = useSelector((state) => state.user);
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#2f3136',
      width: '240px',
      height:'100%',
    }}>
      SideMenuTab
      {isRoom ? <RoomInfoTab /> : <FriendsListTab />}
    </div>

  );
}

export default SideMenuTab;
