import React, {useState, useContext} from 'react';
import './post.css'
import axios from 'axios'; 
import { AiOutlineLike, AiOutlineShareAlt} from "react-icons/ai";
import { Input } from 'reactstrap';
import { FaRegComment } from "react-icons/fa";
import { Dropdown } from 'react-bootstrap';
import {PostsContext} from '../context/PostsContext'; 


const Post = ({picturesrc, profilesrc, text, username, post_ID}) => {
    
    const [postID, setpostID] = useState(post_ID)
    const [postText, setpostText] = useState(text)
    const [editMode, seteditMode] = useState(false); 
    const [editText, seteditText] = useState(text)
    const {toggleDeletePost} = useContext(PostsContext); 

    const handlePostDelete = () =>{
        console.log("Delete post: ", postID);
        axios.delete(`http://localhost:5000/posts/delete/${postID}`,{
            headers:{
                auth_token: localStorage.getItem("token")                   
            }
        })
        .then(res => {
            console.log(res)
            toggleDeletePost();
        })
        .catch(err => console.log(err));
    }

    const handlePostEdit = () =>{
        seteditMode(!editMode)
    }

    const handleEnter = (e) => {
        if(e.keyCode == 13) {
             seteditMode(!editMode)
        }
        setpostText(editText)
    }

   
    return ( 
        <div className="post">
            <div className="post-header">                               
                    <div className="user-details">
                        <div className="details-picture"><img className="post-profile-pic" alt="" src={profilesrc}/></div>
                        <h3>{username}</h3>
                    </div>                                           
                <Dropdown className="dropdown">
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">                        
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" onClick={handlePostDelete}>Delete</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onClick={handlePostEdit}>Edit</Dropdown.Item>                        
                    </Dropdown.Menu>
                </Dropdown>                          
            </div>
            { editMode ? <Input type="textarea" name="text"
                                 value={editText} id="exampleText" 
                                 onKeyDown={handleEnter}
                                 onChange = {e => seteditText(e.target.value)} 
                        /> 
                        : <p>{postText}</p> }
            <div className="post-picture">
                { (picturesrc === null ) ? <div></div> : <img className="post-pic" alt="desc" src={picturesrc}/> }                            
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