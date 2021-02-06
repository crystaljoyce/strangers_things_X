import React, { useState } from 'react';
import { 
  Route, 
} from 'react-router-dom';
import { fetchUsers } from '../api';
import Posts from './Posts';

const EditPost = ( props ) => {
    const [posts, title, description, price, location, willDeliver ] = props; 

    const handleEdit = async (postIdToEdit) => {
        console.log(postIdToEdit)
        event.preventDefault(); 
        const response = await fetch (`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${postIdToEdit}`,{
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
}


  export default EditPost; 