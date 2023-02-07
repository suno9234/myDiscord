import { ReactComponent as FriendSvg } from '../../../../imgs/svgs/friends.svg'
const FixedLeftHeader = () => {
  return (
    <div style={{
      backgroundColor: 'none',
      height: '100%',
      width: '100px',
      display: 'flex',
      flexShrink: '0',
      justifyContent: 'center',
      alignItems: "center",
      color: '#8e9297'
    }}>
      <FriendSvg width='24px' />
      <div style={{
        color: 'white',
        fontWeight: '600',
        marginLeft: '10px',
      }}>
        친구
      </div>

    </div>
  )
}
export default FixedLeftHeader;