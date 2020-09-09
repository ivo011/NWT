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
