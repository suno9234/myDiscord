import { useSelector } from "react-redux";
import SearchButton from "./SearchButton";
const LeftHeader = () => {
  const { isRoom } = useSelector((state) => state.user);
  return (
    <div style={{
      display:'flex',
      width: '240px',
      backgroundColor: '#2f3136',
      borderBottom: '1px solid #202225',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {isRoom ? null : <SearchButton />}
    </div>
  )
}
export default LeftHeader;