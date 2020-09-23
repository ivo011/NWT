import React,{useContext} from 'react';
import Layout from '../components/layout';
import './profile.css'
import Profiledetails from '../components/profiledetails'; 
import ProfileAbout from '../components/profileAbout';
import ProfilePictures from '../components/profilePictures';
import Post from '../components/post';
import {UserContext} from '../context/UserContext'; 
import {PostsContext} from '../context/PostsContext'; 

function Profile() {

  const {user} = useContext(UserContext); 
  const {posts} = useContext(PostsContext);      

  return (
    <div className="Profile">   
    <Layout>      
      <Profiledetails user={user}/>
      <div className="info">
        <ProfileAbout user={user}/>
        <ProfilePictures/>
      </div>
      {posts.map(post => { 
            if(post.user_id === user.user_ID){
                return(                  
                    <div key={post.post_id}>
                        <Post post_ID={post.post_id}
                              text={post.text}
                              picturesrc={post.picture}
                              username={post.user.username}
                              profilesrc={post.user.avatar}
                        />                                               
                    </div> 
                )
                }     
              })
        }
          
    </Layout>                
    </div>
  );
}

export default Profile;
