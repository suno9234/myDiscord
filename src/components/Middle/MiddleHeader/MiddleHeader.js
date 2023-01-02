import { useSelector } from "react-redux";
import SearchButton from "./SearchButton";
const MiddleHeader = () => {
  const { isRoom } = useSelector((state) => state.user);
  return (
    <div style={{
      width:'100%',
      height:'50px',
      flexGrow:'0',
      flexShrink:'0',
      backgroundColor: '#2f3136',
      borderBottom: '1px solid #202225',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {isRoom ? null : <SearchButton />}
    </div>
  )
}
export default MiddleHeader;