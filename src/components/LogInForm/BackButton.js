import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { changeLoginPageState } from '../../redux/reducers/user';

import ReturnIcon from '../../imgs/returnico.svg';

const BackButton = () => {
  const dispatch = useDispatch();
  const [hoverReturn, setHoverReturn] = useState(false);

  const onClickReturn = () => {
    dispatch(changeLoginPageState({ state: 'selectId' }));
  }
  const onMouseEnterReturn = () => {
    setHoverReturn(true);
  }
  const onMouseLeaveReturn = () => {
    setHoverReturn(false);
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '16px',
    }}>
      <button style={{
        flexGrow: '0',
        display: 'flex',
        alignItems: 'center'
      }}
        onClick={onClickReturn}
        onMouseEnter={onMouseEnterReturn}
        onMouseLeave={onMouseLeaveReturn}
        type= "button"
      >
        <img src={ReturnIcon} alt="returnIcon" style={{
          width: '16px',
          height: '16px',
          color: 'white',
        }} />

        <div style={{
          padding: '2px 4px',
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
        width: '90px',
        marginLeft: '5px',
        marginTop: '-5px',
      }} />

    </div>
  )
}

export default BackButton;