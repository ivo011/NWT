import React from 'react';
import Layout from '../components/layout';
import MessageGrid from '../components/messageGrid';

function Messages() {
  return (
    <div className="Messages">   
    <Layout>
      <h1>Messages</h1>
      <MessageGrid/>
    </Layout>                
    </div>
  );
}

export default Messages;
