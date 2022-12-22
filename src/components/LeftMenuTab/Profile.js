import React from 'react';
import { Button } from 'antd';

const Profile = ({ innerText, btnStyle ,iconImg }) => {
  return (
    <Button
      shape='circle'
      size='large'
      style={btnStyle}
      onClick
      icon={iconImg ? iconImg: null}
    >
      {innerText ? innerText : null}</Button>

  );
}

export default Profile;