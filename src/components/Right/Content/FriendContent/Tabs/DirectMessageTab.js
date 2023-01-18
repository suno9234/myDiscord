import { ReactComponent as UploadSvg } from '../../../../../imgs/svgs/upload-button.svg';
import { ReactComponent as UploadStickerSvg } from '../../../../../imgs/svgs/upload-sticker.svg';
import { ReactComponent as UploadGifSvg } from '../../../../../imgs/svgs/upload-gif.svg';

const DirectMessageTab = () => {
  return (
    <div style={{
      display: 'flex',
      height: '100%',
    }}>
      <form style={{
        display: 'flex',
        width: '100%',
        height: '68px',
        marginTop: 'auto',
        padding: '0 16px ',
      }}>
        <div style={{
          display: 'flex',
          backgroundColor: '#40444b',
          width: '100%',
          borderRadius: '8px',
          marginBottom: '24px',
        }}>
          <button style={{
            width: '56px',
            height: '44px',
            padding: '10px 16px',
          
          }} type="button" >
            <div>
              <UploadSvg fill="#b9bbbe" />
            </div>
          </button>
          <input style={{outline:'0'}} placeholder="메시지를 보내세요" />
          <div style={{ display: 'flex', alignItems: 'center', height: '44px', width: '150px', marginLeft: 'auto', }}>
            <div style={{
              margin : '0px 4px',
              padding : '4px',
            }}>
              <UploadGifSvg width='24px' height='24px' />
            </div>
            <div style={{
              margin : '0px 4px',
              padding : '4px',
            }}>
              <UploadStickerSvg width='20px' height='20px' />
            </div>

          </div>

        </div>
      </form>
    </div>
  )
}
export default DirectMessageTab;