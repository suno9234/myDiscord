import { useRef, useState } from "react";
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
color : #b9bbbe;
&:hover{
  background-color : #40444b;
}
`

const ArrowSpan = styled.span`
position : fixed;
white-space : nowrap;
background-color : #191a1d;
color : #dadbdc;
padding : 6px 8px;
border-radius : 5px;
vertical-align : middle;
text-align : center;
visibility : visible;
font-size : 14px;
font-weight : 300;
transform : translateX(-50%);

`

const IconButton = ({ SvgIcon, onClick, description = null }) => {
  const [hover, setHover] = useState(false)
  const divRef = useRef();
  const onMouseEnter = () => {
    setHover(true)
  }
  const onMouseLeave = () => {
    setHover(false)
  }
  return (
    <Wrapper ref={divRef} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <SvgIcon width='20px' height='20px' />
      {hover && description &&
        <>
          <ArrowSpan style={{
            left: divRef.current.getBoundingClientRect().left + 17,
            top: divRef.current.getBoundingClientRect().top - 40,
          }}>
            {description}
          </ArrowSpan>
          <div style={{
            position: 'fixed',
            width: '10px',
            height: '10px',
            transform: 'rotate(45deg)',
            trnasform: 'tranlateX(-50%)',
            backgroundColor: '#191a1d',
            left: divRef.current.getBoundingClientRect().left + 11,
            top: divRef.current.getBoundingClientRect().top - 13,
          }} /></>}

    </Wrapper>
  )
}

export default IconButton;