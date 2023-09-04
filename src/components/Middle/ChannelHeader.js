import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ReactComponent as ArrowSvg } from '../../imgs/svgs/arrow_down.svg'
import { hideChattingChannels, showChattingChannels } from "../../redux/reducers/channel";

const DivWrapper = styled.div`
display : flex;
position: relative;
flex-grow : 1;
align-items : center;
width : 100%;
border-radius : 5px;
padding-right : 5px;
padding-top : 16px;
background-color : transparent;
color : #96989d;
&:hover{
  color : white;
}
`

const InnerWrapper = styled.div`
display : flex;
position : relative;
alitn-items : center;
flex : 1 1 auto;
margin-left : 8px;
padding : 6px 0;
cursor : pointer;
`

const SvgWrapper = styled.div`
  position : absolute;
  left : -13px;
  top : 8px;
  display : flex;
  align-items : center;
  justify-content : center;
  transition : transform 0.25s;
  transform : ${props => props.isClicked ? 'rotate(-90deg)' : null} ;
`;

const FontWrapper = styled.div`
font-size : 12px;
line-height : 16px;
font-weight : 600;
`
const ChannelHeader = ({ channelType }) => {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const onClickHeader = () => {
    if (isClicked) {
      setIsClicked(false);
      dispatch(showChattingChannels());

    } else {
      setIsClicked(true);
      dispatch(hideChattingChannels());
    }
  }
  return (
    <DivWrapper>
      <InnerWrapper onClick={onClickHeader}>
        <SvgWrapper isClicked={isClicked}>
          <ArrowSvg width="12px" height="12px" />
        </SvgWrapper>
        <FontWrapper>
          {channelType}
        </FontWrapper>
      </InnerWrapper>
    </DivWrapper>
  )
}

export default ChannelHeader;