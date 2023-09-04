import { useSelector } from "react-redux"
import MemberCard from "../MemberCard";
import MemberCardHeader from "../MemberCardHeader";

const MembersTab = ({isVisible}) => {
  const { currentChannel } = useSelector((state) => state.channel);
  return (
    <div style={{
      display: currentChannel.isvisibleMembers ? 'flex' : 'none',
      flex: '0 0 ',
      flexDirection: 'column',
      minWidth: '240px',
      width: '240px',
      height: '100%',
      backgroundColor: '#2f3136'
    }}>
      <MemberCardHeader headerName='온라인' number={currentChannel.Users.filter((v) => v.state === 'online').length} />
      {currentChannel.Users.filter(v => v.state === 'online').map((v, i) => <MemberCard key={v.id} userInfo={v} />)}
      <MemberCardHeader headerName='오프라인' number={currentChannel.Users.filter((v) => v.state === 'offline').length} />
      {currentChannel.Users.filter(v => v.state === 'offline').map((v, i) => <MemberCard key={v.id} userInfo={v} />)}
    </div>
  )
}

export default MembersTab