import React, { useState } from 'react';
import styled from 'styled-components';

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
  const [hover, setHover] = useState(false);
  const onMouseEnter = () => {
    setHover(true);
  }
  const onMouseLeave = () => {
    setHover(false);
  }
  return (
    <Wrapper style={{
      backgroundColor: hover ? '#40444b' : '#2f3136',
    }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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