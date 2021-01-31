import React, { useState } from 'react';
import { 
  Route, 
} from 'react-router-dom';
import { fetchUsers } from '../api';
import Posts from './Posts';

const AddPost = ( { posts, setPosts, token, username, password }) => {
const [title, setTitle] = useState([]);
const [description, setDescription] = useState([]);
const [price, setPrice] = useState([]);
const [location, setLocation] = useState([]);
const [willDeliver, setWillDeliver] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('title, description: ', token)
        const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts', {
          method: 'POST',
          headers: {
            'Content-type': 'Application/json',
            'Authorization': `Bearer ${ token }`,
          },
          body: JSON.stringify({
            post:{
            title,
            description,
            price,
            location, 
            willDeliver,
            }
          })
        });
        const data = await response.json();
        console.log('data: ', data);
        setPosts([data, ...posts]);
        setTitle('');
        setDescription('');
        setPrice('');
        setLocation('');
        setWillDeliver('');
    }

    return <> 
    
    <h3> 
      Git rid of that trash: 
    </h3>
    <form onSubmit={handleSubmit}>
      <input 
          type="text"
          placeholder="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}>
      </input>
      <input 
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}>
      </input> <br></br>
      <input 
          type="text"
          placeholder="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}>
      </input>
      <input 
          type="text"
          placeholder="Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}>
      </input>
      <input 
          type="toggle"
          placeholder="willDeliver"
          value={willDeliver}
          onChange={(event) => setWillDeliver(event.target.value)}>
      </input>
      <button 
          type="submit"
          className="btn">Buh Bye Trash
      </button>
    </form>
    
    </>

}

const EditPost = ({ title, description, price, location, willDeliver }) => {

  const handleEdit = async (event) => {
    event.preventDefault(); 
    const response = await fetch (`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts${postId}`,{
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
    const newPosts = posts.map( post => {
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
  return <> 
    
  <h3> 
    Update your trash: 
  </h3>
  <form onSubmit={handleSubmit}>
    <input 
        type="text"
        placeholder="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}>
    </input>
    <input 
        type="text"
        placeholder="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}>
    </input> <br></br>
    <input 
        type="text"
        placeholder="price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}>
    </input>
    <input 
        type="text"
        placeholder="Location"
        value={location}
        onChange={(event) => setLocation(event.target.value)}>
    </input>
    <input 
        type="toggle"
        placeholder="willDeliver"
        value={willDeliver}
        onChange={(event) => setWillDeliver(event.target.value)}>
    </input>
    <button 
        type="submit"
        className="btn">Buh Bye Trash
    </button>
  </form>
  
  </>
  
}
export default AddPost;