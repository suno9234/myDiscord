import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";

const Header = () => {
  return (
    <div style={{ display: 'flex', backgroundColor: 'green', width: '100%', height: '49px' }}>
      <LeftHeader />
      <RightHeader />
    </div>
  )
}
export default Header;