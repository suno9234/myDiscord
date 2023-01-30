import { useSelector } from "react-redux"

import MembersTab from "./Tabs/MembersTab";
import DirectMessageTab from "./Tabs/DirectMessageTab"
const ServerContent = () => {
  const { currentChannel } = useSelector((state) => state.channel);
  return (
    <div style={{
      display:'flex',
      backgroundColor: '#36393f',
      flex : '1 1 auto',
      height: '100%',
    }}>
      <DirectMessageTab />
      <MembersTab/>
    </div>
  )
}

export default ServerContent