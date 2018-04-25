/**
 * @jest-environment node
 */

import React from 'react';
import ConfirmPage from '../components/ConfirmPage/ConfirmPage';
import { 
    Button,
    Form
 } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

describe('ConfirmPage', () => {
    const sirenAlertTypes = {
        siren: true,
        radio: false,
        tv: false,
        sms: false
    }

    const tvAlertTypes = {
        siren: false,
        radio: false,
        tv: true,
        sms: false
    }

    const falseAlertTypes = {
        siren: false,
        radio: false,
        tv: false,
        sms: false
    }
    
    const testAlertType = {
        alertType: "Missile Alert",
        alertEvent: "Test Alert"
    }

    const testDisasterAlerts = {
        alertType: {testAlertType}
    }

    it('Should render properly', () => {
        const wrapper = shallow(<ConfirmPage alertTypes={sirenAlertTypes} disasterAlerts={testDisasterAlerts}/>);
        expect(wrapper.exists(<Button/>)).toBe(true);
    });

    it('Has two password fields', () => {
            const wrapper = shallow(<ConfirmPage alertTypes={sirenAlertTypes} disasterAlerts={testDisasterAlerts}/>);
            expect(wrapper.find(Form.Input).length).toBe(2);
    });


})