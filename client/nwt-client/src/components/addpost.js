import React, {useContext, useState} from 'react';
import './addpost.css';
import axios from 'axios';
import { Button, FormGroup, Input } from 'reactstrap';
import { AiOutlinePicture, AiOutlineSmile } from "react-icons/ai";
import {UserContext} from '../context/UserContext'; 


const AddPost = () => {

    const {user} = useContext(UserContext);    
    
    const[postText, setPostText] = useState(""); 
    const[postPicture, setPostPicture]=useState(null);     

    const handleAddPost = (e) =>{
        e.preventDefault();        
         axios.post("http://localhost:5000/posts/create", {
             text: postText,  
             picture: postPicture
         }, 
         {
            headers:{
                auth_token: localStorage.getItem("token")                   
            }
         })
         .then(res =>{                
            console.log(res);
         })         
         .catch(err => console.log(err));   
         setPostText("");  
         setPostPicture(null);                             
    }

    const onChange = (e) =>{            
        setPostPicture("/pic/" + e.target.files[0].name);        
    }

    return ( 
        <div className="addPost">
            <div className="addPostHeader">
                <FormGroup className="addPostFormGroup">     
                    <img src={user.profilepic} alt=""/>               
                    <Input type="textarea" name="text" value={postText} id="exampleText" onChange = {e => setPostText(e.target.value)} />                   
                </FormGroup>
            </div>
            <div className="addPostIcons">
                <div className="icons">
                     <input type="file" id="file" onChange={onChange} />   
                     <label htmlFor ="file">
                        <AiOutlinePicture className="pictureIcon" size="2em"/>
                    </label>              
                    <AiOutlineSmile size="2em"/>                   
                </div>
                <img className="postImg" src={postPicture} alt=""/>  
                <Button color="primary" onClick={handleAddPost}>Post</Button>
            </div>

        </div>
     );
}
 
export default AddPost;