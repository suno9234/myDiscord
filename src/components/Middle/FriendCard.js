import { Wrapper } from "./Card";
import friendBlack from '../imgs/friend_black.png';

const FriendCard = () => {
  return (
    <Wrapper>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
      }}>
        <img src={friendBlack} alt='hsico' style={{
          width:'20px',
          padding: '0 2px 0',
        }} />
      </div>
      <div style={{
        paddingLeft: '8px',
        fontSize: '14px',
        fontWeight: 'bold',
        color: 'gray',
      }}>친구</div>
    </Wrapper>
  )
}

export default FriendCard;