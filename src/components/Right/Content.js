import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Card from './Card';
import SearchBar from './SearchBar';

const ScrollDiv = styled.div`
  overflow-y :scroll;
  &::-webkit-scrollbar{
    width: 8px;
  }
  &::-webkit-scrollbar-thumb{
    width: 14px;
    background-color : #2e3338 ; 
    border-radius:4px;
  }
`;
//  
const Content = () => {
  const { Friends } = useSelector((state) => state.user);

  return (
    <div style={{
      paddingTop: '13px',
      paddingLeft: '30px',
      backgroundColor: '#36393f',
      height: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <SearchBar />
      <div style={{
        display: 'flex',
        flexShrink: '0',
        height: '56px',
        alignItems: 'center',
        color: 'gray',
        fontWeight: 'bold',
      }}>
        온라인-{Friends.length}명
      </div>
      <ScrollDiv>
        {Friends.map((v, i) => <Card imgSrc={v.profileImage} name={v.name} />)}
      </ScrollDiv>

    </div>
  )
}
export default Content