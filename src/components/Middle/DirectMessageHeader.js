import styled from 'styled-components';
const Wrapper = styled.div`
  width : 215px;
  height : 44px;
  display : flex;
  margin-top : 2px;
  margin-bottom : 2px;
  background-color: #2f3136;
  padding : 18px 8px 4px 18px
  border-radius : 5px;
  align-items : center;
  cursor : default;
  flex-shrink : 0;
  font-size : 12px;
  color: #96989d;
  &:hover{
    color : white;
  }
`
const DirectMessageHeader = ({ img, name, size = '34px' }) => {
  return (
    <Wrapper>
      <div style={{
        display: 'flex',
        width:'100%',
        alignItems:''
      }}>
        <div style={{
          flexGrow:'1',
          fontSize: '12px',
        }}>다이렉트 메시지</div>
        <div style={{
          cursor : 'pointer',
        }}>+</div>
      </div>

    </Wrapper>
  )
}
export default DirectMessageHeader;