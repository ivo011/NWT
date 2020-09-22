import React, {useState, useContext, useEffect} from 'react';
import './post.css'
import axios from 'axios'; 
import { AiOutlineLike, AiOutlineShareAlt} from "react-icons/ai";
import { Input } from 'reactstrap';
import { FaRegComment } from "react-icons/fa";
import { Dropdown } from 'react-bootstrap';
import {PostsContext} from '../context/PostsContext'; 
import Comment from './comment'


const Post = ({picturesrc, profilesrc, text, username, post_ID}) => {
    
    const [postID, setpostID] = useState(post_ID)
    const [postText, setpostText] = useState(text)
    const [editMode, seteditMode] = useState(false); 

    const [editText, seteditText] = useState(text)
    const {toggleDeletePost} = useContext(PostsContext); 
    const {postDeleted} = useContext(PostsContext)

    const [commentText, setCommentText] = useState("")

    const [newComment, setnewComment] = useState(false);

    const[commentList, setCommentList] = useState([]); 

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

    const handleEnterPost = (e) => {
        if(e.keyCode == 13) {
             seteditMode(!editMode)
             setpostText(editText);
             axios.put(`http://localhost:5000/posts/update/${postID}`, {
             text:editText            
        },         
        {
            headers:{
                auth_token: localStorage.getItem("token")                   
            }
        })
        .then(res => {
            console.log(res)          
        })
        .catch(err => console.log(err));
        }        
    }

    const handleEnterComment = (e) => {
        if(e.keyCode == 13) {
            axios.post("http://localhost:5000/comments/create", {
                text: commentText,  
                post_id: postID              
            }, 
            {
               headers:{
                   auth_token: localStorage.getItem("token")                   
               }
            })
            .then(res =>{    
              
               toggleNewCom();
               setCommentText("")

            })         
            .catch(err => console.log(err));   
        }
    }
    
    const toggleNewCom = () => {
        setnewComment(!newComment);
    }

    useEffect(() => {
        axios.get('http://localhost:5000/comments')
            .then(res =>{                        
                setCommentList(res.data)                           
            })
            .catch(err => console.log(err))
    },[newComment]); 
 
    useEffect(() => {
        axios.delete('http://localhost:5000/comments/delete')
            .then(res =>{                        
                console.log(res)                     
            })
            .catch(err => console.log(err))
    },[postDeleted]); 
   
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
                                 onKeyDown={handleEnterPost}
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
            <div className="comment-section">
                {
                    commentList.map(comment => { 
                        if(postID=== comment.post_id){
                        return(
                            <div key={comment.comment_id}>   
                                  <Comment name={comment.user.username} text={comment.text}/>                                            
                            </div> 
                        )}
                    })
                }  
                 <Input type="textarea"
                        className="comment-input"
                        name="comment"
                        value={commentText}
                        id="exampleText"
                        onChange = {e => setCommentText(e.target.value)}
                        onKeyDown={handleEnterComment}
                    />              
                                            
            </div>
        </div>
     );
}
 
export default Post;