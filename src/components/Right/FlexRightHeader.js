import styled from 'styled-components';

const Wrapper = styled.div`
  position:relateive;
  min-width: 0;
  padding-left : 10px;
  display:flex;
  width: 100%;
  height : 100%;
  align-items: center;
  flex : 1 1;
  background-color : #36393f;
  overflow : hidden;
`;

const FlexRightHeader = () => {


  return (
    <Wrapper>
      <div style={{flexShrink:'0',width: '20px', height: '20px', boxSizing: 'border-box', backgroundColor: 'white' }}>1</div>
      <div style={{flexShrink:'0',width: '20px', height: '20px', boxSizing: 'border-box', backgroundColor: 'white' }}>2</div>
      <div style={{flexShrink:'0',width: '20px', height: '20px', boxSizing: 'border-box', backgroundColor: 'white' }}>3</div>
      
    </Wrapper>
  )
}

export default FlexRightHeader;