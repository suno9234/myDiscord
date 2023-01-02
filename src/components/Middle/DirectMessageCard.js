import styled from 'styled-components';
export const Wrapper = styled.div`
  width : 215px;
  height : 44px;
  display : flex;
  margin-top : 2px;
  margin-bottom : 2px;
  background-color: #2f3136;
  padding : 18px 8px 4px 18px
  border-radius : 5px;
  align-items : center;
  cursor : pointer;
  flex-shrink : 0;
  font-size : 12px;
`
const DirectMessageCard = ({ img, name, size = '34px' }) => {
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
          color: '#96989d'
        }}>다이렉트 메시지</div>
        <div style={{
          color:'#96989d',
        }}>+</div>
      </div>

    </Wrapper>
  )
}
export default DirectMessageCard;