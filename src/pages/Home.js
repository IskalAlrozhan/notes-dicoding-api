import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Noteslist from '../component/Noteslist'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

  const [notes, setNotes] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');

    console.log(accessToken)

    if(!accessToken) {
      navigate("/login")
    }

    getNotes();

  }, [])
  
  const getNotes = async(accessToken) => {
    try {
      const response = await axios.get('https://notes-api.dicoding.dev/v1/notes', {
        headers: { 
          Authorization: `Bearer ${accessToken}` 
        },
      })

      console.log(response.data.message)
      
    } catch (error) {
        console.log(error.response.data)
    }
  }

  return (
    <div className='container'>
        {/* <div>
          Selamat Datang {user}
        </div> */}
        <Header/>
        <Noteslist />
    </div>
  )
}

export default Home