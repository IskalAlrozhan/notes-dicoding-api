import React from 'react'
import { MdDeleteForever, MdArchive } from 'react-icons/md'

const Note = () => {
  return (
    <div className='note'>
      <span>Pertama!</span>
      <span>Ini note pertama bro!!!</span>
      <div className='note-footer'>
        <MdArchive className='note-icon' size='1.3em' />
        <MdDeleteForever className='note-icon' size='1.3em' />
      </div>
    </div>
  )
}

export default Note