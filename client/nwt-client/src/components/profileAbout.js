import React from 'react';
import './profileAbout.css'

const ProfileAbout = ({user}) => {

    const joined = user.joined.substring(0, 10);
    return ( 
        <div className="about">
            <h3>About</h3>
            <h6>Joined: {joined}</h6>
            <h6>Followers</h6>
            <h6>Following</h6>
            <p>Description</p>            
        </div>
     );
}
 
export default ProfileAbout;