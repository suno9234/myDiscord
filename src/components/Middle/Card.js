import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { directmessageRequest } from '../../redux/reducers/user';

export const Wrapper = styled.div`
  width : 215px;
  height : 44px;
  display : flex;
  margin-top : 2px;
  margin-bottom : 2px;
  background-color: #2f3136;
  border-radius : 6px 6px 6px 6px / 6px 6px 6px 6px;
  align-items : center;
`
const Card = ({ img, name, size = '34px' }) => {
  const dispatch = useDispatch();
  const { lastClickedDM } = useSelector((state) => state.user);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (name === lastClickedDM) {
      setHover(true);
    } else {
      setHover(false);
    }
  }, [lastClickedDM, name])
  const onMouseEnter = () => {
    if(name === lastClickedDM){
      return;
    }
    setHover(true);
  }
  const onMouseLeave = () => {
    if(name === lastClickedDM){
      return;
    }
    setHover(false);
  }
  const onClickCard = () => {
    dispatch(directmessageRequest({ name: name }))
  }
  return (
    <Wrapper style={{
      cursor: hover ? 'pointer' : 'default',
      backgroundColor: hover ? '#40444b' : '#2f3136',
    }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClickCard}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
      }}>
        <img src={img} alt='hsico' style={{
          width: size,
          height: size,
          transition: 'border-radius 100ms',
          borderRadius: '50%',
          padding: '0 2px 0',
        }} />
      </div>
      <div style={{
        paddingLeft: '8px',
        fontSize: '14px',
        fontWeight: 'bold',
        color: hover ? 'white' : 'gray',
      }}>
        {name}
      </div>
    </Wrapper>
  )
}
export default Card;