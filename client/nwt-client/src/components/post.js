import React from 'react';
import './post.css'
import { AiOutlineLike, AiOutlineShareAlt} from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";


const Post = ({picturesrc, profilesrc, text}) => {
    return ( 
        <div className="post">
            <div className="post-header">
                <div className="user-details">
                    <div className="details-picture"><img className="post-profile-pic" alt="" src={profilesrc}/></div>
                    <h3>Username</h3>
                </div>
                <p>{text}</p>
            </div>
            <div className="post-picture">
                { (picturesrc === undefined) ? <div></div> : <img className="post-pic" alt="desc" src={picturesrc}/> }                            
            </div>
            <div className="post-icons">
                <div className="left">
                    <AiOutlineLike  size="1.7rem"/>
                    <FaRegComment size="1.5rem"/> 
                </div>
                <div className="right">
                    <AiOutlineShareAlt size="1.7rem"/>
                </div>
            </div>
        </div>
     );
}
 
export default Post;