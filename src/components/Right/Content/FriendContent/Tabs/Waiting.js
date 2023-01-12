import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar";
import styled from "styled-components";

import { useEffect } from "react";
import { loadWaitingFriendsRequest } from "../../../../../redux/reducers/user";
import WaitingCard from "../WaitingCard";


const ScrollDiv = styled.div`
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

const Waiting = () => {
  const dispatch = useDispatch();
  const { FriendRequests } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadWaitingFriendsRequest());
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}>
      {(FriendRequests.sended || FriendRequests.received) ?
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
              {`대기중 - ${FriendRequests.sended.length + FriendRequests.received.length}명`}
            </h2>
          </div>
          <ScrollDiv>
            {FriendRequests.sended.map((v) => <WaitingCard key={v.id} type='sended' userInfo={v} />)}
            {FriendRequests.received.map((v) => <WaitingCard key={v.id} type='received' userInfo={v} />)}
          </ScrollDiv>
        </div>
        : null}
    </div>
  )
}
export default Waiting;