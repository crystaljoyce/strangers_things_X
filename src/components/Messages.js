import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const Messages = () => {

    const fetchPosts = async () => { 
        
        const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const data = await response.json();
        console.log('for messages', data.data.posts)
        return data.data.posts
    }
   
    useEffect(() => {
        fetchPosts()
    }, []);

    return <>
    <h1> Messages regarding your trash or future treasures</h1>
    </>

}

export default Messages; 