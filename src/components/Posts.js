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

const [ posts, setPosts ] = useState([]);

const Posts = () => {

    useState(() => {
        const fetchPosts = async () => { 
            const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts');
            const data = await response.json();
            console.log(data)
            setPosts(data);
        }
        fetchPosts();
    }, []);

    return <>
        <h1> 
            Posts 
            </h1>
            {
            posts.map(post => <div key={post.id}>
                <h3>{ post.title }</h3>
                <div>{ post.body }</div>
            </div>)}
            ); </> 

            }
    
   
export default Posts;
