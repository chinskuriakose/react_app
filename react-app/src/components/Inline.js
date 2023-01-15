import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
  return (
    <div>
        <h2 className='error'>Error</h2>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline
