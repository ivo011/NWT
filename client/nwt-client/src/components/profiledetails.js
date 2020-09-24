import React, {useState} from 'react';
import './profiledetails.css'
import { Button } from 'reactstrap';
import EditProfileModal from './editProfileModal';

const Profiledetails = ({user}) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
     
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
                        <div><Button color="primary" onClick={toggle}>Edit profile</Button></div>
                    </div>                    
             </div>
             <EditProfileModal modal={modal} toggle={toggle}/>


        </div> 
    );
}
 
export default Profiledetails;