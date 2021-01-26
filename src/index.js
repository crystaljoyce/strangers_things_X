import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { 
    Login, 
    Register
} from './components';

const App = () => {

    return <div>
        <Login /> 
        <Register /> 
    </div>
}

ReactDOM.render (
    <App />,
    document.getElementById('root')  
);