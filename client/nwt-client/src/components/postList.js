import React, {useState, useEffect} from 'react';
import Post from './post'; 
import axios from 'axios'; 

const PostList = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/posts')
            .then(res =>{
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    return ( 
        <div>
            {posts.map(post => { 
                return(
                    <div key={post.post_id}>
                        <Post text={post.text} />
                    </div> 
                )
            })}
        </div> 
    );
}
 
export default PostList;