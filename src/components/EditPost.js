import React, { useState } from 'react';
import { 
  Route, 
} from 'react-router-dom';
import { fetchUsers } from '../api';
import Posts from './Posts';

const EditPost = ({ postList, title, description, price, location, willDeliver }) => {


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

  export default EditPost; 