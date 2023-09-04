import { useState } from "react";
import { useSelector } from "react-redux";

const ServerHeader = () => {
  const { currentChannel } = useSelector((state) => state.channel);
  const [hover, setHover] = useState(false);
  const onMouseEnter = ()=>{
    setHover(true);
  }
  const onMouseLeave = ()=>{
    setHover(false);
  }
  return (
    <div style={{
      display: 'flex',
      padding: '12px 16px',
      cursor: 'pointer',
      width: '100%',
      color: 'white',
      backgroundColor : hover ? '#3c3f45' :  "transparent",
    }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div style={{
        display: 'flex',
        flexGrow: '1',
        marginRight: 'auto',
      }}>
        <div style={{
          fontWeight: '600',
        }}>
          {currentChannel.channelName}
        </div>

      </div>
      <div> {'v'}</div>

    </div>
  )
}

export default ServerHeader;