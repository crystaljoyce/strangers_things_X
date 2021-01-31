import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';




const Posts = (  props ) => {
    const [postId, setPostId ] = useState(null);
    const { postsList } = props; 
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
                        <h3>{ post.title } Price: {post.price} </h3>
                        <div>{ post.description }</div>
                        <div>Delivery Available: {post.willDeliver === true ? 'Yes' : 'No'}</div>
                        <div> {post.location === '[On Request]' ? '' : post.location}  </div>
                        { post.isAuthor === true ? <button type="button" className="btn" onClick={() => setPostId(post._id)}> Edit </button> : '' } 
                        {console.log('post location: ',post.isAuthor)}
        </div> 
                
            })}
            
            </>

                };
    
   
export default Posts;
