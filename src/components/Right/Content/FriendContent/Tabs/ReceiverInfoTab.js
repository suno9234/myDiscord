import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { prominent } from 'color.js';

const ReceiverInfoTab = ({ isVisible }) => {
  const { currentChannel } = useSelector((state) => state.directMessage)

  const [bgColor, setBgColor] = useState(null)
  useEffect(() => {
    prominent(currentChannel.currentReceiver.profileImage, { amount: 1, format: 'hex' }).then(
      color => {
        setBgColor(color)
      }
    )
  }, [])

  return (
    <div style={{
      display: isVisible && bgColor ? 'flex' : 'none',
      flexDirection: 'column',
      position: 'relative',
      width: '340px',
      height: '100%',
      alignItems: 'center',
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
      <div style={{
        width: '308px',
        height: '200px',
        backgroundColor: '#18191c',
        borderRadius: '5px',
        margin: '16px',
        marginTop: '44px',
        padding: '0 12px 12px',
      }}>
        <div style={{
          paddingTop: '12px',
          fontSize: '20px',
          fontWeight: '600',
          lineHeight: '24px',
        }}>
          <span style={{
            color: 'white',

          }}>{currentChannel.currentReceiver.nickname}</span>
          <span style={{
            color: '#b9bbbe'
          }}>#{currentChannel.currentReceiver.tag}</span>
        </div>
        <div style={{
          width: '100%',
          height: '1px',
          marginTop: '12px',
          backgroundColor: '#40444b',
        }} />
        <div style={{
          paddingTop: '12px',
          color: 'white',
        }}>
          <div style={{
            fontSize: '12px',
            margin: '0 0 6px'
          }}>Discord 가입 시기:</div>
          <div style={{
            fontSize: '14px',
            color: '#dcddde'
          }}>12월 08, 2016 </div>
        </div>
        <div style={{
          width: '100%',
          height: '1px',
          marginTop: '12px',
          backgroundColor: '#40444b',
        }} />
        <div style={{
          paddingTop: '12px',
          color: 'white',
        }}>
          메모
        </div>
      </div>


    </div>
  )
}

export default ReceiverInfoTab;