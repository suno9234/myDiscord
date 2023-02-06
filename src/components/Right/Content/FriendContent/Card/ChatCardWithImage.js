import { ReactComponent as DefaultProfileSvg } from '../../../../../imgs/svgs/default-profile.svg';
import styled from "styled-components";

const DivWrapper = styled.div`
position : relative;
margin : 17px 0 0 ;
padding : 2px 48px 2px 72px;
`

const ImageWrapper = styled.div`
display : flex;
align-items : center;
justify-content : center;
flex  : 0 0 
border-radius : 50%;
background-color : ${props => props.bgColor};
width : 40px;
height : 40px;
position : absolute;
left : 16px;
overflow : hidden;
`

const ContentWrapper = styled.div`
color : #dcddde;
`

const NicknameWrapper = styled.span`
margin-right : .25rem;
color : #dcddde;
`

const DateWrapper = styled.span`

`
const ChatCardWithImage = ({ directMessage }) => {
  const profileBGColor = ['#7289da', '#747f8d', '#43b581', '#faa61a', '#f04747'][directMessage.User.tag % 5];
  return (

    <DivWrapper>
      <ImageWrapper bgColor={profileBGColor}>
        {directMessage.User.profileImage ?
          <div style={{ width: '40px', height: '40px', border: 'none' }}>
            <svg width='40' height='40' >
              <image href={directMessage.User.profileImage} height='40' width='40' x='0' y='0' />
            </svg>
          </div>
          : <DefaultProfileSvg width='26px' fill='white' />}

      </ImageWrapper>
      <h3>
        <NicknameWrapper>{directMessage.User.nickname}</NicknameWrapper>
        <DateWrapper>{directMessage.createdAt?.substr(0, 10)}</DateWrapper>
      </h3>
      <ContentWrapper>{directMessage.content}</ContentWrapper>
    </DivWrapper>

  )
}

export default ChatCardWithImage;