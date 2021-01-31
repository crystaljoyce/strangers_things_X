import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
    Login, 
    Register,
    Posts,
    AddPost,
    AccountForm
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
    const [ user, setUser] = useState({});
    // console.log('token: ', token);
    const [ posts, setPosts ] = useState([]);


    const fetchUser = async () => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
               
                }),
                data = await response.json();
                console.log(data.data)
                setUser(data?.data)
                
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
        {user?.username && <div>Hello {user?.username}</div>}
        <div className="topnav">
        <a className="active" href="/">Home</a>
        <a href="/posts">Posts</a>
        <a href="Profile">Profile</a>
        <a href="/login">Login</a>
    </div>

        <Route path="/login">
            <AccountForm 
                type={'login'} 
                setToken={setToken} 
                setUser={setUser}
                />
        </Route>
        <Route path="/register">
            <AccountForm 
                type={'register'} 
                setToken={setToken} 
                setUser={setUser}/>
        </Route>
        <Route path="/Posts">
            <AddPost 
                setPosts={ setPosts } 
                posts={ posts } 
                setToken={setToken} 
                token={token}/>
            <Posts 
                postsList={posts}/>  

        </Route>
        

            {/* {
                posts.map(post => <div key={post.id}>
                    <h3>{post.title}</h3>
                    <div>{post.body}</div>
                </div>)
            } */}
        
        </div>)
}

// return <>
// <h1>
//   Strangers Things
// </h1>
// {user.username && <div>Hello {user.username}</div> }
// <Route path="/login">
//   <AccountForm type={'login'} setToken={setToken} setUser={setUser}/>
// </Route>
// <Route path="/register">
//   <AccountForm type={'register'} setToken={setToken} setUser={setUser}/>
// </Route>
// </>


ReactDOM.render (
    <Router>
    <App />
    </Router>,
    document.getElementById('root')
)