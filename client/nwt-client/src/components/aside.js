import React, {useState, useEffect} from 'react';
import './aside.css';
import axios from 'axios'; 


const Aside = () => {

    const [user, setUser] = useState({username: " ", profilepic: " "});

    useEffect(() => {
       
        axios.get('http://localhost:5000/users/user', {
            headers:{
                auth_token: localStorage.getItem("token")                 
            }
        }).then(res =>{         
                console.log(res.data)       
                setUser({username: res.data.username, profilepic: res.data.avatar});   
                                              
            })
            .catch(err => console.log(err))
    }, []);
    
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
