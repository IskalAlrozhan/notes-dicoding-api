import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  // function Register(e){
  //   e.preventDefault();
  //   const requestBody = {
  //           name: name,
  //           email: email,
  //           password: password
  //         };
  //   console.log(requestBody)
  // }

  const Register = async(e) => {
    e.preventDefault();
    try {
      const requestBody = {
        name: name,
        email: email,
        password: password
      };
      
      const requestBodyString = JSON.stringify(requestBody);
      
      await axios.post('https://notes-api.dicoding.dev/v1/register', requestBodyString, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      navigate("/login");
    } catch (error) {
      console.log("Error saat melakukan registrasi:", error.data.message);
    }
  }

  return (
    <div className='container'>
      <div className='bodyy'>
        <div className='logreg'>
          <h1>User Registrasi</h1>
          <form  onSubmit={ Register} className='login-form'>
          <div className='field'>
              <label className='label'>Nama</label>
              <input type='text' className='input' placeholder='John Doe' 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                // onChange={(e)=> console.log(e.target.value)}
              />
            </div>
            <div className='field'>
              <label className='label'>Email</label>
              <input type='text' className='input' placeholder='JohnDoe@email.com' 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className='field'>
              <label className='label'>Password</label>
              <input type='password' className='input' placeholder='*****' 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
            <div className='field'>
              <button >Registrasi</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register