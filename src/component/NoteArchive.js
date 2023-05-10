import axios from 'axios';
import React from 'react'
import { MdDeleteForever, MdUnarchive } from 'react-icons/md'

const NoteArchive = ({ id, title, body }) => {

  const accessToken = sessionStorage.getItem('accessToken');

  // const handleUnarchive = async () => {
  //   try {
  //     const response = await axios.post(`https://notes-api.dicoding.dev/v1/notes/${id}/unrchive`, {}, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`
  //       },
  //     });

  //     console.log(response.data);

  //   } catch (error) {
  //     console.log('Error:', error.response.data);
  //   }
  // };

  return (
    <div className='note' key={id}>
      <div className='note-content'>
        <span style={{ marginBottom: '5px', borderBottom: '1px solid grey' }}>{title}</span>

        <span>{body}</span>
      </div>

      <div className='note-footer'>
        <MdUnarchive className='note-icon' size='1.3em' />
        <MdDeleteForever className='note-icon' size='1.3em' />
      </div>
    </div>
  )
}

export default NoteArchive