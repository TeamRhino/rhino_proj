import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';

export const userActions = {
    login,
    logout,
    getAll,
};

const login = (username, password) => {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    }; 

    const request = (user) => { return { type: userConstants.LOGIN_REQUEST, user } }
    const success = (user) => { return { type: userConstants.LOGIN_SUCCESS, user } }
    const failure = (error) => { return { type: userConstants.LOGIN_FAILURE, user } }
}

const logout = () => {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

const getAll = () => {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };
}