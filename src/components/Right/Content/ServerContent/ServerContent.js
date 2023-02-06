import MembersTab from "./Tabs/MembersTab";
import DirectMessageTab from "./Tabs/DirectMessageTab"
import { useEffect, useState } from "react";
import { debounce } from "lodash";
const ServerContent = () => {
  const [isVisibleMembers, setIsVisibleMembers] = useState(false);
  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth <= 1130) {
        setIsVisibleMembers(false)
      } else {
        setIsVisibleMembers(true) // 안보이는 중에 width > 1130이면 보여라
      }
    }, [100])
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  return (
    <div style={{
      display: 'flex',
      backgroundColor: '#36393f',
      flex: '1 1 auto',
      height: '100%',
    }}>
      <DirectMessageTab />
      <MembersTab isVisible={isVisibleMembers}/>
    </div>
  )
}

export default ServerContent