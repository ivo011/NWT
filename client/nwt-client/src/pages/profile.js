import React from 'react';
import Layout from '../components/layout';


function Profile() {
  return (
    <div className="Profile">   
    <Layout>
      <h1>Profile</h1>
       <div className="cover-photo"></div> 
       <div className="profile-details"></div>
    </Layout>                
    </div>
  );
}

export default Profile;
