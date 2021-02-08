import React from 'react';

const PostSingle = (props) => {
    const { posts, children, postsList } = props; 
    console.log('children: ',children)

    return <div className="PostSingle">
        <h5>{children 
        ? posts.map((post, index) => {
            return <div key={index}> {post.title} </div>
        })
        : postsList } </h5>
        <div> {children} </div>
    </div>

}


export default PostSingle; 