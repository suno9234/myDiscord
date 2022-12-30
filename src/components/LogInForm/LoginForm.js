import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectId, loginRequest } from '../../redux/reducers/user';

const LoginForm = () => {
  const [hoverPasswordMissing, setHoverPasswordMissing] = useState(false);
  const [hoverLogin, setHoverLogin] = useState(false);

  const dispatch = useDispatch();

  const onClickReturn = () => {
    dispatch(selectId());
  }

  const onMouseEnterPasswordMissing = () => {
    setHoverPasswordMissing(true);
  }
  const onMouseLeavePasswordMissing = () => {
    setHoverPasswordMissing(false);
  }

  const onClickLogin = () => {
    dispatch(loginRequest());
  }
  const onMouseEnterLogin = () => {
    setHoverLogin(true);
  }
  const onMouseLeaveLogin = () => {
    setHoverLogin(false);
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '0',
      flexShrink: '0',
      width: '480px',
      borderRadius: '4px 4px 4px 4px / 4px 4px 4px 4px',
      backgroundColor: '#36393f',
      padding: '32px',
      alignItems: 'start',
      boxSizing: 'border-box',
    }}>

      <button style={{
        padding: '2px 4px',
        cursor: 'pointer',
      }}
        onClick={onClickReturn}>
        <div>뒤로 가기</div>
      </button>

      <div style={{
        width: '100%',
        height: ''
      }}>
        <div style={{
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '30px',
          verticalAlign: 'baseline',
          textAlign: 'center',
          color: '#ffffff',
          margin: '0 0 8px',
        }}>
          돌아오신 것을 환영해요!
        </div>
        <div style={{
          fontSize: '16px',
          lineHeight: '20px',
          fontWeight: '400',
          verticalAlign: 'baseline',
          color: '#b9bbbe',
          textAlign: 'center',
        }}>
          다시 만나다니 너무 반가워요!
        </div>
      </div>

      <div className="info" style={{
        textAlign: 'left',
        width: '100%',
        marginTop: '20px',
      }}>
        <div className="emailorphone">
          <label>이메일 또는 전화번호</label>
          <div>as39as@naver.com</div>
        </div>
        <div className="password">
          <label>비밀번호</label>
          <div>*************</div>
        </div>
      </div>
      <button style={{
        boxSizing: 'border-box',
        padding: '2px 4px',
        marginTop: '4px',
        marginBottom: '20px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
      }}
        onMouseEnter={onMouseEnterPasswordMissing}
        onMouseLeave={onMouseLeavePasswordMissing}
      >
        <div style={{
          color: '#00aff4',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '16px',
          textDecoration: hoverPasswordMissing ? 'underline' : 'none',
        }}>
          비밀번호를 잊으셨나요?
        </div>

      </button>
      <button style={{
        width: '100%',
        height: '44px',
        backgroundColor: hoverLogin ? '#4a55cc' : '#5865f2',
        border: 'none',
        borderRadius: '4px 4px 4px 4px / 4px 4px 4px 4px',
        color: 'white',
        boxSizing: 'border-box',
        margin: '0 0 8px',
        padding: '2px 16px',
        cursor: 'pointer',
      }}
        onMouseEnter={onMouseEnterLogin}
        onMouseLeave={onMouseLeaveLogin}
        onClick={onClickLogin}>
        로그인
      </button>
      <button>계정이 필요한가요? 가입하기</button>
    </div>
  )
}
export default LoginForm;