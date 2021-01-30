import React, { useState } from 'react';
import { 
  Route, 
} from 'react-router-dom';

const AddPost = ({ props }) => {
const [title, setTitle] = useState([]);
const [description, setDescription] = useState([]);
//const { post, setPosts } = props; 


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('title, description: ', title, description)
        console.log('postId: ', postId)
        const response = await fetch('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts', {
          method: 'POST',
          headers: {
            'Content-type': 'Application/json',
          },
          body: JSON.stringify({
            title,
            description
          })
        });
        const data = await response.json();
        console.log('data: ', data);
        setPosts([data, ...posts]);
        setTitle('');
        setBody('');

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
    </form>
    </Route>
    </>

}
export default AddPost;