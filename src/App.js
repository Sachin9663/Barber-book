import React from 'react';
import {Switch, Route,} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';
import Header from './pages/header/header.component';
import Login from './pages/login/login.component';
import DashBoard from './pages/dashboard/dashboard.component';

function App() {
  return (
    <div className="App">
    <Header/>
    
    <Switch>
    <Route exact path='/' component={ HomePage }/>
    <Route exact path='/login' component={ Login }/>
   <Route exact path='/dash' component={ DashBoard }/>
    </Switch>
    
   
    </div>
  );
}

export default App;
