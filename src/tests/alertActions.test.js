/**
 * @jest-environment node
 */
import { alertActions } from '../actions';
import { alertConstants } from '../constants/';
import { App } from '../App';

describe('AlertAction', () => {
    const message = 'hello world';
    it('should create an action for success', () => {
        const expectedAction = {
            type: alertConstants.SUCCESS, 
            message
        }
        expect(alertActions.success(message)).toEqual(expectedAction)
    })
})