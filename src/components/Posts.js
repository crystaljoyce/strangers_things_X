import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';




const Posts = (  props ) => {
    const [ setPostId ] = useState(null);
    const { postsList, postId, posts, setPosts } = props; 

    const handleDelete = async (postIdToDelete) => {
        console.log('postIdToDelete', postIdToDelete);
        const response = await fetch (`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${postIdToDelete}`,{
            method: "DELETE",

        });
        const data = await response.json();
        console.log("data: ", data);
        if (data) {
            const newPosts = postsList.filter(post => post.id !== postIdToDelete);
            setPosts(newPosts)
        }
    }

    if (!postsList) {
        return <div> </div>
    }

    

    return <>
    
        <h2> 
            Treasures to Behold:  
            </h2>
          
            {
            postsList.map((post, index) => {
                return <div key={index}>
                        <h3>{ post.title }</h3> <h4>Price: {post.price} </h4>
                        <h4> Offered by user: {post.author.username}</h4>
                        <div>{ post.description }</div>
                        <div>Delivery Available: {post.willDeliver === true ? 'Yes' : 'No'}</div>
                        <div> {post.location === '[On Request]' ? '' : post.location}  </div>
                        <div> {post.messages}</div>
                        {console.log(post.messages)}
                        <div>
                        {post.author.username === 'MotherMonster'
                        ? <button
                        type='button'
                        className='btn'
                        onClick={() => handleDelete()}> Delete </button>
                        : '' }
                        </div>
                        <div>
                        {post.author.username === 'MotherMonster'
                        ? <button> Edit </button>
                        : '' }
                        </div>
                         </div> 
                })
            }

            </>

                };
    
   
export default Posts;
