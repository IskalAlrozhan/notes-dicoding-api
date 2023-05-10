import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AddNote = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');

    if (!accessToken) {
      navigate("/login")
    } else {
      setAccessToken(accessToken);
    }

  }, [])

  const CreateNote = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        title: title,
        body: body
      };

      // const requestBodyString = JSON.stringify(requestBody);

      const response = await axios.post('https://notes-api.dicoding.dev/v1/notes', requestBody, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      console.log(response)

    } catch (error) {
      console.log("Error saat menambahkan note:", error.response.data);
      console.log(title)
      console.log(body)
    }
  }

  return (
    <div className='note new'>
      <textarea
        rows="1"
        cols="10"
        placeholder='masukin title bro'
        style={{ marginBottom: '5px', borderBottom: '1px solid grey' }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      >
      </textarea>

      <textarea
        rows="8"
        cols="10"
        placeholder='masukin teks bro'
        value={body}
        onChange={(e) => setBody(e.target.value)}
      >

      </textarea>
      <div className='note-footer'>
        <button className='save' onClick={CreateNote}>Save</button>
      </div>
    </div>
  )
}

export default AddNote