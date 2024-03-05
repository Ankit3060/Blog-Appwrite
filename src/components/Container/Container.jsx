import React from 'react'

//This is container component which is used to wrap the content of the page
function Container() {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 '>
      {children}
    </div>
  )
}

export default Container