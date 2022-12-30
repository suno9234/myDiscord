import { useState } from 'react';

const UserProfile = () => {
  const [isdev] = useState(true);
  const [hover, setHover] = useState(false);

  const onMouseEnterEvent = () => {
    setHover(true);
  }

  const onMouseLeaveEvent = () => {
    setHover(false);
  }

  return (
    <div style={{
      backgroundColor: '#2f3136',
      boxSizing: 'border-box',
      width: '448px',
      height: '64px',
      borderRaduis: '4px 4px 4px 4px / 4px 4px 4px 4px',
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
    }}>
      {isdev ? <div style={{
        backgroundColor: '#f38688',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
      }} /> : <img alt='테스트' />}
      <div style={{
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '48%',
        marginLeft: '8px',

      }}>
        <div style={{
          display: 'flex',
        }}>
          <div style={{
            fontSize: '16px',
            fontWeight: 'bold',
            lineHeight: '20px',
            color: 'white',

          }}>신순호</div>
          <div style={{
            fontSize: '14px',
            lineHeight: '18px',
            color: '#b9bbbe'
          }}>#9234</div>
        </div>
        <div style={{
          fontSize: '14px',
          lineHeight: '18px',
          color: '#f38688',
          fontWeight: 'bold',
        }}>다시 로그인해주세요</div>
      </div>
      <div style={{
        display: 'flex',
        marginLeft: 'auto',
      }}>
        <button style={{
          height: '38px',
          minWidth: '96px',
          minHeight: '38px',
          position: 'relative',
          backgroundColor: hover ? '#686d73': '#4f545c',
          borderRadius: '4px 4px 4px 4px / 4px 4px 4px 4px',
          border: 'none',
          cursor: hover ? 'pointer' : ' default'
        }}
          onMouseEnter={onMouseEnterEvent}
          onMouseLeave={onMouseLeaveEvent}
        >
          <div style={{
            color: 'white',
            fontWeight: 'bold',

          }}>
            로그인
          </div>
        </button>
      </div>

    </div>
  )
}
export default UserProfile;