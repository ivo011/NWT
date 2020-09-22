import React, {useState, useContext} from 'react';
import Post from './post'; 
import axios from 'axios'; 
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
                        />                                               
                    </div> 
                )
            })}
        </div> 
    );
}
 
export default PostList;