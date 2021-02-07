import React from 'react'; 
import {useParams} from 'react-router-dom';
import PostSingle from './PostSingle';


const PostView = ( props ) => {
    const { posts, postsList } = props; 
    const {id} = useParams(); 
    console.log('id: ', id)

    const post = posts.find(posty => posty.id === Number(id))
    console.log('post: ', post)
    
    return post ? <PostSingle post={post}/> : ''
}

export default PostView; 