import { useDispatch } from 'react-redux';

import useInput from '../../hooks/useInput';
import BackButton from './BackButton';
import InputForm from './InputForm';

import { StyledForm, StyledH1, StyledSubmitButton } from './style';
import { signUpRequest } from '../../redux/reducers/user';

const SignUpForm = () => {
  const dispatch = useDispatch();

  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [name, onChangeName] = useInput("");

  const onSubmitEvent = (event) => {
    event.preventDefault();
    dispatch(signUpRequest({
      email: email,
      password: password,
      name: name,
    }))
  }

  return (
    <StyledForm onSubmit={onSubmitEvent}>
      <BackButton />
      <StyledH1>계정 만들기</StyledH1>
      <InputForm header="이메일" bgColor="black" isRequired={true} value={email || ''} onChangeValue={onChangeEmail} />
      <InputForm header="사용자명" bgColor="black" isRequired={true} value={name || ''} onChangeValue={onChangeName} />
      <InputForm header="비밀번호" bgColor="black" type='password' isRequired={true} value={password || ''} onChangeValue={onChangePassword} />
      <StyledSubmitButton type="submit">계속하기</StyledSubmitButton>
    </StyledForm>
  )
}

export default SignUpForm;