
import ServerHeader from "./Header/ServerHeader/ServerHeader";
import FriendHeader from "./Header/FriendHeader/FriendHeader";
import ServerContent from "./Content/ServerContent/ServerContent";
import FriendContent from "./Content/FriendContent/FriendContent";

import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledDiv = styled.div`
flex : 1;
display : flex;
flex-direction : column;
height : 100%;
min-width:0;
`

const Right = () => {
  const { isServer } = useSelector((state) => state.user);
  return (
    <StyledDiv>
      { isServer ?  <ServerHeader/> : <FriendHeader />}
      { isServer ?  <ServerContent/>: <FriendContent />}
    </StyledDiv>
  )
}
export default Right