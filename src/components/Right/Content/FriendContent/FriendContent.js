import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components";
import { loadFriendsRequest } from "../../../../redux/reducers/user";


import AllFriends from './Tabs/AllFriends';
import AddFriendForm from "./Tabs/AddFriendForm";
import DirectMessageTab from "./Tabs/DirectMessageTab";
import ReceiverInfoTab from "./Tabs/ReceiverInfoTab";
import { debounce } from "lodash"
import BannedUserTab from "./Tabs/BannedUserTab";
import DirectMessageTab2 from "./Tabs/DirectMessageTab2";

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
          rightMenuState === '친구 추가하기' ? <AddFriendForm /> :
            rightMenuState === '차단 목록' ? <BannedUserTab /> :
              rightMenuState === '온라인' || '모두' || '대기 중' ? <AllFriends /> :
                null :
          <>
            <DirectMessageTab2 />
            <ReceiverInfoTab isVisible={isVisibleUserInfo} />
          </>
      }
    </DivWrapper >
  )
}

export default FriendContent