import {ReactComponent as SearchSvg} from '../../../../imgs/svgs/search.svg';

const SearchBar = () => {
  return (
    <div style={{
      display: 'flex',
      margin : '16px 20px 8px 30px',
    }}>
      <div style={{
        display: 'flex',
        flex: '1',
        height: '36px',
        width: '100%',
        backgroundColor: '#202225',
        alignItems: 'center',
        borderRadius: '4px',
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
          height: '36px',
          backgroundColor: '#202225',
          padding: '0 8px',
          borderRadius: '4px',
          fontWeight: 'bold',
          boxSizing: 'border-box',
          color: 'gray',
          outline: 'none',
          border: 'none',

        }} placeholder='검색하기'>
        </input>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: '0',
          width: '32px',
          height: '20px',
          borderRadius: '4px 4px 4px 4px / 4px 4px 4px 4px',
        }}>
          <SearchSvg height='16px'/>
        </div>
      </div>
      <div style={{
        width: '20px',
        flexShrink: '0',
      }} />
    </div>
  )
}
export default SearchBar;