import React from 'react'
import NoteArchive from './Note'

const NoteslistArchive = ({ notesarc }) => {
  return (
    <div className='notes-list'>
      {notesarc.map((notearc) => (
        <NoteArchive key={notearc.id} id={notearc.id} title={notearc.title} body={notearc.body} />
      ))}
    </div>
  )
}

export default NoteslistArchive