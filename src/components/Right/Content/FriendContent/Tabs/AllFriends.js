import { useSelector } from "react-redux";
import SearchBar from "../SearchBar";
import Card from "../Card";

const AllFriends = () => {
  const { Friends } = useSelector((state) => state.user);
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    }}>
      <SearchBar />
      <div style={{

      }}>
        <h2 style={{
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: '600',
          margin: '16px 20px 8px 30px',
        }}>{`온라인 - 10명`}</h2>
      </div>
      <div>
        {Friends.map((v) => <Card />)}
      </div>
      <div style={{
      }}>

      </div>
    </div>
  )
}

export default AllFriends;