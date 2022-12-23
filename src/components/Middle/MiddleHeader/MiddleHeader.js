import { useSelector } from "react-redux";
import SearchButton from "./SearchButton";
const MiddleHeader = () => {
  const { isRoom } = useSelector((state) => state.user);
  return (
    <div style={{
      width:'230px',
      flex: '0 0 49px',
      backgroundColor: '#2f3136',
      borderBottom: '1px solid #202225',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft:'4px',
      paddingRight:'4px',
      
    }}>
      {isRoom ? null : <SearchButton />}
    </div>
  )
}
export default MiddleHeader;