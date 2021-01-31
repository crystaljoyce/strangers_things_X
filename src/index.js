import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
    Login, 
    Register,
    Posts,
    AddPost,
    AccountForm,
    Messages,
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
    const [ posts, setPosts ] = useState([]);
    const [postId, setPostId] = useState(null);


    const fetchUser = async () => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
               
                }),
                data = await response.json();
                console.log('user: ',data?.data)
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
        console.log('posts in fetchPosts: ', data.data.posts)
        setPosts(data.data.posts)
        setPostId(data?.data?.posts?._id)
        return data.data.posts
    }
   
    useEffect(() => {
        fetchPosts()
    }, []);



    const handleEdit = async (event) => {
        event.preventDefault(); 
        const response = await fetch (`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts${postId}`,{
        method: 'PATCH', 
        headers: { 
          'Content-type': "Application/json",
        },
        body: { 
          title, 
          description,
          price, 
          location,
          willDeliver,
        }
      })
      const data = await response.json(); 
      console.log('data for update: ', data)
      if ( data && data.title) {
        const newPosts = postsList.map( post => {
          if(post._id === postId) {
            return data;
          } else {
            return post; 
          }
        });
        setPosts(newPosts);
      setTitle('');
      setDescription('');
      setPrice('');
      setLocation('');
      setPostId(null);
      setWillDeliver('');
    
      }
      }

    return (<div>      
        {user?.username && <div>Hello, {user?.username}</div>}
        <div className="topnav">
        <a className="active" href="/">Home</a>
        <a href="/posts">Posts</a>
        <a href="/profile">Profile</a>
        <a href="/messages">Messages</a>
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
        <Route path ="/Messages">
                <Messages 
                    token={token}/> 
        </Route>
                

        </Route>
        
        </div>)

}

ReactDOM.render (
    <Router>
    <App />
    </Router>,
    document.getElementById('root')
)