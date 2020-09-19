import React, {useState, createContext, useEffect } from 'react';
import axios from 'axios'; 

export const UserContext = createContext();

export const UserProvider = ({children}) => {

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
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    );
}