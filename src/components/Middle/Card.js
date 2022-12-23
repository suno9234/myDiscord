import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width : 100%;
  height : 44px;
  display : flex;
  margin-top : 1px;
  margin-bottom : 1px;
  background-color: red;
  border-radius : 4px 4px 4px 4px / 4px 4px 4px 4px;
  align-items : center;
`
const Card = ()=>{
  return(
    <Wrapper>
      카드
    </Wrapper>
  )
}
export default Card;