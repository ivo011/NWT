import React from 'react';
import Layout from '../components/layout';
import './profile.css'
import Profiledetails from '../components/profiledetails'; 
import ProfileAbout from '../components/profileAbout';
import ProfilePictures from '../components/profilePictures';
import Post from '../components/post';

function Profile() {
  return (
    <div className="Profile">   
    <Layout>      
      <Profiledetails/>
      <div className="info">
        <ProfileAbout/>
        <ProfilePictures/>
      </div>
      <Post src="pic/pic5.jpg" profilesrc="pic/profile1.png"/>
      <Post src="pic/pic3.jpg"/>
      <Post src="pic/pic4.jpg"/>
    </Layout>                
    </div>
  );
}

export default Profile;
