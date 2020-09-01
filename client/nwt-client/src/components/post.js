import React from 'react';
import './post.css'


const Post = () => {
    return ( 
        <div className="post">
            <div className="post-header">
                <div className="user-details">
                    <div className="details-picture"><img className="post-profile-pic" alt="" src=""/></div>
                    <h3>Username</h3>
                </div>
            </div>
            <div className="post-picture">
                <img className="post-pic" alt="desc" src="/pic/pic1.jpg"/>
            </div>
            <div className="post-icons">

            </div>
        </div>
     );
}
 
export default Post;