import React from 'react';
import { useSelector } from 'react-redux';

import Channel from './components/Channel';
import LoginPage from './components/LogInForm/LoginPage';

const App = () => {
  const { me } = useSelector((state) => state.user);
  return (
    <>
      {me ? <Channel /> : <LoginPage />}
    </>
  );
}

export default App;
