import React from 'react';
import Layout from '../components/layout';
import Post from '../components/post';
import AddPost from '../components/addpost';

function Home() {
  return (
    <div className="Home">   
    <Layout>     
      <AddPost/>
      <Post profilesrc="pic/profile1.png" />
      <Post src="pic/pic1.jpg" profilesrc="pic/profile1.png"/>
      <Post src="pic/pic2.jpg"/>
      <Post />
      <Post src="pic/pic5.jpg" profilesrc="pic/profile1.png"/>
      <Post src="pic/pic3.jpg"/>
      <Post src="pic/pic4.jpg"/>
    </Layout>                
    </div>
  );
}

export default Home;
