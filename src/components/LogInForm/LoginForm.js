import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeLoginPageState, logInRequest } from '../../redux/reducers/user';

import useInput from "../../hooks/useInput";
import BackButton from "./BackButton";
import InputForm from "./InputForm";

import { StyledForm, StyledH1, StyledSubmitButton } from "./style";

const BlueDiv = styled.div`
color: #00aff4;
font-size: 14px
font-weight: 500;
line-height: 16px;
&:hover{
  text-decoration:underline;
}
`
const StyledHeader2 = styled.div`
font-size: 16px;
line-height: 20px;
font-weight: 400;
vertical-align: baseline;
color: #b9bbbe;
text-align: center;
margin-top : -10px;
margin-bottom : 10px;
`

const StyledPasswordButton = styled.button`
padding: 2px 4px;
margin-top: 4px;
margin-bottom: 20px;
`;

const StyledSpan = styled.span`
font-size: 14px;
line-height: 16px;
color: #a3a6aa;
`;

const StyledSignUpButton = styled.button`
color: #00aff4;
margin: 0 auto;
margin-left: 4px;
vertical-align: bottom;
`

const Wrapper = styled.div`
margin-top:4px;
`

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onClickPassWordMissing = () => {
    console.log("passwordmissing");
  }
  const onClickLogin = (e) => {
    e.preventDefault();
    dispatch(logInRequest({ email: email, password: password }));
  }
  const onClickSignUp = () => {
    dispatch(changeLoginPageState({ state: 'signUp' }));
  }

  return (
    <StyledForm>
      <BackButton />
      <StyledH1>돌아오신 것을 환영해요!</StyledH1>
      <StyledHeader2>다시 만나다니 너무 반가워요!</StyledHeader2>
      <InputForm header={"이메일 또는 전화번호"} type="text" bgColor='black' isRequired={true} value={email || ''} onChangeValue={onChangeEmail} />
      <InputForm header={"비밀번호"} bgColor='black' type="password" isRequired={true} value={password || ''} onChangeValue={onChangePassword} />
      <StyledPasswordButton type="button" onClick={onClickPassWordMissing}>
        <BlueDiv>비밀번호를 잊으셨나요?</BlueDiv>
      </StyledPasswordButton>
      <StyledSubmitButton type="submit" onClick={onClickLogin}>로그인</StyledSubmitButton>
      <Wrapper>
        <StyledSpan>계정이 필요한가요?</StyledSpan>
        <StyledSignUpButton type="button" onClick={onClickSignUp}>
          <BlueDiv>가입하기</BlueDiv>
        </StyledSignUpButton>
      </Wrapper>
    </StyledForm>
  )
}
export default LoginForm;