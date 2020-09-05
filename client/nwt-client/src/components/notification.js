import React from 'react';
import './notification.css'
import { TiDeleteOutline } from "react-icons/ti";



const Notification = () => {
    return (  
        <div className="notification">
            <div className="notifi-content">
                <img src="/pic/profile1.png" alt=""/>
                <p>User liked your photo</p>
            </div>
            <TiDeleteOutline size="30px"/>
        </div>
    );
}
 
export default Notification;
