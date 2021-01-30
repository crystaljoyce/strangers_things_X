import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';




const Posts = (  props ) => {
    const { postsList } = props; 
    if (!postsList) {
        return <div> </div>
    }

    return <>
    <Route path="/posts">
        <h2> 
            Posts 
            </h2>
            {
            postsList.map((post) => {
                return <>  
                    <div key={post.id}>
                        <h3>{ post.title }</h3>
                        <div>{ post.body }</div>
                    </div> 
                </>
            })}
            </Route>
            </>

                };
    
   
export default Posts;
