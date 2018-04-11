/**
 * @jest-environment node
 */

import React from 'react';
import { Form } from 'semantic-ui-react';
import LoginPage from '../components/LoginPage/LoginPage';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

describe('LoginPage', () => {
    const wrapper = shallow(<LoginPage/>)

    it('Should render properly', () => {
        expect(wrapper.exists(<Form/>)).toBe(true);
    });

    it('Username and password inputs', () => {
        expect(wrapper.find(Form.Input).length).toBe(2);
    });

    it('Before logging in submitted is false', () => {
        expect(wrapper.state().submitted).toBe(false);
    })

    it('After logging in will set submitted to true', () => {
        wrapper.instance().handleSubmit();
        expect(wrapper.state().submitted).toBe(true);
    })

    it('Initial username and password is empty', () => {
        expect(wrapper.state().username).toBe('');
        expect(wrapper.state().password).toBe('');
    })

    it('Register Page link exists', () => {
        expect(wrapper.exists(Link)).toBe(true);
    }) 
    
})