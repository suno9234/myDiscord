import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-left : 10px;
  margin-top : 2px;
  margin-bottom : 2px;
  justify-content : left;
  align-items : center;
  background-color : blue;
  flex : 1 0 ;
  height : 40px ;
  overflow : hidden;
`;

const FlexRightHeader = () => {

  const A = <div style={{
    margin:'0 10px 0',
    height:'20px',
    backgroundColor:'white',
    flex:'0 0 20px',
  }}>A</div>

  return (
    <Wrapper>
      {A}    
      {A}    
      {A}    
      {A}    
      {A}    
      {A}    
      {A}    
      {A}    
      {A}    
      {A}    
      {A}    
      {A}    
      {A}    
      {A}    
      {A}    
      {A}    
    </Wrapper>
  )
}

export default FlexRightHeader;