import React from 'react';
import ServerProfile from './ServerProfile';
import HomeButton from './HomeButton';

const divStyle = {
  width: '30px',
  height : '2px',
  backgroundColor : '#5E636C',
  marginTop : '2px',
  marginBottom:'2px'
}

const homeStyle = {
  width: '44px',
  height : '44px',
  marginTop:'2px',
  marginBottom : '2px',
}

const serverStyle = {
  width:'44px',
  height:'44px',
  marginTop:'2px',
  marginBottom : '2px',
}

const LeftMenu = () => {
  return (
    <div>
      <div style={{
        backgroundColor: '#202225',
        height: '100%',
        width: '72px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <HomeButton btnStyle={homeStyle}/>
        <div style={divStyle}></div>
        <ServerProfile btnStyle={serverStyle} />
        <ServerProfile btnStyle={serverStyle}/>
      </div>
    </div>
  );
}

export default LeftMenu;
