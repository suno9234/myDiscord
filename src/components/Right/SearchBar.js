import searchIcon from '../../imgs/search.png';

const SearchBar = () => {
  return (
    <div style={{
      display: 'flex',
      flex: '0',
      height: '32px',
      width: '100%',
      backgroundColor: '#202225',
      alignItems: 'center',
      borderRadius: '4px 4px 4px 4px / 4px 4px 4px 4px',
      minWidth: '0',
    }}>
      <input style={{
        flexGrow: '1',
        flexShrink: '1',
        minWidth: '0',
        maxWidth: '100%',
        width: '10px',
        fontSize: '16px',
        lineHeight: '32px',
        height: '30px',
        backgroundColor: '#202225',
        padding:'0 8px',
        borderRadius: '4px 4px 4px 4px / 4px 4px 4px 4px',
        fontWeight:'bold',
        boxSizing: 'border-box',
        color: 'gray',
        outline:'none',
        border:'none',
        
      }} placeholder='검색하기'>
      </input>
      <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexShrink: '0',
        width: '32px',
        height: '20px',
        borderRadius: '4px 4px 4px 4px / 4px 4px 4px 4px',
      }}>
        <img src={searchIcon} alt='searchIcon' style={{
          height:'16px',
        }} />
      </div>

    </div>



  )
}
export default SearchBar;