import React, {useState, useContext} from 'react';
import './editProfileModal.css'
import axios from 'axios'; 
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {UserContext} from '../context/UserContext'; 

const EditProfileModal = ({modal, toggle}) => {
     
    const {user} = useContext(UserContext);  
    const {toggleUpdated} =  useContext(UserContext);  
    
    const [username, setUsername] = useState(user.username);    
    const [profilepic, setProfilepic] = useState(user.profilepic);

    const onChange = (e) =>{            
        setProfilepic("/pic/" + e.target.files[0].name);        
    }

    const handleSubmit = (e) => {
        axios.put(`http://localhost:5000/users/update/${user.user_ID}`, {
            profilepic:profilepic,
            username: username        
       },         
       {
           headers:{
               auth_token: localStorage.getItem("token")                   
           }
       })
       .then(res => {
           toggleUpdated();
           console.log(res) 
           setUsername("");   
           profilepic("");      
       })
       .catch(err => console.log(err));
       }        
       
    

    return ( 
        <div className="editProfile">
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update profile </ModalHeader>
                    <ModalBody className="ModalBody">
                        <Input type="username"  
                               value={username} 
                               onChange={(e) => setUsername(e.target.value) } 
                               autoComplete="off"
                               placeholder="Enter username" />   

                        <div className="input-picture">
                            <input type="file" name="inputfile" onChange={onChange}/>      
                            <img className="profilepic" src={profilepic} alt=""/>  
                        </div>                                                   
                    </ModalBody>
                <ModalFooter>
                        <Button color="primary" onClick={()=> {toggle(); handleSubmit();}}>Confirm</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>        

        </div>
     );
}
 
export default EditProfileModal;