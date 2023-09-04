import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFriendRequest } from '../../../../../redux/reducers/user';
import { ReactComponent as BackgroundSvg } from '../../../../../imgs/background-ban.svg';


const BannedUserTab = () => {
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
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              flex: '0 1 auto',
              width: '376px',
              height: '162px',
            }} >
              <BackgroundSvg/>
            </div>
          </div>
          <div style={{
            color: '#a3a6aa',
            margin: '8px 0 0',
          }}>
            Wumpus는 차단 해제를 할 수 없어요.
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannedUserTab;