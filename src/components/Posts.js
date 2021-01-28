import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';




const Posts = (  props ) => {
    const { postsList } = props; 
    if (!postsList) {
        return <div> Not Here </div>
    }

    return <>
        <h1> 
            Posts 
            </h1>
            {
            postsList.map((post) => {
                return <>  
                    <div key={post.id}>
                        <h3>{ post.title }</h3>
                        <div>{ post.body }</div>
                    </div> 
                </>
            })}
            </>

                };
    
   
export default Posts;
