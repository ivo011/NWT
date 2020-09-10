import React from 'react';
import '../components/firstpage.css'
import { Button, Input } from 'reactstrap';

const Firstpage = () => {
    return (
         <div className="first-page">

                <div className="content">
                    <h1>NWT Project</h1>
                    <h2>Full stack web application</h2>
                    <h4>NodeJS | React | Postgres | Express | Javascript </h4>                    
                </div>
               
                <div className="side">   
                    <div className="log-in">    
                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter email" />                                                    
                        <Input type="password" name="password" id="examplePassword" placeholder="Enter password" />  
                        <Button className="login-button" color="primary">Log in</Button>               
                    </div>
                    <div className="register">                        
                        <h4>You don't have an account?</h4>
                        <Button className="register-button" color="success">Register</Button>
                    </div> 
                 </div>           
         </div> 
         );
}
 
export default Firstpage;