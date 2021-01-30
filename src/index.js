import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
    Login, 
    Register,
    Posts,
    AddPost
} from './components';
import { 
    BrowserRouter as Router,
    Route, 
    Link,
    Switch
} from 'react-router-dom';
import { fetchUsers } from './api/index';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts'

const App = () => {
    
    const [token, setToken] = useState('');
    const [ user, setUser] = useState('');
    console.log('token: ', token);
    const [ posts, setPosts ] = useState();

    const fetchUser = async () => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                }),
                const data = await response.json();
                console.log(data.data)
                setPosts(data.data)
                
            }
    
    useEffect(() => {
        fetchUser()
        console.log('user: ', user)
    }, [token])

    const fetchPosts = async () => { 
        
        const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
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
        <Login 
            setToken={ setToken }/> 
}       <Register 
            setToken={ setToken }/> 
            { console.log()}
        <Posts 
            postsList={posts}/>  
        <AddPost 
            setPosts={ setPosts } 
            posts={ posts }  />
        </div>)
}

ReactDOM.render (
    <Router>
    <App />
    </Router>,
    document.getElementById('root')
)