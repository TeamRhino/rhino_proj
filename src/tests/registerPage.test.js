/**
 * @jest-environment node
 */
import React from 'react';
import { Form } from 'semantic-ui-react';
import RegisterPage from '../components/RegisterPage/RegisterPage';
import { shallow } from 'enzyme';

/* Testing HOC https://stackoverflow.com/questions/36211739/invariant-violation-could-not-find-store-in-either-the-context-or-props-of-c */ 
describe('RegisterPage', () => {
    const wrapper = shallow( <RegisterPage/>  );
    it('should render without throwing an error', () => {
        expect(wrapper.exists(<Form onSubmit={()=>{}} error={false}/>)).toBe(true)
    });
    
    it('should have five inputs', () => {
        expect(wrapper.find(Form.Input).length).toBe(5)
    });

    it('validating empty form should return false', () => {
        const user = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            confirmpassword: '',
        }
        const user2 = {
            firstName: 'asdfsdf',
            lastName: '',
            username: '',
            password: '',
            confirmpassword: '',
        }
        const user3 = {
            firstName: 'asdfdsf',
            lastName: 'asdfsdfdsf',
            username: '',
            password: '',
            confirmpassword: '',
        }
        const user4 = {
            firstName: 'asdfadf',
            lastName: 'asdfadsf',
            username: 'asdfasdfsf',
            password: '',
            confirmpassword: '',
        }
        const user5 = {
            firstName: 'asdfafd',
            lastName: 'asdfadf',
            username: 'asdfadsf',
            password: 'asdfdfsfd',
            confirmpassword: '',
        }
        
        expect(wrapper.instance().userValidation(user)).toBe(false);
        expect(wrapper.instance().userValidation(user2)).toBe(false);
        expect(wrapper.instance().userValidation(user3)).toBe(false);
        expect(wrapper.instance().userValidation(user4)).toBe(false);
        expect(wrapper.instance().userValidation(user5)).toBe(false);
    });

    it('validating weak password should return false', () => {
        const user = {
            firstName: 'hello',
            lastName: 'goodbye',
            username: 'sdfsdf',
            password: 'asdfsdfsdf',
            confirmpassword: 'asdfsdfsdf',
        }
        expect(wrapper.instance().userValidation(user)).toBe(false);
    })

    it('not matching passwords should return false', () => {
        const user = {
            firstName: 'hello',
            lastName: 'goodbye',
            username: 'sdfsdf',
            password: '!3324ksdfA',
            confirmpassword: '!3324kssfA',
        }
        expect(wrapper.instance().userValidation(user)).toBe(false);
    })

    it('valid user should return true', () => {
        const user = {
            firstName: 'hello',
            lastName: 'goodbye',
            username: 'sdfsdf',
            password: '!3324ksdfA',
            confirmpassword: '!3324ksdfA',
        }
        expect(wrapper.instance().userValidation(user)).toBe(true);
    })

    

})