import React from 'react';
import { Link } from 'react-router-dom'; 
import { BiLogOut } from "react-icons/bi";


const Logout = () => {
    const handleLogout = () => {
        localStorage.clear(); 
    }
    return (        
         <div className="logout">  
             <Link onClick={handleLogout} to="/">
                    <div className="link">
                        <BiLogOut size="2rem"/>
                        <li>Logout</li>
                     </div>
                </Link> 
        </div>
     );
}
 
export default Logout;