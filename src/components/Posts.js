import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';




const Posts = (  props ) => {
    
    const { postsList } = props; 
    if (!postsList) {
        return <div> </div>
    }

    return <>
    
        <h2> 
            Treasure to Behold:  
            </h2>
            {
            postsList.map((post, index) => {
                return <div key={index}>
                        <h3>{ post.title } {post.price} </h3>
                        <div>{ post.description }</div>
                    </div> 
                
            })}
            
            </>

                };
    
   
export default Posts;
