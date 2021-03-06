import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import {
    Link,
    useHistory} from 'react-router-dom'; 
import Posts from './Posts';




const Messages = ( props ) => {

    const { token, setUser, posts, user, content, setContent } = props; 
    const [ messages, setMessages ] = useState([]);

    const fetchUser = async () => {
        const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
           
            }),
            data = await response.json();
            console.log('user posts: ',data?.data?.posts)
            console.log("user messages : ", data?.data?.messages)
            setMessages(data?.data?.messages)
            
            setUser(data?.data)
            
        }

useEffect(() => {
    fetchUser()
    console.log('user posts: ', user)
    
}, [token])

const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('title, description: ', token)
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${post._id}/messages`, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
        'Authorization': `Bearer ${ token }`,
      },
      body: JSON.stringify({
        message:{
            content,
        }
      })
    });
    const data = await response.json();
    console.log('data: ', data);
    setPosts([data, ...posts]);
    setContent('');
    
}

    return <> 
    { token ? 
    <div><br/> 
         
         <div> {messages?.map((message, idx) => {
             return <>
                    <div key={idx}> <> <div> 
                        { message?.fromUser?.username 
                        ? <div> <br/> <h3> From user: { message.fromUser.username } </h3> 
                        <h4>Title: {message.post.title} </h4> 
                        <p>{message.content} </p> <hr/> <br/> </div>
                        :  '' }  
                        </div>
                        </>
                    </div>
             </>
         })}</div>
         </div>
         : 'You must be a registered User to read Messages'} 
         </>
            };
   
export default Messages;