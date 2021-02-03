import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
    Posts,
    AddPost,
    AccountForm,
    Messages,
    EditPost, 
} from './components';
import { 
    BrowserRouter as Router,
    Route, 
    Link,
    Switch
} from 'react-router-dom';
import { fetchUsers } from './api/index';
import './bootstrap.css'
import './style.css'

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts'

const App = () => {
    
    const [token, setToken] = useState('');
    const [ user, setUser] = useState({});
    const [ posts, setPosts ] = useState([]);
    const [postId, setPostId] = useState(null);
    const [ content, setContent ] = useState([]);

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
        setPosts(data.data.posts)
        console.log('posts: ',data.data.posts)
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
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/messages">Messages</Link>
            <Link to="/login">Login</Link>
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
                token={token}/><hr/>
            <Posts 
                postsList={posts}
                token={token}
                setPosts={setPosts}
                content={content}
                setContent={setContent}/>
           
        </Route>
        <Route path ="/messages">
            <Messages 
                posts={posts}
                setPosts={setPosts}
                token={token}
                setToken={setToken}
                /> 
        </Route>        
        </div>)

}

ReactDOM.render (
    <Router>
    <App />
    </Router>,
    document.getElementById('root')
)