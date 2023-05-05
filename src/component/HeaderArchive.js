import React from 'react'


const HeaderArchive = () => {
  return (
    <div className='header'>
      <h1>Notes App</h1>
      <div className='header-right'>
        <button className='toggle'>
          Home
        </button>
        <button className='toggle'>
          Add Note
        </button>
      </div>
    </div>
  )
}

export default HeaderArchive