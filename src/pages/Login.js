import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        email: email,
        password: password
      };

      const requestBodyString = JSON.stringify(requestBody);

      const response = await axios.post('https://notes-api.dicoding.dev/v1/login', requestBodyString, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // console.log(response.data.data.accessToken)
      const accessToken = response.data.data.accessToken
      sessionStorage.setItem('accessToken', accessToken);
      navigate("/");
    } catch (error) {
      console.log("Error saat melakukan registrasi:", error.response.data.message);
    }
  }

  return (
    <div className='container'>
      <div className='bodyy'>
        <div className='logreg'>
          <h1>User Login</h1>
          <form onSubmit={Auth} className='login-form'>
            <div className='field'>
              <label className='label'>Email</label>
              <input type='text' className='input' placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='field'>
              <label className='label'>Password</label>
              <input type='password' className='input' placeholder='*****'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <div>
              {msg}
            </div> */}
            <div className='field'>
              <button >Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login