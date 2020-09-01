import React from 'react';
import Layout from '../components/layout';
import Post from '../components/post';

function Home() {
  return (
    <div className="Home">   
    <Layout>
      <h1>Home</h1>
      <Post />
      <Post />
      <Post />
      <Post />
    </Layout>                
    </div>
  );
}

export default Home;
