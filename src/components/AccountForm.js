  
import React, { useState } from 'react';
import {
  Link,
  useHistory} from 'react-router-dom'; 

const AccountForm = ({type, setToken, setUser}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const title = type === 'login' ? 'Login' : 'Register';
  const oppositeTitle = type === 'login' ? 'You can register by clicking here.  ' : 'Login';
  const oppositeType = type === 'login' ? 'Register' : 'Login';
  const history = useHistory();


  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log('username: ', username);
    console.log('password: ', password);
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/${type}`, { // or use the `/users/login` route for login!
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
    if (token) {
      setToken(token);
      const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const {data} = await response.json();
      console.log('data: ', data);
      setUser(data);
      setUsername('');
      setPassword('');
      history.push('/posts')
    }
    }

  return <>
    <h2>{title}</h2>
    <form onSubmit={handleSubmit}>
    <div className="row">
  <div className="col">
      <input 
      type="text" 
      className="form-control" 
      placeholder="user name" 
      aria-label="user name"
      value={username} 
      onChange={(ev) => setUsername(ev.target.value)}placeholder="username"
      required={true}
      minLength={5}></input>
      </div>
      <div className="col">
      <input 
      type="password" 
      className="form-control" 
      placeholder="password" aria-label="password"
      value={password} 
      onChange={(ev) => setPassword(ev.target.value)}placeholder="password"
      required={true}
      minLength={8}></input>
      <button type="submit">{title}</button>
      </div> </div> 
    </form>    
    <Link to={`/${oppositeType}`}>{oppositeTitle}</Link>
  </>
}

export default AccountForm;