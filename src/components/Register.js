import React, { useState } from 'react';

const Register = ({setToken}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/register', { // or use the `/users/login` route for login!
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    });
    const {data} = await response.json();
    const token = data?.token;
    setToken(token);
    setUsername('');
    setPassword('');
  }

  return <>
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
      <input 
      type="text" value={username} 
      onChange={(ev) => setUsername(ev.target.value)}placeholder="username"
      required={ true }>
      </input>
      <input 
      type="password" 
      value={password} onChange={(ev) => setPassword(ev.target.value)}placeholder="password"
      minLength={ 8 }
      required={ true }>
      
      </input>
      <button type="submit">Register</button>
    </form>
  </>
}

export default Register;