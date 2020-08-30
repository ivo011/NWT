import React from 'react';
import './navigation.css';
import { Link } from 'react-router-dom'; 

const Navigation = () => {

    return (
        <nav> 
            <h3>NWT_projekt</h3>
            <ul className="nav-links">
                <Link to="/"> <li>Home</li> </Link>
                <Link to="/notifications"> <li>Notifications</li> </Link>
                <Link to="/messages"> <li>Messages</li> </Link>
                <Link to="/about"> <li>About</li> </Link>                  
            </ul>
        </nav>

      );
}
 
export default Navigation;