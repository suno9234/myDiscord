import React from 'react';
import { useSelector } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import GlobalFonts from './fonts/fonts';

import Channel from './components/Channel';
import LoginPage from './components/LogInForm/LoginPage';


const App = () => {
  const { me } = useSelector((state) => state.user);
  return (
    <>
      <GlobalStyle />
      <GlobalFonts/>
      {me ? <Channel /> : <LoginPage />}
    </>
  );
}

export default App;
