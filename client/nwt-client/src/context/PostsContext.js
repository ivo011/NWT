import React, {useState, createContext, useEffect } from 'react';
import axios from 'axios'; 

export const PostsContext = createContext();
export const PostsProvider = ({children}) => {


    const [posts, setPosts] = useState([])         
    const [newPost, setnewPost] = useState(false);
    const [postDeleted, setpostDeleted] = useState(false);

    const toggleNewPost = () =>{
        setnewPost(!newPost);
    }

    const toggleDeletePost = () => {
        setpostDeleted(!postDeleted);
    }

    useEffect(() => {
        axios.get('http://localhost:5000/posts')
            .then(res =>{                     
                setPosts(res.data);                   
            })
            .catch(err => console.log(err))
    },[newPost, postDeleted]);   

    return (
        <PostsContext.Provider value={{posts, toggleNewPost, toggleDeletePost, postDeleted}}>
            {children}
        </PostsContext.Provider>
    );
}