import React, {useState} from 'react';


const Search = (props ) => {

    const {posts, searchTerm, setSearchTerm} = props; 
   
    const filteredPosts = posts.filter((post => post?.title?.includes(searchTerm) || post?.description?.includes(searchTerm) || post?.username?.includes(searchTerm)))
    console.log('filtered posts: ',filteredPosts)

    const postsToDisplay = searchTerm.length ? filteredPosts : posts;
        
    return <div className="input-group mb-3">
        <input 
        type='text'
        value={searchTerm}
        className="form-control"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        placeholder='search the posts'
        onChange={() => setSearchTerm()}
        >
        </input>
        <button> {postsToDisplay.map((pos, index) => {
            return <div key={index}> {pos.title}  </div> 
        })} Search</button>
        </div> 
        
}


export default Search; 