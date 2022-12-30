import { useSelector } from 'react-redux';

import SelectId from './SelectId';
import LoginForm from './LoginForm';
import background0 from '../../imgs/background0.svg';

const LoginPage = () => {
  const { loginPageState } = useSelector((state) => state.user)
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundImage: `url(${background0})`,
    }}>
      {loginPageState === 'selectId' && <SelectId />}
      {loginPageState === 'loginForm' && <LoginForm/>}

    </div>
  )
}

export default LoginPage;