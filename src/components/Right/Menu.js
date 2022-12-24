import styled from "styled-components";

const StyledDiv = styled.div`
display: flex;
  padding : 0;
  margin : 0;
  height: 20px;
  min-width : 0;
  border-radius: 4px 4px 4px 4px / 4px 4px 4px 4px;
  background-color : #36393f;
  color: gray;
  align-items: center;
  font-weight: bold;
  text-overflow: clip;
  overflow: hidden;
  line-height: 20px;
  position: absolute;
  flex-shrink : 0;
  white-space : nowrap;
`;


const Menu = ({ menuName , ml,mr}) => {
  return (
      <StyledDiv style={{
        marginLeft:ml,
        marginRight:mr
      }}>
        {menuName}
      </StyledDiv>
  )
}

export default Menu;