/**
 * @jest-environment node
 */
import { userActions } from '../actions/user.actions';
import { userConstants } from '../constants/user.constants';
import { history } from '../helpers';

describe('UserAction', () => {
    it('should create an action to logout a user', () => {
        const expectedAction = {
            type: userConstants.LOGOUT
        }
        expect(userActions.logout()).toEqual(expectedAction)
    })
});

