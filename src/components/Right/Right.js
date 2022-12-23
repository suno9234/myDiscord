import Content from "./Content"
import RightHeader from "./RightHeader"


const Right = () => {
  return (
    <div style={{ flex: '1', display: 'flex', flexDirection: 'column' ,height:'50px',width:'100%'}}>
      <RightHeader />
      <Content />
    </div>
  )
}
export default Right