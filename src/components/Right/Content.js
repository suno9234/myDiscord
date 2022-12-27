import { useSelector } from 'react-redux';
import Card from './Card';
import SearchBar from './SearchBar';

const Content = () => {
  const { Friends } = useSelector((state) => state.user);

  return (
    <div style={{
      paddingTop: '13px',
      paddingLeft: '30px',
      paddingRight: '20px',
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
      {Friends.map((v, i) => <Card imgSrc={v.profileImage} name={v.name} />)}
    </div>
  )
}
export default Content