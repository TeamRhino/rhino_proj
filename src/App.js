import React, { Component } from 'react';
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom'
import { HomePage } from './components/HomePage/HomePage';
import { history } from './helpers';
import { connect } from 'react-redux';
import { alertActions } from './actions';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage/RegisterPage';
import { AlertPage } from './components/AlertPage/AlertPage';
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
        <div >
          <Switch>
            <PrivateRoute exact path="/" loggedIn={this.props.loggedIn} component={HomePage} />
            <PrivateRoute path="/alertpage" component={AlertPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  const { loggedIn } = state.authentication;
  return {
      alert,
      loggedIn
  };
}

const connectedApp = withRouter(connect(mapStateToProps)(App));
export { connectedApp as App }; 