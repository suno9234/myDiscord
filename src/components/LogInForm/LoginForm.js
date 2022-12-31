import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectId, loginRequest } from '../../redux/reducers/user';
import ReturnIcon from '../../imgs/returnico.svg';

const LoginForm = () => {
  const [hoverPasswordMissing, setHoverPasswordMissing] = useState(false);
  const [hoverLogin, setHoverLogin] = useState(false);
  const [hoverSignUp, setHoverSignUp] = useState(false);
  const [hoverReturn, setHoverReturn] = useState(false);

  const dispatch = useDispatch();

  const onClickReturn = () => {
    dispatch(selectId());
  }
  const onMouseEnterReturn = () => {
    setHoverReturn(true);
  }
  const onMouseLeaveReturn = () => {
    setHoverReturn(false);
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

  const onClickSignUp = () => {
    dispatch(loginRequest());
  }
  const onMouseEnterSignUp = () => {
    setHoverSignUp(true);
  }
  const onMouseLeaveSignUp = () => {
    setHoverSignUp(false);
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
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '16px',
        justifyContent: 'center',
        alignItems: 'center',
      }}

      >
        <button style={{
          flexShrink: '0',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          background: 'none',
          border: 'none',

        }}
          onClick={onClickReturn}
          onMouseEnter={onMouseEnterReturn}
          onMouseLeave={onMouseLeaveReturn}
        >
          <img src={ReturnIcon} alt="returnIcon" style={{
            width: '16px',
            height: '16px',
            color: 'white',
          }} />

          <div style={{
            background: 'none',
            border: 'none',
            padding: '2px 4px',
            cursor: 'pointer',
            color: '#dcddde',
          }}
          >
            <div style={{
              fontSize: '16px',
              lineHeight: '20px',
              fontWeight: '400',
            }}>
              뒤로 가기
            </div>
          </div>
        </button>
        <div style={{
          height: '1px',
          backgroundColor: hoverReturn ? 'white' : 'transparent',
          width: '90%',
          marginTop: '-5px',
        }}>

        </div>
      </div>


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
        <div className="emailorphone" style={{
          marginBottom: '20px',
        }}>
          <label style={{
            display: 'block',
            fontSize: '12px',
            lineHeight: '16px',
            color: '#b9bbbe',
            marginBottom: '8px',
            fontWeight: '700',

          }}>
            이메일 또는 전화번호
            <span style={{
              color: '#ed4245',
              paddingLeft: '4px',
              lineHeight: '16px',
            }}>
              *
            </span>
          </label>
          <div style={{
            display: 'flex',
            width: '100%',
            borderRadius: '3px',
            border: 'none',
            boxSizing: 'border-box',
            fontSize: '16px',
          }}>
            <input style={{
              border: 'none',
              padding: '10px',
              height: '40px',
              width: '100%',
              boxSizing: 'border-box',
              borderRadius: '3px',
              backgroundColor: '#e8f0fe'
            }}
              placeholder=""
              autoCorrect="off"
              spellCheck="false"
              maxLength={999}
              required
              type="text"
            >
            </input>
          </div>
        </div>
        <div className="password">
          <label style={{
            display: 'block',
            fontSize: '12px',
            lineHeight: '16px',
            color: '#b9bbbe',
            marginBottom: '8px',
            fontWeight: '700',

          }}>
            비밀번호
            <span style={{
              color: '#ed4245',
              paddingLeft: '4px',
              lineHeight: '16px',
            }}>
              *
            </span>
          </label>
          <input style={{
            border: 'none',
            padding: '10px',
            height: '40px',
            width: '100%',
            boxSizing: 'border-box',
            borderRadius: '3px',
            backgroundColor: '#e8f0fe'
          }}
            placeholder=""
            autoCorrect="off"
            spellCheck="false"
            maxLength={999}
            required
            type="password"
          >
          </input>
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
      <div style={{
        marginTop: '4px',
      }}>
        <span style={{
          fontSize: '14px',
          lineHeight: '16px',
          color: '#a3a6aa',
        }}>
          계정이 필요한가요?
        </span>
        <button style={{
          color: '#00aff4',
          margin: '0 auto',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          marginLeft: '4px',
          verticalAlign: 'bottom',
          background: 'none',
          border: 'none',
          fontWeight: '500',
          lineHeight: '16px',
          fontSize: '14px',
          textDecoration: hoverSignUp ? 'underline' : 'none',
          cursor: 'pointer',
        }}
          onMouseEnter={onMouseEnterSignUp}
          onMouseLeave={onMouseLeaveSignUp}
          onClick={onClickSignUp}
        >
          가입하기
        </button>
      </div>
    </div>
  )
}
export default LoginForm;