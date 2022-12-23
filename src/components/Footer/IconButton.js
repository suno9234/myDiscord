
const IconButton = ({ img }) => {
  return (
    <div style={{
      display: 'flex',
      flex: '0 0 26px',
      alignItems: 'center',
      verticalAlign: 'center',
      backgroundColor: '#202225',
      height: '26px',
      borderRadius: '20%',
      margin: '0 5px 0',
    }}>
      <img src={img} alt='tinyicon' style={{
        flex: '0 0 ',
        marginLeft: '2px',
        width: '22px',
        height: '22px',
      }} />
    </div>
  )
}

export default IconButton;