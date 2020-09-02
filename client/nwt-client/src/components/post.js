import React from 'react';
import './post.css'
import { AiOutlineLike, AiOutlineComment, AiOutlineShareAlt} from "react-icons/ai";


const Post = ({src, profilesrc}) => {
    return ( 
        <div className="post">
            <div className="post-header">
                <div className="user-details">
                    <div className="details-picture"><img className="post-profile-pic" alt="" src={profilesrc}/></div>
                    <h3>Username</h3>
                </div>
                <p>Sed ut perspiciatisstrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            </div>
            <div className="post-picture">
                <img className="post-pic" alt="desc" src={src}/>
            </div>
            <div className="post-icons">
                <div className="left">
                    <AiOutlineLike  size="1.7rem"/>
                    <AiOutlineComment size="1.7rem"/>
                </div>
                <div className="right">
                    <AiOutlineShareAlt size="1.7rem"/>
                </div>
            </div>
        </div>
     );
}
 
export default Post;