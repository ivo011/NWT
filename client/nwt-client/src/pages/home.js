import React from 'react';
import Layout from '../components/layout';
import Post from '../components/post';
import AddPost from '../components/addpost';
import PostList from '../components/postList'; 

function Home() {
  return (
    <div className="Home">   
    <Layout>     
      <AddPost />
      <PostList/>     
      <Post picturesrc="pic/pic1.jpg" profilesrc="pic/profile1.png"/>
      <Post picturesrc="pic/pic2.jpg"/>    
      <Post picturesrc="pic/pic5.jpg" profilesrc="pic/profile1.png"/>
      <Post picturesrc="pic/pic3.jpg"/>
      <Post picturesrc="pic/loma.jpg"/>
    </Layout>                
    </div>
  );
}

export default Home;
