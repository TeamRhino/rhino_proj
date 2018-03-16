import React, { Component } from 'react';
import {
  Router,
  Route
} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import { history } from './helpers';
import { connect } from 'react-redux';
import { alertActions } from './actions';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage/RegisterPage';
import { PrivateRoute } from './components/Shared/PrivateRoute';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });

  }
  render() {
    return ( 
      <div>
        <Router history={history}>
          <div >
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
          </div>
        </Router> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 