import messageBlack from '../../imgs/message-black.png';
import messageWhite from '../../imgs/message-white.png';
import moreBlack from '../../imgs/more-black.png';
import moreWhite from '../../imgs/more-white.png';

const FixedRightMenu = ({ hover }) => {
  return (
    <div style={{
      flexShrink: '0',
      height: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100px',
      // backgroundColor:'red',
    }}>
      <img src={hover ? messageWhite : messageBlack} alt="메세지" style={{
        height: '36px'
      }} />
      <img src={hover ? moreWhite : moreBlack} alt="더보기" style={{
        height: '36px',
      }} />
    </div>
  )
}
export default FixedRightMenu;