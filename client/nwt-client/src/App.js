import React from 'react';
import './App.css';
import Firstpage from './pages/firstpage';
import Home from './pages/home'; 
import Profile from './pages/profile'; 
import About from './pages/about'; 
import Messages from './pages/messages'; 
import Notifications from './pages/notifications'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">  
        <Switch>
          <Route path="/" exact component={ Firstpage } /> 
          <Route path="/home" exact component={ Home } /> 
          <Route path="/profile" component={ Profile } /> 
          <Route path="/about" component={ About } /> 
          <Route path="/messages" component={ Messages } /> 
          <Route path="/notifications" component={ Notifications } /> 
        </Switch>             
      </div>  
    </Router>
  );
}

export default App;
