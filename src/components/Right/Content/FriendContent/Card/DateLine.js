
const DateLine = ({dateStr}) => {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', marginLeft: '16px', marginRight: '16px', color: '#a3a6aa'
      , fontSize: '12px', fontWeight: '600'
    }}>
      <div style={{ display: 'flex', flexGrow: '1', backgroundColor: '#40444b', height: '1px' }}></div>
      {dateStr}
      <div style={{ backgroundColor: '#40444b', height: '1px', display: 'flex', flexGrow: '1', }}></div>
    </div>
  )
}
export default DateLine;