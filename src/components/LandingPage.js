import React from 'react';


/* Ensure the container takes up the full width of the viewport */
const container = {
    display: 'flex',
    width: '100%',
    height: '100vh', /* Make the container take full height of the viewport */
  }
  
  /* Left section will have a fixed width of 825px */
  const left = {
    flex: '0 0 43%', /* Prevent resizing */
    padding: '20px',
    boxSizing: 'border-box',
    borderTopRightRadius: '60px',
    borderBottomRightRadius: '60px'
  }
  
  /* Right section will take the remaining space */
const right = {
    flex: 1, /* Take remaining space */
    padding: '20px',
    boxSizing: 'border-box',
  }
  

function LandingPage() {
  return (
    <div style={container} className='bg-light-cream'>
        <div style={left} className='bg-orange'>left</div>
        <div style={right}>right</div>
    </div>
  )
}

export default LandingPage