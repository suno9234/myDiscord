import friendBlack from '../../../imgs/friend_black.png';

const FixedLeftHeader = () => {
  return (
    <div style={{
      backgroundColor: '#36393f',
      height: '100%',
      width: '100px',
      display: 'flex',
      flexShrink: '0',
      justifyContent:'center',
      alignItems: "center",
    }}>
      <div>
        <img src={friendBlack} alt='friendicon' style={{ height: '16px', width: 'auto' }} />
      </div>
      <div style={{
        color : 'white',
        fontWeight:'bold',
        marginLeft:'10px',
        marginBottom :'5px',
      }}>
        친구
      </div>

    </div>
  )
}
export default FixedLeftHeader;