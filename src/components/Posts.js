import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import {
    Link,
    } from 'react-router-dom'; 
import EditPost from './EditPost';
import { MessagesSend } from './MessagesSend';
import { user } from './index'




const Posts = ( props ) => {
    const [ setPostId ] = useState(null);
    const { postsList, postId, posts, setPosts, token, setToken, content, setContent, user } = props; 
    

    const handleDelete = async (postIdToDelete) => {
        console.log('postIdToDelete', postIdToDelete);
        const response = await fetch (`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${postIdToDelete}`,{
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        console.log("data: ", data);
        if (data) {
            const newPosts = postsList.filter(post => post._id !== postIdToDelete);
            setPosts(newPosts)
        }
    }


  const handleSubmit = async (postIdToRespond) => {
  console.log(postIdToRespond)
  //event.preventDefault();
  const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${postIdToRespond}/messages`, {
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
  console.log(data)
  console.log('Messages Content: ', data);
  setContent(data)
  }

    if (!postsList) {
        return <div> </div>
    }
    return <>
        <h2> Feast your eyes:   </h2>
          {
            postsList.map((post, index) => {
            return <div key={index}>
              <div className="card" >
              <div className="card-body">
              <h3 className="card-title">{ post?.title } </h3> <h4>Price: {post?.price} </h4>
              <h4> Offered by user: {post?.author?.username}</h4>
              <div>{ post?.description }</div>
              <div>Delivery Available: {post?.willDeliver === true ? 'Yes' : 'No'}</div>
              <div> {post?.location === '[On Request]' ? '' : post?.location}  </div>
              <div> {post?.messages}</div>
              <div>
              {post?.author.username === user?.username
              ? <button
              type='button'
              className='btn'
              onClick={() => handleDelete(post._id)}> Delete </button>
              : '' }
              </div>
              <div>
              {post?.author?.username === user?.username
              ? <button
              type='button'
              className='btn'
              onClick={() => handleEdit(post._id)}> Edit </button>
              : '' }
              </div>
              
              <button
              type="button"
              className="btn"
              onClick={() => handleSubmit(post?._id)}> Respond </button>
              { status = "active" 
              ?
              <form> 
                <input placeholder="type your message to the seller here ... "onChange={(ev) => setContent(ev.target.value)}> 
                </input>
              </form> 
              : ''} 
              </div>
              </div>
                </div> 
                })
            }

            </>

                };
    
   
export default Posts;