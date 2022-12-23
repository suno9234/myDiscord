import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width : 100%;
  height : 44px;
  display : flex;
  margin-top : 1px;
  border-radius : 4px 4px 4px 4px / 4px 4px 4px 4px;
  align-items : center;
  
  background-color : ${(props)=>(props.clicked ? 'green' : 'red')};
`

const FriendsMenu = () => {
  const [clicked, setClicked] = useState(false);
  const onClickDiv = () => {
    setClicked(true)
  }
  return (
    <Wrapper
      color={clicked}
      onClick={onClickDiv}
    >
      <div>이모티콘</div>
      친구
    </Wrapper>
  )
}
export default FriendsMenu;