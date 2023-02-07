
import ServerHeader from "./Header/ServerHeader/ServerHeader";
import FriendHeader from "./Header/FriendHeader/FriendHeader";
import ServerContent from "./Content/ServerContent/ServerContent";
import FriendContent from "./Content/FriendContent/FriendContent";

import styled from "styled-components";
import { useSelector } from "react-redux";
import DirectMessageHeader from "./Header/DirectMessageHeader/DirectMessageHeader";

const StyledDiv = styled.div`
flex : 1;
display : flex;
flex-direction : column;
height : 100%;
min-width:0;
`

const Right = () => {
  const { isServer  , lastClickedMiddleMenu} = useSelector((state) => state.user);
  return (
    <StyledDiv>
      { isServer ?  <ServerHeader/> : [-1,-2].includes(lastClickedMiddleMenu) ?  <FriendHeader /> :  <DirectMessageHeader/>}
      { isServer ?  <ServerContent/>: <FriendContent />}
    </StyledDiv>
  )
}
export default Right