import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Noteslist from '../component/Noteslist'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');

    if (!accessToken) {
      navigate("/login")
    }

    getUser(accessToken);

  }, [])

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    getNotes(accessToken);
  }, [notes])

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    getUser(accessToken);
  }, [user])
  


  // console.log("disini = ", user)

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
      <Header user={user}/>
      <Noteslist notes={notes} />
    </div>
  )
}

export default Home