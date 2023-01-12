import { useState } from 'react';
import FixedRightMenu from './FixedRightMenu';

const Card = ({ imgSrc, name, fstate = "잠수" }) => {
  const [hover, setHover] = useState(false);
  const onMouseEnter = () => {
    setHover(true);
  }
  const onMouseLeave = () => {
    setHover(false);
  }
  return (
    <div style={{
      display: 'flex',
      width:'100%',
    }}>
      <div style={{
        cursor :'pointer' ,
        display: 'flex',
        borderRadius: '4px',
        height: '60px',
        backgroundColor: hover ? '#40444b' : null,
        borderTop: 'solid 1px #454950',
        // borderBottom: 'solid 1px #454950',
        flexGrow:'1',
        flexShrink: '0',
        alignItems: 'center',
      }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img src={imgSrc} alt='friends' style={{
          borderRadius: '50%',
          width: '34px',
          marginRight: '10px',
        }} />
        <div style={{
          display: 'flex',
          height: '100%',
          flex: '1',
          flexDirection: 'column',
          overflow: 'hidden',
          color: 'white',
          textOverflow: 'ellipsis',
          position: 'relative'
        }}>
          <div style={{
            top: '10px',
            position: 'absolute',
            fontSize: '14px',
            fontWeight: 'bold',
          }}>
            <div style={{
              flexShrink: '0',
              whiteSpace: 'nowrap',
            }}>
              {name}
            </div>
            <div style={{
              color: 'gray',
            }}>
              {fstate}
            </div>
          </div>

        </div>
        <FixedRightMenu hover={hover} />
      </div>
      <div style={{ width: '15px', height: '10px', flexShrink: '0' }} />
    </div>
  )
}

export default Card;