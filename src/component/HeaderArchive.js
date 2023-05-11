import React from 'react'
import { useNavigate } from 'react-router-dom'


const HeaderArchive = ({user}) => {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <h1>Notes App</h1>
      <span>Selamat Datang {user.name}</span>
      <div className='header-right'>
        <button className='toggle'  onClick={()=> navigate("/")}>
          Home
        </button>
      </div>
    </div>
  )
}

export default HeaderArchive