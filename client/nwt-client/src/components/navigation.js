import React from 'react';
import './navigation.css';
import { Link } from 'react-router-dom'; 
import { AiOutlineHome, AiOutlineMessage,AiOutlineUser } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import Logout from './logout'; 

const Navigation = () => {

    return (
        <nav> 
            <h3>NWT_projekt</h3>
            <ul className="nav-links">
                <Link to="/home">
                    <div className="link">
                        <AiOutlineHome size="2rem"/>
                        <li>Home</li>
                    </div>
                </Link>
                <Link to="/profile">
                    <div className="link">
                        <AiOutlineUser size="2rem"/>
                        <li>Profile</li>
                     </div>
                </Link>
                <Link to="/notifications">
                    <div className="link">
                        <IoMdNotificationsOutline size="2rem"/>
                        <li>Notifications</li>
                     </div>
                </Link>
                <Link to="/messages">
                    <div className="link">
                        <AiOutlineMessage size="2rem"/>
                        <li>Messages</li>
                     </div>
                </Link>                
                <Logout/>                          
            </ul>            
        </nav>

      );
}
 
export default Navigation;