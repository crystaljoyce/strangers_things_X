import React, {useState} from 'react';


const Search = (props ) => {

    const {posts, setPosts} = props; 
    const [ searchTerm, setSearchTerm ] = useState('');
   
    const filteredPosts = posts.filter((post => post.title.includes(searchTerm) || post.description.includes(searchTerm) || post.title.includes(searchTerm)))
    console.log(filteredPosts)

    const postsToDisplay = searchTerm.length ? filteredPosts : posts;

        
    return <div>
        <input 
        type='text'
        placeholder='search the posts'
        //{postsToDisplay.map((pos, index) => {
        //    return <div key={index}>{pos}</div>
        //})}
        >

        </input>
        </div> 
        
}


export default Search; 