import React from 'react';
import { useSelector } from 'react-redux';
import ServerProfile from './ServerProfile';
import HomeButton from './HomeButton';
import styled from 'styled-components';

const ScrollDiv = styled.div`
  overflow-y : scroll;
  background-color: #202225;
  height: 100%;
  width: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::-webkit-scrollbar{
    display:none;
  }
`

const divStyle = {
  width: '30px',
  height: '2px',
  backgroundColor: '#2f3136',
  marginTop: '4px',
  marginBottom: '5px'
}

const LeftMenu = () => {
  const { Servers } = useSelector((state) => state.user);
  return (
    <ScrollDiv>
      <HomeButton />
      <div style={divStyle}>1</div>
      {Servers.map((v, i) => {
        return <ServerProfile key={v.name} name={v.name} imgSrc={v.profileImage} />
      })}

    </ScrollDiv>

  );
}

export default LeftMenu;
