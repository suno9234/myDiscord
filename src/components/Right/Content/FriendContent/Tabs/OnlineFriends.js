import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "../SearchBar";
import FriendCard from "../Card/FriendCard";
import { loadFriendsRequest } from "../../../../../redux/reducers/user";

import { ScrollDiv } from "./Waiting";

const OnlineFriends = () => {
  const dispatch = useDispatch();
  const { Friends } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadFriendsRequest());
  }, [])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}>
      {Friends ?
        <div>
          <SearchBar />
          <div style={{
          }}>
            <h2 style={{
              fontSize: '12px',
              lineHeight: '16px',
              fontWeight: '600',
              margin: '16px 20px 8px 30px',
              color: '#b9bbbe',
            }}>
              {`온라인 - ${Friends.filter((v) => v.state === 'online').length}명`}
            </h2>
          </div>
          <ScrollDiv>
            {Friends.filter((v) => v.state === 'online').map((v) => <FriendCard key={v.id} userInfo={v} />)}
          </ScrollDiv>
        </div>
        : null}
    </div>
  )
}
export default OnlineFriends;