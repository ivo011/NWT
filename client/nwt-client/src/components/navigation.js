import React from 'react';
import './navigation.css';
import { Link } from 'react-router-dom'; 
import { AiOutlineHome, AiOutlineMessage, AiOutlineExclamationCircle } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navigation = () => {

    return (
        <nav> 
            <h3>NWT_projekt</h3>
            <ul className="nav-links">
                <Link to="/">
                    <div className="link">
                        <AiOutlineHome size="2rem"/>
                        <li>Home</li>
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
                <Link to="/about">
                    <div className="link">
                        <AiOutlineExclamationCircle size="2rem"/>
                        <li>About</li>
                     </div>
                </Link>                  
            </ul>
        </nav>

      );
}
 
export default Navigation;