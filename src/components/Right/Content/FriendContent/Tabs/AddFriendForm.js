import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFriendRequest } from '../../../../../redux/reducers/user';
import backgroundImg2 from '../../../../../imgs/background1.svg';


const AddFriendForm = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState('');
  const [nickname, setNickname] = useState('');
  const [tag, setTag] = useState('');
  const [helper, setHelper] = useState('#0000');
  const [btnClickable, setBtnClickable] = useState(false);


  const onCheckReg = (e) => {
    const regExp = /^.{3,32}#[0-9]{4}$/g;
    if (!regExp.test(e.target.value)) {
      e.target.value.slice(0, e.target.value.length - 1);
    }
  }

  const onChangeInputData = (e) => {
    const regExp = /^.{3,32}#[0-9]{4}$/g;
    if (regExp.test(e.target.value)) {
      setBtnClickable(true);
      setNickname(e.target.value.split('#')[0])
      setTag(e.target.value.split('#')[1]);
      setInputData(e.target.value);
    } else {
      setBtnClickable(false);
    }
  }
  const onClickAddFriend = (e) => {
    e.preventDefault();
    dispatch(addFriendRequest({ nickname, tag }))
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection:'column',
      width:'100%',
      height:'100%',
    }}>
      <div style={{
        width: '100%',
        height: '155px',
        padding: '20px 30px',
        backgroundColor: '#36393f',
        borderBottom: '1px solid #454950'
      }}>
        <h2 style={{
          marginBottom: '8px',
          fontWeight: '600',
          color: 'white',
          lineHeight: '20px',
        }}>
          친구 추가하기
        </h2>
        <form>
          <div style={{
            color: '#b9bbbe',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '20px',
            borderRadius: '5px',
          }}>
            Discord Tag를 사용하여 친구를 추가할 수 있어요. 대문자, 소문자를 구별한답니다!
          </div>
          <div style={{
            margin: '16px 0 0',
            padding: '0 12px',
            backgroundColor: '#202225',
            borderRadius: '4px',
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            verticalAlign: 'baseline',
            border: '1px solid',
          }}>
            <div style={{
              verticalAlign: 'baseline',
              flex: '1 1 auto',
              padding: '4px 0',
              marginRight: '16px',
              zIndex: '1',
            }}>
              <input style={{
                fontWeight: '500',
                height: '40px',
                width: '100%',
                border: 'none',
                borderRadius: '3px',
                outline: '0',
                color: 'white',
              }}
                placeholder='사용자명#0000 입력'
                type='text'
                onKeyDown={onCheckReg}
                onChange={onChangeInputData}
              >
              </input>
              {
                inputData ?
                  <div style={{
                    position: 'absolute',
                  }}>
                    {helper}
                  </div>
                  :
                  null
              }
            </div>
            <button style={{
              height: '32px',
              minWidth: '60px',
              minHeight: '32px',
              color: btnClickable ? 'white' : '#8f9092',
              backgroundColor: btnClickable ? '#5865f2' : '#3c438b',
              padding: '2px 16px',
              borderRadius: '3px',
            }}
              type="submit"
              onClick={onClickAddFriend}
              disabled={btnClickable ? false : true}
            >
              친구 요청 보내기
            </button>
          </div>
        </form>
      </div>
      <div style={{
        width: '100%',
        flexGrow :'1',
        flexDirection : 'column',
      }}>
        <div style={{
          display: 'flex',
          flex : '1 1 auto',
          maxWidth : '440px',
          width:'100%',
          height:'100%',
          flexDirection: 'column',
          marginLeft: 'auto',
          marginRight: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            marginBottom: '40px',
            display: 'flex',
          }}>
            <div style={{
              flex: '0 1 auto',
              width: '376px',
              height: '162px',
              backgroundImage: `url(${backgroundImg2})`,
            }} />
          </div>
          <div style={{
            color: '#a3a6aa',
            margin: '8px 0 0',
          }}>
            Wumpus는 친구를 기다리고 있어요.
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddFriendForm;