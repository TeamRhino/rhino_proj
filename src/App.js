import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import { PrivateRoute } from './components/Shared/PrivateRoute';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return ( 
      <div>
        <BrowserRouter >
          <div >
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
          </div>
        </BrowserRouter> 
      </div>
    );
  }
}

export default App;