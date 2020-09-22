import React from 'react';
import './App.css';
import Firstpage from './pages/firstpage';
import Home from './pages/home'; 
import Profile from './pages/profile'; 
import About from './pages/about'; 
import Messages from './pages/messages'; 
import Notifications from './pages/notifications'; 
import ProtectedRoute from './components/protectedRoute'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import {UserProvider} from './context/UserContext'; 
import {PostsProvider} from './context/PostsContext';


function App() {
  return (  
    <Router>
      <UserProvider>  
        <PostsProvider>
          <div className="App">  
            <Switch>
              <Route path="/" exact component={ Firstpage } /> 
              <ProtectedRoute path="/home" exact component={ Home } /> 
              <Route path="/profile" component={ Profile } /> 
              <Route path="/about" component={ About } /> 
              <Route path="/messages" component={ Messages } /> 
              <Route path="/notifications" component={ Notifications } /> 
            </Switch>             
          </div>
        </PostsProvider>                
      </UserProvider>      
    </Router> 
    
  );
}

export default App;
