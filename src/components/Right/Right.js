import Content from "./Content"
import RightHeader from "./RightHeader/RightHeader";


const Right = () => {
  return (
    <div style={{ flex: '1', display: 'flex', flexDirection: 'column' ,height:'100%'}}>
      <RightHeader />
      <Content />
    </div>
  )
}
export default Right