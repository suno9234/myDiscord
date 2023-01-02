import { Wrapper } from "./Card";
import friendBlack from '../../imgs/friend_black.png';

const FriendCard = () => {
  return (
    <Wrapper>
      <div style={{
        flexShrink :'0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
      }}>
        <img src={friendBlack} alt='hsico' style={{
          flexShrink:'0',
          width:'24px',
          padding: '0 2px 0',
        }} />
      </div>
      <div style={{
        paddingLeft: '8px',
        fontSize: '16px',
        lineHeight:'20px',
        fontWeight: '500',
        color: '#96989d',
      }}>친구</div>
    </Wrapper>
  )
}

export default FriendCard;