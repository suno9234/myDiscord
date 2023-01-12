import mailIcon from '../../../../imgs/mail-black.png';
import questionIcon from '../../../../imgs/question-black.png';

const FixedRightHeader = () => {
  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexShrink : '0',
      width:'90px',
      backgroundColor: '#36393f',
      height:'50px',
      marginLeft :'0',
    }}>
      <img src={mailIcon} alt='mail' style={{ height:'19px' ,paddingLeft:'4px',paddingRight:'8x'}}/>
      <img src={questionIcon} alt='question' style={{ height:'19px',paddingLeft:'8px',paddingRight:'8px'}}/>
    </div>
  )
}

export default FixedRightHeader;