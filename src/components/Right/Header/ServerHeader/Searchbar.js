import { ReactComponent as SearchSvg } from '../../../../imgs/svgs/search.svg';
const SearchBar = () => {
  return (
    <div style={{
      display: 'flex',
      margin: '0 8px',
      height: '24px',
      width: '144px',
      transition: 'width .25s',
      borderRadius: '4px',
      boxShadow: 'none',
      overflow: 'hidden',
      padding: '0 2px',
      backgroundColor: '#202225',
      alignItems: 'center',
    }}>
      <div style={{
        display:'flex',
        marginLeft:'auto',
        width:'16px',
        color :'#96989d',
        marginRight:'4px',
      }}>
        <SearchSvg width='16px' />
      </div>

    </div>
  )
}

export default SearchBar;