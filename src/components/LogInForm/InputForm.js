
const InputForm = ({ header, bgColor, value, onChangeValue, type = "text", isRequired = false }) => {
  return (
    <div style={{
      marginTop: '10px',
    }}>
      <label style={{
        display: 'block',
        fontSize: '12px',
        lineHeight: '16px',
        color: '#b9bbbe',
        marginBottom: '8px',
        fontWeight: '700',
      }}>
        <div style={{
          marginBottom: '8px',
        }}>
          {header}
          {isRequired && <span style={{
            color: '#ed4245',
            paddingLeft: '4px',
            lineHeight: '16px',
          }}>
            *
          </span>}
        </div>

        <input style={{
          padding: '10px',
          height: '40px',
          width: '100%',
          fontSize: '16px',
          borderRadius: '3px',
          backgroundColor: bgColor === 'black' ? "#202225" : '#e8f0fe',
          color: bgColor === 'black' ? "white" : 'black',
          outline: '0',
        }}
          placeholder=""
          autoCorrect="off"
          spellCheck="false"
          maxLength={999}
          required
          type={type}
          value={value}
          onChange={onChangeValue}>
        </input>
      </label>
    </div>
  )
}

export default InputForm;