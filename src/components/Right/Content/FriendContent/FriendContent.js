import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components";
import { loadFriendsRequest } from "../../../../redux/reducers/user";


import AllFriends from './Tabs/AllFriends';
import AddFriendForm from "./Tabs/AddFriendForm";
import DirectMessageTab from "./Tabs/DirectMessageTab";
import ReceiverInfoTab from "./Tabs/ReceiverInfoTab";
import { debounce } from "lodash"

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
  const [isVisibleUserInfo, setIsVisibleUserInfo] = useState(false);
  const windowWidth = useRef(window.innerWidth);

  useEffect(() => {
    dispatch(loadFriendsRequest({ userid: me.id }));
  }, [dispatch, me.id])

  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth <= 1130) {
        setIsVisibleUserInfo(false)
      } else {
        setIsVisibleUserInfo(true) // 안보이는 중에 width > 1130이면 보여라
      }
    }, [100])
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  return (
    <DivWrapper>
      {
        [-1, -2].includes(lastClickedMiddleMenu) ?
          rightMenuState === 'addFriends' ? <AddFriendForm /> :
            rightMenuState === 'online' || 'all' || 'waiting' ? <AllFriends /> :
              null :
          <>
            <DirectMessageTab />
            <ReceiverInfoTab isVisible={isVisibleUserInfo} />
          </>
      }
    </DivWrapper >
  )
}

export default FriendContent