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
      <PostList />      
    </Layout>                
    </div>
  );
}

export default Home;
