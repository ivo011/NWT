import React from "react"; 
import "./layout.css"
import Navigation from './navigation'; 
import Aside from './aside';


const Layout = ({children}) => {

    return ( 
        <div className="layout">
            <div className="header">
                <div class="active-cyan-4 mb-4">
                    <input class="form-control search-bar" type="text" placeholder="Search" aria-label="Search"/>
                </div>
            </div>

            <div className="navigation">
                <Navigation/>
            </div>

            <div className="main">
                {children}                                       
            </div>
            <div className="aside">                
                <Aside />               
            </div>
            
            <div className="footer">

            </div>
        </div>

     );
}
 
export default Layout;