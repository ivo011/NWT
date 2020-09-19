import React from "react"; 
import "./layout.css"
import Navigation from './navigation'; 
import Aside from './aside';


const Layout = ({children}) => {

    return ( 
        <div className="layout">
            <div className="header">

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