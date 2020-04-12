import React from 'react';
import { shallow } from 'enzyme';
import Dialog from '../Dialog';

describe('<Dialog />', () => {
    it('should not display the Dialog', () => {
        const props = { isOpen: false, onClose: jest.fn() }
        const wrappedComponent = shallow(<Dialog {...props} />);
        expect(wrappedComponent.find('dialog').exists()).toEqual(false)
    });

    it('should display the Dialog', () => {
        const props = { isOpen: true, onClose: jest.fn() }
        const wrappedComponent = shallow(<Dialog {...props} />);
        expect(wrappedComponent.find('.dialog').exists()).toEqual(true)
    });

    it('should close the Dialog', () => {
        const props = { isOpen: true, onClose: jest.fn() }
        const wrappedComponent = shallow(<Dialog {...props} />);
        wrappedComponent.find('.dialog__close-btn').simulate('click');
        expect(props.onClose).toBeCalled();
    });

    it('should render title', () => {
        const props = { isOpen: true, onClose: jest.fn(), title: "Hello" }
        const wrappedComponent = shallow(<Dialog {...props} />);
        expect(wrappedComponent.find('.dialog__title').exists()).toBeTruthy()
    });

    it('should render the child elements', () => {
        const props = { isOpen: true, onClose: jest.fn(), children: 'children' };
        const wrappedComponent = shallow(<Dialog {...props} />);
        expect(wrappedComponent.find('.dialog__content').exists()).toBeTruthy();
    });
})