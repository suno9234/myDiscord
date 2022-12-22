import React from 'react';
import { useDispatch } from 'react-redux';
import Profile from './Profile';
import { enterServer } from '../../redux/reducers/user';

const ServerProfile = ({ btnStyle, name, imgSrc }) => {
  const dispatch = useDispatch();
  const onClickServerIcon = () => dispatch(enterServer({ name: "dummyServer" }));

  return (
    <div style={{ marginBottom: '3px', marginTop: '3px' }}>
      <Profile
        imgSrc={imgSrc}
        onClickMethod={onClickServerIcon}
      />
    </div>

  );
}

export default ServerProfile;