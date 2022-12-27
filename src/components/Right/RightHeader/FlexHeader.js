import styled from 'styled-components';
import FixedLeftHeader from './FixedLeftHeader';
import Menu from '../Menu';

const Wrapper = styled.div`
  position: relative;
  min-width: 0;
  width : 100%;
  height : 50px;
  flex-shrink : 1 ;
  overflow : hidden;
  
  background-color : #36393f;
  padding : 0;
  margin : 0;

  display:flex;
  align-items: center;
`;

const Line = styled.div`
  position:absolute;
  min-width: 0;
  background-color: #454950;
  margin-left : 100px;
  height: 30px;
  width: 1px;
`;
// position: relative;
// 
const FlexHeader = () => {
  return (
    <Wrapper>
      <FixedLeftHeader />
      <Line />
      <Menu menuName={'온라인'} ml='120px'/>
      <Menu menuName={'모두'} ml='200px'/>
      <Menu menuName={'대기 중'} ml='265px'/>
      <Menu menuName={'추천'} ml='348px'/>
      <Menu menuName={'차단 목록'} ml='440px'/>
      <Menu menuName={'친구 추가하기'} ml='532px'/>

    </Wrapper>
  )
}

export default FlexHeader;