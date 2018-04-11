/**
 * @jest-environment node
 */
import React from 'react';
import { 
    Button,
    Modal, 
} from 'semantic-ui-react';
import { 
    ModalClass,
    InnerModal 
} from '../components/Shared';
import { Link } from 'react-router-dom';

import { shallow } from 'enzyme';

describe('ModalClass', () => {
    const wrapper = shallow( <ModalClass link={'/alertpage'}/> );
    it('renders properly', () => {
        expect(wrapper.exists(Modal)).toBe(true)
    });

    it('has two inner-modal options', () => {
        expect(wrapper.find(InnerModal).length).toBe(2);
    });

    it('modal button colors are red and green respective', () => {
        expect(wrapper.find(InnerModal).at(0).props().color).toBe("red");
        expect(wrapper.find(InnerModal).at(1).props().color).toBe("green");
    });

    it('left modal is emergency alert; right modal is test alert', () => {
        expect(wrapper.find(InnerModal).at(0).props().buttonLabel).toBe("Emergency Alert")
        expect(wrapper.find(InnerModal).at(1).props().buttonLabel).toBe("Test Alert")
    });

    it('inner-modal has two buttons', () => {
        expect(shallow(<InnerModal/>).find(Button).length).toBe(2);
    });

    it('modal is initially closed', () => {
        expect(wrapper.state().open).toBe(false);
    })

    it('modal is open after click button', () => {
        console.log(wrapper.find(InnerModal).at(0).dive().find(Link).props());
        console.log(wrapper.find(InnerModal).at(1).dive().find(Link).props())
        wrapper.instance().handleOpen();
        expect(wrapper.state().open).toBe(true);
    })

});
