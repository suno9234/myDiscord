import styled from "styled-components";

const Wrapper = styled.div`
display : flex;
flex : 0 0 32px;
height : 32px;
align-items : center;
justify-content : center;
background-color : transparent;
border-radius : 5px;
cursor : pointer;
&:hover{
  background-color : #40444b;
}

`
const IconButton = ({ SvgIcon }) => {
  return (
    <Wrapper >
      <SvgIcon width='20px' height='20px' fill='#b9bbbe'/>
    </Wrapper>
  )
}

export default IconButton;