import { useSelector } from "react-redux";
import Vibrant from 'node-vibrant';
import { useEffect, useState } from "react";
const ReceiverInfoTab = ({ isVisible }) => {
  const { currentChannel } = useSelector((state) => state.directMessage)
  const getPaletteData = async () => {
    const paletteData = await Vibrant.from(currentChannel.currentReceiver.profileImage).getPalette()
    return paletteData;
  }
  const [bgColor, setBgColor] = useState(null)
  useEffect(() => {
    setBgColor(getPaletteData())
    console.log(bgColor);
  }, [])

  return (
    <div style={{
      display: isVisible ? 'flex' : 'none',
      position: 'relative',
      width: '340px',
      height: '100%',
      backgroundColor: '#292b2f'
    }}>
      <div style={{ width: '100%', height: '120px', backgroundColor: bgColor }} />
      <div style={{
        position: 'absolute', top: '72px', left: '18px',
        borderRadius: '50%', border: '7px solid #292b2f', width: '80px', height: '80px', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        {currentChannel.currentReceiver.profileImage ?
          <div style={{ width: '80px', height: '80px' }}>
            <svg width='80' height='80' >
              <image href={currentChannel.currentReceiver.profileImage} height='80' width='80' x='0' y='0' />
            </svg>
          </div>
          : null}
      </div>
    </div>
  )
}

export default ReceiverInfoTab;