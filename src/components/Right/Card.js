import FixedRightMenu from './FixedRightMenu';

const Card = ({ imgSrc, name, fstate = "잠수" }) => {
  return (
    <div style={{
      display: 'flex',
      borderRadius: '4px 4px 4px 4px / 4px 4px 4px 4px',
      width: '100%',
      height: '60px',
      // backgroundColor:'yellow',
      boxSizing: 'border-box',
      borderTop: 'solid 1px #454950',
      borderBottom: 'solid 1px #454950',
      flexShrink: '0',
      alignItems: 'center',

    }}>
      <img src={imgSrc} alt='friends' style={{
        borderRadius: '50%',
        width: '34px',
        marginRight: '10px',
      }} />
      <div style={{
        display: 'flex',
        height:'100%',
        flex: '1',
        flexDirection: 'column',
        overflow: 'hidden',
        color: 'white',
        textOverflow: 'ellipsis',
        position: 'relative'
      }}>
        <div style={{
          top:'10px',
          position:'absolute',
          fontSize:'14px',
          fontWeight:'bold',
        }}>
          <div style={{
            flexShrink:'0',
            whiteSpace:'nowrap',
          }}>
            {name}
          </div>
          <div style={{
            color:'gray',
          }}>
            {fstate}
          </div>
        </div>

      </div>
      <FixedRightMenu />
    </div>
  )
}

export default Card;