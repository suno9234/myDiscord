

import styled from "styled-components";

const DivWrapper = styled.div`
padding : 2px 48px 2px 72px;
position : relative ; 
`
const ContentWrapper = styled.div`
color : #dcddde
`
const ChatCard = ({ directMessage }) => {
  return (
    <DivWrapper>
      <ContentWrapper>{directMessage.content}</ContentWrapper>
    </DivWrapper>
  )
}
export default ChatCard;