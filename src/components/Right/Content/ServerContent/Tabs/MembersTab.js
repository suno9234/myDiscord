import { useSelector } from "react-redux"
import MemberCard from "../MemberCard";

const MembersTab = () => {
  const { currentChannel } = useSelector((state) => state.channel);
  return (
    <div style={{
      display: currentChannel.isvisibleMembers ? 'flex' : 'none',
      flex : '0 0 ',
      minWidth: '240px',
      width: '240px',
      height: '100%',
      backgroundColor: '#2f3136'
    }}>
      {currentChannel.Users.map((v, i) => <MemberCard key={v.id} userInfo={v} />)}
    </div>
  )
}

export default MembersTab