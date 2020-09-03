import React from 'react';
import './addpost.css';
import { Button, FormGroup, Input } from 'reactstrap';
import { AiOutlinePicture, AiOutlineFileGif, AiOutlineSmile } from "react-icons/ai";


const AddPost = () => {
    return ( 
        <div className="addPost">
            <div className="addPostHeader">
                <FormGroup className="addPostFormGroup">     
                    <img src="/pic/profile1.png" alt=""/>               
                    <Input type="textarea" name="text" id="exampleText" />                    
                </FormGroup>
            </div>
            <div className="addPostIcons">
                <div className="icons">
                    <AiOutlinePicture size="2em"/>
                    <AiOutlineFileGif size="2em"/>
                    <AiOutlineSmile size="2em"/>
                </div>
                <Button color="primary">Post</Button>
            </div>

        </div>
     );
}
 
export default AddPost;