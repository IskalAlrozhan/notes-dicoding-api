import React, { useState, useEffect } from 'react'
import HeaderArchive from '../component/HeaderArchive'
import NoteslistArchive from '../component/NoteslistArchive'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ArchiveNote = () => {

  const [notesarc, setNotesarc] = useState([]);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');

    if (!accessToken) {
      navigate("/login")
    }
    // console.log(notesarc)
  }, [])

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    getNotesArchive(accessToken);
  }, [notesarc])

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    getUser(accessToken);
  }, [user])

  // console.log('disini = ', notesarc)

  const getNotesArchive = async (accessToken) => {
    try {
      const response = await axios.get('https://notes-api.dicoding.dev/v1/notes/archived', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      })

      setNotesarc(response.data.data)
      // console.log(response.data.data)

    } catch (error) {
      console.log("error =", error.response.data)
    }
  }

  const getUser = async (accessToken) => {
    try {
      const response = await axios.get('https://notes-api.dicoding.dev/v1/users/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      })

      setUser(response.data.data)
      // console.log(response.data.data)

    } catch (error) {
      console.log("error =", error.response.data)
    }
  }

  return (
    <div className='container'>
      <HeaderArchive user={user}/>
      <NoteslistArchive notesarc={notesarc}/>
    </div>
  )
}

export default ArchiveNote