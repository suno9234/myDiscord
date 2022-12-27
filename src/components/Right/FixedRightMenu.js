import messageBlack from '../../imgs/message-black.png';
import moreBlack from '../../imgs/more-black.png';

const FixedRightMenu = ()=>{
  return(
    <div style={{
      flexShrink : '0',
      height:'100%',
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center',
      width:'100px',
      // backgroundColor:'red',
    }}>
      <img src={messageBlack}  alt="메세지" style={{
        height:'36px'
      }}/>
      <img src={moreBlack} alt="더보기" style={{
        height:'36px',
      }}/>
    </div>
  )
}
export default FixedRightMenu;