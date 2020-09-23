import React, {useState, createContext, useEffect } from 'react';
import axios from 'axios'; 

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [user, setUser] = useState({  username: "", 
                                        user_ID: "",
                                        profilepic: "", 
                                        joined: ""
                                    });

    const [logedIn, setLogedIn] = useState(false);

    const toggleLogin = () =>{
        setLogedIn(!logedIn);
    }

    useEffect(() => {       
        axios.get('http://localhost:5000/users/user', {
            headers:{
                auth_token: localStorage.getItem("token")                 
            }
        }).then(res =>{                              
                setUser({username: res.data.username,
                         user_ID: res.data.user_id,
                         profilepic: res.data.avatar, 
                         joined:res.data.createdAt});                                                 
            })
            .catch(err => console.log(err))
    }, [logedIn]);
    

    return (
        <UserContext.Provider value={{user, toggleLogin}}>
            {children}
        </UserContext.Provider>
    );
}