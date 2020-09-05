import React from 'react';
import Notification from './notification'
import './notificationList.css'

const NotifiList = () => {
    return ( 
        <div className="Notifi-list">
            <Notification/>
            <Notification/>
            <Notification/>
            <Notification/>
        </div>
     );
}
 
export default NotifiList;