import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components";
import { loadFriendsRequest } from "../../../../redux/reducers/user";

import OnlineFriends from "./Tabs/OnlineFriends";
import AllFriends from './Tabs/AllFriends';
import Waiting from "./Tabs/Waiting";
import AddFriendForm from "./Tabs/AddFriendForm";

import DirectMessageTab from "./Tabs/DirectMessageTab";




const FriendContent = () => {
  const dispatch = useDispatch();
  const { me, rightMenuState, lastClickedMiddleMenu } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadFriendsRequest({ userid: me.id }));
  }, [])

  return (
    <div style={{
      backgroundColor: '#36393f',
      height: '100%',
    }}>
      {
        ['friends', '친구'].includes(lastClickedMiddleMenu) ?
          rightMenuState === 'online' ? <OnlineFriends /> :
            rightMenuState === 'all' ? <AllFriends /> :
              rightMenuState === 'waiting' ? <Waiting /> :
                rightMenuState === 'addFriends' ? <AddFriendForm /> :
                  null : <DirectMessageTab />
      }
    </div>
  )
}

export default FriendContent