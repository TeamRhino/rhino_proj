/**
 * @jest-environment node
 */

import React from 'react';
import SuccessPage from '../components/SuccessPage/SuccessPage';
import { Button } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

describe('SuccessPage', () => {
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

    it('Should render properly', () => {
        const wrapper = shallow(<SuccessPage alertTypes={sirenAlertTypes}/>);
        expect(wrapper.exists(<Button/>)).toBe(true);
    });

    it('Should render audio when siren is true', () => {
        const wrapper = shallow(<SuccessPage alertTypes={sirenAlertTypes}/>);
        expect(wrapper.find('audio').length).toBe(1);
    })

    it('Should render iframe when tv is true', () => {
        const wrapper = shallow(<SuccessPage alertTypes={tvAlertTypes}/>)
        expect(wrapper.find('iframe').length).toBe(1);
    })

    it('Should not render iframe when tv is false or audio when siren is false', () => {
        const wrapper = shallow(<SuccessPage alertTypes={falseAlertTypes}/>);
        console.log(wrapper.debug())
        expect(wrapper.find('iframe').length).toBe(0);
        expect(wrapper.find('audio').length).toBe(0);
    })

   
})