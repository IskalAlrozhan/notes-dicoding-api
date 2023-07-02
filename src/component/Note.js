import axios from 'axios';
import React from 'react'
import { MdDeleteForever, MdArchive, MdOpenInFull } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

const Note = ({ id, title, body }) => {

  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem('accessToken');

  const handleArchive = async () => {
    try {
      const response = await axios.post(`https://notes-api.dicoding.dev/v1/notes/${id}/archive`, {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      });

      console.log(response.data);

    } catch (error) {
      console.log('Error:', error.response.data);
    }
  };

  const handleDeleteNote = async () => {
    try {
      const response = await axios.delete(`https://notes-api.dicoding.dev/v1/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (

  <div className='note' key={id}>
    <div className='note-content'>
      <span style={{ marginBottom: '5px', borderBottom: '1px solid grey' }}>{title}</span>

      <span>{body}</span>
    </div>

    <div className='note-footer'>
      <MdArchive className='note-icon' size='1.3em' onClick={handleArchive} />
      <MdDeleteForever className='note-icon' size='1.3em' onClick={handleDeleteNote} />
      <MdOpenInFull className='note-icon' size='1.3em' onClick={()=> navigate(`/DetailNote/${id}`)}/>
    </div>
  </div>
  )
}

export default Note