import React from 'react';
import './profiledetails.css'
import { Button } from 'reactstrap';

const Profiledetails = () => {
    return (
         <div className="profile-details">
             <div className="cover-photo">
                    <img src="pic/pic3.jpg" alt=""/>
             </div>
             <div className="user-info">
                    <div className="pic-name">
                        <div className="left">
                            <img src="pic/profile1.png" alt=""/>                        
                            <h2>Username</h2>
                        </div>
                        <div><Button color="primary">Edit profile</Button></div>
                    </div>                    
             </div>


        </div> 
    );
}
 
export default Profiledetails;