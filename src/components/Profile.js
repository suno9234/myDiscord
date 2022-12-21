import React from 'react';
import { Button } from 'antd';

const Profile = ({ innerText, btnStyle }) => {
  return (

    <Button
      shape='circle'
      size='large'
      style={btnStyle}
    >{innerText ? innerText : null}</Button>

  );
}

export default Profile;