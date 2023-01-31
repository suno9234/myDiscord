import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components";
import { loadFriendsRequest } from "../../../../redux/reducers/user";


import AllFriends from './Tabs/AllFriends';
import AddFriendForm from "./Tabs/AddFriendForm";
import DirectMessageTab from "./Tabs/DirectMessageTab";

const DivWrapper = styled.div`
display : flex;
height : 100%;
overflow : hidden;
width : 100%;
background-color : #36393f;
`

const FriendContent = () => {
  const dispatch = useDispatch();
  const { me, rightMenuState, lastClickedMiddleMenu } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadFriendsRequest({ userid: me.id }));
  }, [dispatch, me.id])

  return (
    <DivWrapper>
      {
        [-1, -2].includes(lastClickedMiddleMenu) ?
          rightMenuState === 'addFriends' ? <AddFriendForm /> :
            rightMenuState === 'online' || 'all' || 'waiting' ? <AllFriends /> :
              null : <DirectMessageTab />
      }
    </DivWrapper>
  )
}

export default FriendContent