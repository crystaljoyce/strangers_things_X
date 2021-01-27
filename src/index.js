import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
    Login, 
    Register
} from './components';
import { 
    BrowserRouter as Router,
    Route, 
    Link,
    Switch
} from 'react-router-dom';
import { index } from './api/index';

const App = () => {
    
    const [token, setToken] = useState('');
    const [ user, setUser] = useState('');
    console.log('token: ', token);

    useEffect(() => {  
        fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer { token }'
            },
            body: JSON.stringify( { token } )
            } ), [token]})
    return <div>
        <Router>
        <Login 
            setToken={ setToken }/> 
        <Register 
            setToken={ setToken }/> 
        <Posts /> 
            </Router>
    </div>
}

ReactDOM.render (
    <App />, 
    document.getElementById('root')
)