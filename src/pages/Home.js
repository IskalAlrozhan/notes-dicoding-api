import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Noteslist from '../component/Noteslist'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');

    if (!accessToken) {
      navigate("/login")
    }

  }, [])

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    getNotes(accessToken);
  }, [notes])
  

  // console.log("disini = ", notes)

  const getNotes = async (accessToken) => {
    try {
      const response = await axios.get('https://notes-api.dicoding.dev/v1/notes', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      })

      setNotes(response.data.data)

    } catch (error) {
      console.log("error =", error.response.data)
    }
  }

  

  return (
    <div className='container'>
      {/* <div>
          Selamat Datang {user}
        </div> */}
      <Header />
      <Noteslist notes={notes} />
    </div>
  )
}

export default Home