import React from 'react';
import { useDispatch } from 'react-redux';

import Profile from './Profile';
import home from './home.jpg'
import { enterHome } from '../../redux/reducers/user';

const HomeButton = () => {
  const dispatch = useDispatch();
  const onClickHome = () => {
    dispatch(enterHome());
  }
  return (
    <div style={{ marginTop: '12px', marginBottom: '2px' }}>
      <Profile imgSrc={home} onClickMethod={onClickHome} />
    </div>

  )
}
export default HomeButton;