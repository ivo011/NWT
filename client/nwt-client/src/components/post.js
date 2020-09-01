import React from 'react';
import './post.css'
import { AiOutlineLike, AiOutlineComment, AiOutlineShareAlt} from "react-icons/ai";


const Post = () => {
    return ( 
        <div className="post">
            <div className="post-header">
                <div className="user-details">
                    <div className="details-picture"><img className="post-profile-pic" alt="" src=""/></div>
                    <h3>Username</h3>
                </div>
                <p>Sed ut perspiciatisstrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            </div>
            <div className="post-picture">
                <img className="post-pic" alt="desc" src="/pic/pic1.jpg"/>
            </div>
            <div className="post-icons">
                <div className="left">
                    <AiOutlineLike  size="2rem"/>
                    <AiOutlineComment size="2rem"/>
                </div>
                <div className="right">
                    <AiOutlineShareAlt size="2rem"/>
                </div>
            </div>
        </div>
     );
}
 
export default Post;