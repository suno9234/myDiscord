import React, { useState } from 'react';
import RoomInfoTab from './RoomInfoTab';
import FriendsListTab from './FriendsListTab';
import BottomProfile from './BottomProfile';
const SideMenuTab = () => {
  const [isRoom] = useState(false);
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      backgroundColor: '#2f3136',
      width: '240px',
    }}>
      SideMenuTab
      {isRoom ? <RoomInfoTab /> : <FriendsListTab />}
      <BottomProfile/>
    </div>

  );
}

export default SideMenuTab;
