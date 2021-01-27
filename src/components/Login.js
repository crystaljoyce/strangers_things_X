import React, { useState } from 'react';
import { 
  Route, 
} from 'react-router-dom';

const Login = ({setToken}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log('username: ', username);
    console.log('password: ', password);
    const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/login', {
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
    //localStorage.setItem(token, data.data.token);
  }

  return <>
  <Route path="/login">
    <h2 id="Login">Login</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(ev) => setUsername(ev.target.value)}placeholder="username"></input>
      <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)}placeholder="password"></input>
      <button type="submit">Login</button>
    </form>
    </ Route> 
  </>
}

export default Login;