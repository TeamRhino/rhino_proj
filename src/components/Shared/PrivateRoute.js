import React from 'react';
import { 
    Route, 
    Redirect 
} from 'react-router-dom';
import { connect } from 'react-redux';

const privateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user') ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
    )} />
)

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRoute = connect(mapStateToProps, null, null ,{ pure: false }) (privateRoute);
export {connectedRoute as PrivateRoute};