import React, { useState } from 'react';
import { 
  Route, 
} from 'react-router-dom';
import { fetchUsers } from '../api';
import Posts from './Posts';

const AddPost = ({ postList, posts, setPosts, token, username, password }) => {
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
        setPosts([...posts, data?.data?.post]);
        setTitle('');
        setDescription('');
        setPrice('');
        setLocation('');
        setWillDeliver('');
    }

    return <> 
    
    <h2> 
      Make like Elsa and let it go: 
    </h2>
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