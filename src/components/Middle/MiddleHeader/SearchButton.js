import { Button } from 'antd';

const SearchButton = () => {
  return (
    <Button
      block
      style={{
        backgroundColor: '#202225',
        border: 'none',
        width: '220px',
        height: '30px',
        color:'white',
      }}
    >대화 찾기 또는 시작하기</Button>

  )
}

export default SearchButton;