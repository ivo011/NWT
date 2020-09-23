import React, {useContext} from 'react';
import Post from './post';  
import {PostsContext} from '../context/PostsContext'; 

const PostList = () => {

    const {posts} = useContext(PostsContext);   
   
    return ( 
        <div>
            {posts.map(post => { 
                return(
                    <div key={post.post_id}>
                        <Post post_ID={post.post_id}
                              text={post.text}
                              picturesrc={post.picture}
                              username={post.user.username}
                              profilesrc={post.user.avatar}
                              user_ID={post.user.user_id}
                              likes={post.likes.length}
                        />                                               
                    </div> 
                )
            })}
        </div> 
    );
}
 
export default PostList;