import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
    Login, 
    Register,
    Posts
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
    const [ posts, setPosts ] = useState();

    const fetchPosts = async () => { 
        
        const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts');
        const data = await response.json();
        console.log(data.data.posts)
        setPosts(data.data.posts)
        return data.data.posts
    }
   
    useEffect(() => {
        fetchPosts()
        console.log('posts: ',)
    }, []);

   // useEffect(() => {  
        //fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me', {
            //method: 'GET',
            //headers: {
              //'Content-Type': 'application/json',
              //'Authorization': `Bearer ${ token }`
           // },
            //body: JSON.stringify( { token } )
           // } ), [token]})
    return (<div>
        {
        //<Login setToken={ setToken }/> 
}       <Register setToken={ setToken }/> 
        { console.log()}
        <Posts postsList={posts}/>      
        </div>)
}

ReactDOM.render (
    <Router>
    <App />
    </Router>,
    document.getElementById('root')
)