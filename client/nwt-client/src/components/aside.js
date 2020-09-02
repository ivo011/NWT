import React from 'react';
import './aside.css';


const Aside = () => {
    return ( 
        <div className="side-container">
            <div className="userProfile">
                <img src="/pic/profile1.png" alt=""/>
                <h3>Username</h3>
            </div>

            <div className="suggestions">
                <h2>Who to follow</h2>
                <div className="suggestion">
                    <img src="/pic/profile1.png" alt=""/>
                    <h3>Username</h3>
                </div>
                <div className="suggestion">
                    <img src="/pic/profile1.png" alt=""/>
                    <h3>Username</h3>
                </div>
                <div className="suggestion">
                   <img src="/pic/profile1.png" alt=""/>
                   <h3>Username</h3>
                </div>                
            </div>

        </div>

     );
}
 
export default Aside;
