import React from 'react'
import { MdDeleteForever, MdUnarchive } from 'react-icons/md'

const NoteArchive = () => {
  return (
    <div className='note'>
      <span>Ini note pertama bro!!!</span>
      <div className='note-footer'>
        <MdUnarchive className='note-icon' size='1.3em' />
        <MdDeleteForever className='note-icon' size='1.3em' />
      </div>
    </div>
  )
}

export default NoteArchive