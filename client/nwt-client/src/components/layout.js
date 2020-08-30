import React from "react"; 
import "./layout.css"
import Navigation from './navigation'; 


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
                <div className="element">  </div> 
                <div className="element">  </div> 
                <div className="element">  </div> 
                <div className="element">  </div> 
                <div className="element">  </div> 
                              
            </div>
            <div className="aside">

            </div>
            
            <div className="footer">

            </div>
        </div>

     );
}
 
export default Layout;