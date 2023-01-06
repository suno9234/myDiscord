import { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserProfile from '../Profile/UserProfile';
import { changeLoginPageState } from '../../redux/reducers/user';

const SelectId = () => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);

  const onMouseEnterEvent = () => {
    setHover(true);
  }
  const onMouseLeaveEvent = () => {
    setHover(false);
  }
  const onClickEvent = () => {
    dispatch(changeLoginPageState({ state: 'loginForm' }));
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '0',
      flexShrink: '0',
      width: '480px',
      borderRadius: '5px',
      backgroundColor: '#36393f',
      padding: '24px 16px 16px',
      alignItems: 'center',
    }}>

      <div style={{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '24px',
        height: '30px',
        color: 'white'
      }}>
        계정 선택하기
      </div>
      <div style={{
        fontSize: '16px',
        color: '#b9bbbe',
        margin: '8px 0px 24px',
        lineHeight: '20px',
        textAlign: 'center',
      }}>
        로그인할 계정을 선택하거나 새 계정을 추가하세요.
      </div>
      <UserProfile />
      <div style={{
        marginTop: '16px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <button style={{
          flexShrink: '0',
          padding: '2px 16px',
          width: '120px',
          height: '38px',
        }}
          type="button">
          <div style={{
            fontSize:'14px',
            lineHeight:'16px',
            color: '#dcddde',
            textDecoration: hover ? 'underline' : 'none',
            cursor: 'pointer',
          }}
            onMouseEnter={onMouseEnterEvent}
            onMouseLeave={onMouseLeaveEvent}
            onClick={onClickEvent}>
            계정 추가하기
          </div>

        </button>
      </div>
    </div>
  )
}
export default SelectId;