import { useRef, useState } from "react";
import styled from "styled-components";

const BtnContainer = styled.div`
margin-left: 10px;
flex-shrink: 0;
width: 36px;
height: 36px;
border-radius: 50%;
display: flex; 
justify-content: center;
align-items: center;
background-color: #2f3136;
cursor: pointer;
color : #b9bbbe;
position:relative;
&:hover{
  color : ${props => props.color}
}
`

const ArrowSpan = styled.span`
position : fixed;
white-space : nowrap;
background-color : #191a1d;
color : white;
padding : 6px 8px;
border-radius : 5px;
vertical-align : middle;
text-align : center;
visibility : visible;
transform : translateX(-50%);

`

const CommentButton = ({ comment, SvgImg, hoverColor, onClick }) => {
  const [hover, setHover] = useState(false);
  const btnRef = useRef();
  const onMouseEnter = () => {
    setHover(true);
  }
  const onMouseLeave = () => {
    setHover(false);
  }
  return (
    <BtnContainer
      ref={btnRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      color={hoverColor}
    >
      <SvgImg width='20px' height='20px' />
      {
        hover ?
          <div>
            <ArrowSpan style={{
              left: btnRef.current.getBoundingClientRect().left + 18,
              top: btnRef.current.getBoundingClientRect().top - 40,
            }}>
              {comment}
            </ArrowSpan>
            <div style={{
              position: 'fixed',
              width: '10px',
              height: '10px',
              transform: 'rotate(45deg)',
              trnasform: 'tranlateX(-50%)',
              backgroundColor: '#191a1d',
              left: btnRef.current.getBoundingClientRect().left + 13,
              top: btnRef.current.getBoundingClientRect().top - 13,
            }} />
          </div>
          :
          null
      }
    </BtnContainer>
  )
}
export default CommentButton;