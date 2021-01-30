import React, { useState } from 'react';
import { 
  Route, 
} from 'react-router-dom';

const Register = ({setToken}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
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
  <Route path="/Register">
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}placeholder="username"></input>
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}placeholder="password"></input>
      <button type="submit">Register</button>
    </form>
    </Route>
  </>
}

export default Register;