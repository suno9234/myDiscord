import { useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import SearchBar from "../SearchBar";
import { loadFriendsRequest } from "../../../../../redux/reducers/user";
import { ScrollDiv } from "./Waiting";
import FriendCard from "../Card/FriendCard";
const AllFriends = () => {
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
              {`온라인 - ${Friends.length}명`}
            </h2>
          </div>
          <ScrollDiv>
            {Friends.map((v) => <FriendCard key={v.id} userInfo={v} />)}
          </ScrollDiv>
        </div>
        : null}
    </div>
  )
}

export default AllFriends;