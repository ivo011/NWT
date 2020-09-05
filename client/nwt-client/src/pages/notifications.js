import React from 'react';
import Layout from '../components/layout';
import NotifiList from '../components/notificationList'

function Notifications() {
  return (
    <div className="Notifications">   
    <Layout>
      <h1>Notifications</h1>
      <NotifiList/>
    </Layout>                
    </div>
  );
}

export default Notifications;
