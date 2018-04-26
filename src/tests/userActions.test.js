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


const mockResponse = (status, statusText, response) => {
    return new window.Response(response, {
      status: status,
      statusText: statusText,
      headers: {
        'Content-type': 'application/json'
      }
    });
};


describe('UserAction', () => {
    it('should create an action to logout a user', () => {
        const expectedAction = {
            type: userConstants.LOGOUT
        }
        expect(userActions.logout()).toEqual(expectedAction)
    });

   /* it('login should return promise and success actions', () => {
        window.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve(mockResponse(200, null, '{"ids":{"provider":' + id + '}}')));
        
    }) */
});


