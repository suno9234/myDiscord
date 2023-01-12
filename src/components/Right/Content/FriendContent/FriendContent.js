import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components";
import { loadFriendsRequest } from "../../../../redux/reducers/user";

import OnlineFriends from "./Tabs/OnlineFriends";
import AllFriends from './Tabs/AllFriends';
import Waiting from "./Tabs/Waiting";
import AddFriendForm from "./Tabs/AddFriendForm";




const FriendContent = () => {
  const dispatch = useDispatch();
  const { me, rightMenuState } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadFriendsRequest({ userid: me.id }));
  }, [])

  return (
    <div style={{
      backgroundColor: '#36393f',
      height: '100%',
    }}>
      {
        rightMenuState === 'online' ? <OnlineFriends /> :
          rightMenuState === 'all' ? <AllFriends /> :
            rightMenuState === 'waiting' ? <Waiting /> :
              rightMenuState === 'addFriends' ? <AddFriendForm /> :
                null
      }
    </div>
  )
}

export default FriendContent