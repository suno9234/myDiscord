import SearchBar from './SearchBar';

const Content = ()=>{
  const onlineMember = 11;

  return(
    <div style={{
      paddingTop:'13px',
      paddingLeft:'30px',
      paddingRight:'20px',
      backgroundColor:'#36393f',
      height:'100%',
      overflow:'hidden',
      display:'flex',
      flexDirection:'column',
    }}>
      <SearchBar/>
      <div style={{
        display:'flex',
        height:'40px',
        alignItems:'center'
      }}>온라인-{onlineMember}명</div>
    </div>
  )
}
export default Content