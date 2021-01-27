import React, { useState } from 'react';
import { 
  Route, 
} from 'react-router-dom';

const Register = ({setToken}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log('username: ', username);
    console.log('password: ', password);
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
    console.log('response: ', response);
    const {data} = await response.json();
    console.log('{data}: ', {data});
    const token = data?.token;
    console.log('token: ', token);
    setToken(token);
    setUsername('');
    setPassword('');
  }

  return <>
  <Route path="/Register">
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(ev) => setUsername(ev.target.value)}placeholder="username"></input>
      <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)}placeholder="password"></input>
      <button type="submit">Register</button>
    </form>
    </Route>
  </>
}

export default Register;