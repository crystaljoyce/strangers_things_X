import React, { useState, useEffect } from 'react';



// const DeletePost = ( { posts, setPosts, title, setTitle, description, setDescription } ) => {
    
//     const handleDelete = async (postIdToDelete) => {

//     const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${post._id}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         },
//     });
//     const data = await response.json();
//     console.log('for messages', data.data.posts)
//     post.isAdmin === true 
//     ? <button
//         onClick={handleDelete}> Delete</button>
//     : ''

    
//     return <> 
//     <h3> 
//         Delete
//     </h3>
//     <form   
//         onSubmit={handleDelete}>
//             <input
//                 type="text"
//                 placeholder="title"
//                 value={title}
//                 onChange={(event) => setTitle(event.target.value)}>
                    
//                 </input>
//         </form>
//         </>
// }
// }
// export default DeletePost; 