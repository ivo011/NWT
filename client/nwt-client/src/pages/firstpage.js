import React, {useState} from 'react';
import '../components/firstpage.css'
import axios from 'axios'; 
import { Button, Input } from 'reactstrap';
import RegisterModal from '../components/registerModal';

const Firstpage = (props) => { 
    

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");  

    const handleLogin = (e) =>{
        e.preventDefault();        
         axios.post("http://localhost:5000/users/login", {
             email, 
             password
         })
         .then(res =>{                
             localStorage.setItem("token", JSON.stringify(res.data)); //spremanje u localstorage                          
             if(res.data.Success) props.history.push('/home')
         })         
         .catch(err => console.log(err));         
         setEmail(""); 
         setPassword("");                        
    }
   
    return (
         <div className="first-page">
                <div className="content">
                    <h1>NWT Project</h1>
                    <h2>Full stack web application</h2>
                    <h4>NodeJS | React | PostgreSQL | Express | Javascript </h4>                    
                </div>
               
                <div className="side"> 
                    <div className="log-in">    
                        <Input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" placeholder="Enter email" />                                                    
                        <Input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />  
                        <Button className="login-button" color="primary" onClick={handleLogin}>Log in</Button>               
                    </div>
              
                    <div className="register">                        
                        <h4>You don't have an account?</h4>
                        <Button className="register-button" onClick={toggle} color="success">Register</Button>
                    </div>                     
                 </div>            
                    <RegisterModal modal={modal} toggle={toggle}/> 
             </div> 
         );
}
 
export default Firstpage;