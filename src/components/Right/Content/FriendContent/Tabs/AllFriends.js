import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../SearchBar";
import { loadFriendsRequest, loadWaitingFriendsRequest } from "../../../../../redux/reducers/user";
import FriendCard from "../Card/FriendCard";
import WaitingCard from "../Card/WaitingCard";
import styled from "styled-components";

const ScrollDiv = styled.div`
width : 100%;
overflow-y :scroll;
&::-webkit-scrollbar{
  width: 8px;
}
&::-webkit-scrollbar-thumb{
  width: 14px;
  background-color : #2e3338 ; 
  border-radius:4px;
}
`;

const AllFriends = () => {
  const dispatch = useDispatch();
  const { Friends, rightMenuState, FriendRequests } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadFriendsRequest({}));
    dispatch(loadWaitingFriendsRequest({}));
  }, [dispatch])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'hidden',
    }}>
      {Friends ?
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          overflow: 'hidden',
        }}>
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
              {`${rightMenuState} - 
                ${rightMenuState === '온라인' ? Friends.filter(v => v.state === 'online').length :
                  rightMenuState === '모두' ? Friends.length : FriendRequests.sended.length + FriendRequests.received.length}명`}
            </h2>
          </div>
          <ScrollDiv>
            {rightMenuState === '온라인' ? Friends.filter((v) => v.state === 'online').map((v) => <FriendCard key={v.id} userInfo={v} />) :
              rightMenuState === '모두' ? Friends.map((v) => <FriendCard key={v.id} userInfo={v} />) :
                rightMenuState === '대기 중' ?
                  <>
                    {FriendRequests.sended.map((v) => <WaitingCard key={v.id} type='sended' userInfo={v} />)}
                    {FriendRequests.received.map((v) => <WaitingCard key={v.id} type='received' userInfo={v} />)}
                  </>
                  : FriendRequests.received.map((v) => <WaitingCard key={v.id} type='received' userInfo={v} />)
            }
          </ScrollDiv>
        </div>
        : null}
    </div>
  )
}

export default AllFriends;