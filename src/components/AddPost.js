import React, { useState } from 'react';

const AddPost = ({ posts, setPosts, token }) => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [location, setLocation] = useState('');
const [willDeliver, setWillDeliver] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('title, description: ', title, description)
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
        setWillDeliver(false);
    }

    return <>  
    <h2> 
      List an item for sale: 
    </h2>
    <div className="input-group mb-3">
    <form onSubmit={handleSubmit}>
      <input 
          type="text"
          placeholder="title"
          className="form-control"
          value={title}
          onChange={(event) => setTitle(event.target.value)}>
      </input>
      <textarea 
          type="text"
          placeholder="description"
          className="form-control"
          aria-label="With textarea"
          value={description}
          onChange={(event) => setDescription(event.target.value)}>
      </textarea> <br></br>
      <div className="input-group mb-3">
    <span className="input-group-text">$</span>
      <input 
          type="text"
          placeholder="price"
          aria-label="Amount (to the nearest dollar)"
          className="form-control"
          value={price}
          onChange={(event) => setPrice(event.target.value)}>
      </input>
      <span className="input-group-text">.00</span>
</div>
      <input 
          type="text"
          placeholder="Location"
          className="form-control"
          value={location}
          onChange={(event) => setLocation(event.target.value)}>
      </input>
      <div> 
      <label for="willDeliver">Check the box if you can deliver this item. </label>
      <input 
          type="checkbox"
          id="willDeliver"
          className="form-check-input"
          aria-label="Checkbox for following text input"
          placeholder="willDeliver"
          checked={willDeliver}
          onChange={(event) => setWillDeliver(event.target.checked)}>
      </input> 
      </div>
      <button 
          type="submit"
          className="btn btn-outline-primary">List it!
      </button>
    </form> 
    </div>
    </>
}

export default AddPost;