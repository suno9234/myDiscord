
import FlexLeftHeader from "./FlexLeftHeader";
import FixedRightHeader from "./FixedRightHeader";

const DirectMessageHeader = () => {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      minWidth: '0',
      flexShrink: '0',
      height: '50px',
      backgroundColor: '#36393f',
      borderBottom: '1px solid #202225',
      alignItems: 'center',
    }}>
      <FlexLeftHeader />
      <FixedRightHeader />
    </div>
  )
}

export default DirectMessageHeader;