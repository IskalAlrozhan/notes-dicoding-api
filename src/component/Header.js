import React from 'react'


const Header = () => {
  return (
    <div className='header'>
      <h1>Notes App</h1>
      <div className='header-right'>
        <button className='toggle'>
          Archive Note
        </button>
      </div>
    </div>
  )
}

export default Header