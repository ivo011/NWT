import React, {useContext} from 'react';
import './aside.css';
import {UserContext} from '../context/UserContext'; 


const Aside = () => {

    const {user} = useContext(UserContext);  
    console.log("Aside: -->", user.username)
    
    return (         
        <div className="side-container">
            <div className="userProfile">
                 <img src={user.profilepic} alt=""/>
                 <h3>{user.username}</h3> 
            </div>

            <div className="suggestions">
                <h3>Who to follow</h3>
                <div className="suggestion">
                    <img src="/pic/profile1.png" alt=""/>
                    <h4>Username</h4>
                </div>
                <div className="suggestion">
                    <img src="/pic/profile1.png" alt=""/>
                    <h4>Username</h4>
                </div>
                <div className="suggestion">
                   <img src="/pic/profile1.png" alt=""/>
                   <h4>Username</h4>
                </div>                              
            </div>


            <div className="trends">
                <h3>Trends for you</h3>
                <div className="trend">                   
                    <h4>Username</h4>
                </div>
                <div className="trend">                   
                    <h4>Username</h4>
                </div>                                
            </div>

        </div>

     );
}
 
export default Aside;
