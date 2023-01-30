import FlexLeftHeader from "./FlexLeftHeader";
import FixedRightHeader from "./FixedRightHeader";
const ServerHeader = () => {
  return (
    <div style={{
      display:'flex',
      width: '100%',
      height: '50px',
      backgroundColor: '#36393f',
      borderBottom: '1px solid #202225',
    }}>
      <FlexLeftHeader />
      <FixedRightHeader />
    </div>
  )
}

export default ServerHeader;