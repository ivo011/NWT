import React from 'react';
import './profiledetails.css'
import { Button } from 'reactstrap';

const Profiledetails = ({user}) => {
     
    return (
        
         <div className="profile-details">
             <div className="cover-photo">
                    <img src="pic/pic3.jpg" alt=""/>
             </div>
             <div className="user-info">
                    <div className="pic-name">
                        <div className="left">
                            <img src={user.profilepic} alt=""/>                        
                            <h2>{user.username}</h2>
                        </div>
                        <div><Button color="primary">Edit profile</Button></div>
                    </div>                    
             </div>


        </div> 
    );
}
 
export default Profiledetails;