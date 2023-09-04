import { ReactComponent as MailSvg } from '../../../../imgs/svgs/mail.svg';
import { ReactComponent as QeustionSvg } from '../../../../imgs/svgs/question.svg';

const FixedRightHeader = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: '0',
      width: '90px',
      backgroundColor: '#36393f',
      borderBottom :'1px solid #202225',
      height: '50px',
      marginLeft: '0',
      color: '#b9bbbe',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
      }}>
        <MailSvg height='24px' />
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
      }}>
        <QeustionSvg height='24px' />
      </div>
      
    </div>
  )
}

export default FixedRightHeader;