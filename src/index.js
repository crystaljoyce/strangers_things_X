import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
    Posts,
    AddPost,
    AccountForm,
    Messages,
    EditPost, 
    Search,
    PostView,
    Profile,
} from './components';
import { 
    BrowserRouter as Router,
    Route, 
    Link,
    Switch
} from 'react-router-dom';
import { fetchUsers } from './api/index';
import PostSingle from './components/PostSingle';


const BASE_URL = 'https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts'

const App = () => {
    
    const [token, setToken] = useState('');
    const [ user, setUser] = useState({});
    const [ posts, setPosts ] = useState([]);
    const [postId, setPostId] = useState(null);
    const [ content, setContent ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState('');


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
                'Authorization': token ? `Bearer ${token}` : undefined
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
            {user?.username && <div>Hello, {user?.username}! </div>}
            <ul className="nav justify-content-center">
            <nav className="nav" role="navigation">
            <li className='nav item'>
            <Link to="/" className="nav-link" aria-current="page">Home</Link></li>
            <li className='nav item'>
            <Link to="/posts" className="nav-link" aria-current="page">Posts</Link></li>
            <li className='nav item'>
            <Link to="/profile" className="nav-link" aria-current="page">Profile</Link></li>
            <li className='nav item'>
            <Link to="/messages" className="nav-link" aria-current="page">Messages</Link></li>
            <li className='nav item'>
            <Link to="/login" className="nav-link" aria-current="page">Login</Link></li>
            </nav>
            </ul>

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
            { token 
            ?  <div> <AddPost 
                setPosts={ setPosts } 
                posts={ posts } 
                setToken={setToken} 
                token={token}/><hr/>
                </div>
            : '' } 
            <Search 
                posts={posts}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}/>
            <Posts 
                postsList={posts}
                token={token}
                setPosts={setPosts}
                content={content}
                setContent={setContent}
                user={user}/>
           
        </Route>
        <Route exact path="/posts/:id">
            <PostSingle 
                posts={posts}/> 
        </Route>
        <Route path ="/messages">
            { token 
            ? <div> <Messages 
                posts={posts}
                setPosts={setPosts}
                token={token}
                setToken={setToken}
                setUser={setUser}
                /> </div>
            : 'You must be a registered User to view Messages' } 
        </Route>  
        <Route path='/profile'>
            <Profile    
                user={user}
                setUser={setUser}
                token={token}
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