import React from 'react';





const MemberCardHeader = ({ headerName, number }) => {
  return (
    <div style={{
      display: 'flex',
      padding: '24px 8px 0 16px',
      fontSize: '12px',
      color: '#96989d',
      lineHeight: '16px',
      fontWeight: '600',
    }}
    >
      {headerName} - {number}
    </div>

  )
}
export default MemberCardHeader;