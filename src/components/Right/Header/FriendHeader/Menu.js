import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledDiv = styled.div`
display: flex;
position: absolute;
height: 20px;
min-width : 0;
padding : 12px 8px;
border-radius: 4px;
font-weight: 400;
align-items: center;
overflow: hidden;
text-overflow: clip;
flex-shrink : 0;
line-height: 20px;
cursor : pointer;
white-space : nowrap;
background-color : ${props => props.isSelected ? '#454950' : '#36393f'};
color : ${props => props.isSelected ? 'white' : 'gray'};
&:hover{
  background-color : #454950;
  color : white;
}
`;


const Menu = ({ menuName, ml, mr, onClickMenu }) => {
  const { rightMenuState } = useSelector((state) => state.user);
  return (
    <StyledDiv style={{
      marginLeft: ml,
      marginRight: mr,
    }}
      isSelected={rightMenuState === menuName}
      onClick={onClickMenu}
    >
      {menuName}
    </StyledDiv >
  )
}

export default Menu;