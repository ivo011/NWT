import React, {useState} from 'react';
import './registerModal.css'
import axios from 'axios'; 
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const RegisterModal = ({modal, toggle}) => {

      
    
    const [username, setUsername] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [age, setAge] = useState(""); 

    const [profilepic, setProfilepic] = useState("/pic/default.png");

    const onChange = (e) =>{            
        setProfilepic("/pic/" + e.target.files[0].name);        
    }

    const handleSubmit = (e) => {
        
        axios.post('http://localhost:5000/users/register',{
            username, 
            email, 
            password, 
            age, 
            avatar: profilepic
        })
        .then(res => {
            console.log(res); 
            setUsername(""); 
            setEmail(""); 
            setPassword(""); 
            setAge(""); 
            setProfilepic("/pic/default.png");
        }
        )
        .catch(err => console.log(err)); 
    }

    return ( 
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Register </ModalHeader>
                    <ModalBody className="ModalBody">
                        <Input type="username"  value={username} onChange={(e) => setUsername(e.target.value) } autoComplete="off" placeholder="Enter username" />
                        <Input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" placeholder="Enter email" />
                        <Input type="password"  value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Enter password" />  
                        <Input type="age" value={age} onChange={(e) => setAge(e.target.value)}  placeholder="Enter age" />    
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
 
export default RegisterModal;