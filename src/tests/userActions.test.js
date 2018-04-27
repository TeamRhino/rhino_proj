/**
 * @jest-environment node
 */
import { userActions } from '../actions/user.actions';
import { userConstants } from '../constants/user.constants';
import { history } from '../helpers';
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [ thunkMiddleware ];
const mockStore = configureMockStore(middlewares);

describe('UserAction', () => {
    it('should create an action to logout a user', () => {
        const expectedAction = {
            type: userConstants.LOGOUT
        }
        expect(userActions.logout()).toEqual(expectedAction)
    });

    it('login should return promise and success actions', () => {
        const store = mockStore({});
        const username = "test";
        const password = "test";
        const dispatch = jest.fn();

        fetch.mockResponseOnce(JSON.stringify({ username: "test", password:"test" }));

        const expected = {type: userConstants.LOGIN_REQUEST, user: {username: username}};

        expect(typeof(userActions.login(username, password))).toEqual('function');

        userActions.login(username, password)(dispatch);
        expect(dispatch).toBeCalledWith(expected)
    }) 
});


