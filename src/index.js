import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { 
    Login, 
    Register
} from './components';

const App = () => {
    
    const [token, setToken] = useState('');
    console.log('token: ', token);

    return <div>
        <Login 
            setToken={ setToken }/> 
        <Register 
            setToken={ setToken }/> 
    </div>
}

ReactDOM.render (
    <App />,
    document.getElementById('root')  
);