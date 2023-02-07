

import styled from "styled-components";

const DateWrapper = styled.div`
display : none;
position: absolute;
left: 10px;
top: 3px;
color : #a3a6aa;
font-size:12px;
`

const DivWrapper = styled.div`
padding : 2px 48px 2px 72px;
position : relative ; 
&:hover{
  background-color : #32353b;
  .div
}
&:hover ${DateWrapper}{
  display: inline-block;
}
`
const ContentWrapper = styled.div`
color : #dcddde
`


const ChatCard = ({ directMessage }) => {
  const convertString2Date = (s) => {
    let result = '';  
    result += s.substr(12, 2) + ' '
    const time = s.substr(15);
    const tA = time.split(':');
    let hour = tA[0]
    const minute = tA[1]
    result += hour + ':';
    result += minute

    return result;
  }

  return (
    <DivWrapper>
      <DateWrapper>{convertString2Date(directMessage.createdAt)}</DateWrapper>
      <ContentWrapper>{directMessage.content}</ContentWrapper>
    </DivWrapper>
  )
}
export default ChatCard;