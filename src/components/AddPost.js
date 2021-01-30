import React, { useState } from 'react';
import { 
  Route, 
} from 'react-router-dom';

const AddPost = ( { posts, setPosts }) => {
const [title, setTitle] = useState([]);
const [description, setDescription] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('title, description: ', title, description)
        //console.log('postId: ', postId)
        const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts', {
          method: 'POST',
          headers: {
            'Content-type': 'Application/json',
            'Authorization': `Bearer ${ token }`,
          },
          body: JSON.stringify({
            title,
            description,
          })
        });
        const data = await response.json();
        console.log('data: ', data);
        setPosts([data, posts]);
        setTitle('');
        setDescription('');

    }

    return <> 
    <Route path="/AddPost">
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
          </input>
          <button 
          type="submit"
          className="btn">Buh Bye Trash</button>
    </form>
    </Route>
    </>

}
export default AddPost;