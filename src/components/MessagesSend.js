// import React, { useState } from 'react';
// import { 
//   Route, 
// } from 'react-router-dom';
// import { fetchUsers } from '../api';
// import Posts from './Posts';

// const MessagesSend = ( props ) => {
    
    
//     const { token, postsList, posts, setPosts } = props; 

//     const handleSubmit = async (event) => {
//         console.log(event)
//         event.preventDefault();
//         const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${post._id}/messages`, {
//           method: 'POST',
//           headers: {
//             'Content-type': 'Application/json',
//             'Authorization': `Bearer ${ token }`,
//           },
//           body: JSON.stringify({
//             message:{
//             content,
//             }
//           })
//         });
//         const data = await response.json();

//         console.log('Messages Content: ', data?.posts?.messages);
//         setContent(messages.content)
//     }

    // return {/* <> 
    
//         {posts?.map((post, index) => {
//             return <div key={index}>
//             <button 
//             type="submit"
//             className="btn"
//             onClick={() => {handleSubmit()}}
//             >Respond to Post</button>
//             </div> })} */}
//             <form onSubmit={handleSubmit}>
//     <h3> 
//       Send a message regarding this treasure: 
//     </h3>
    
//       <textarea 
//           type="text"
//           placeholder="write your message here ... "
//           value={content} 
//           onChange={(event) => setContent(event.target.value)}>
//       </textarea>

      
//     </form>
    
//     </>

// }

// export default MessagesSend;