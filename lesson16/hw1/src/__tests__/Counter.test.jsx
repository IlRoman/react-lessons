import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';

describe('<Counter />', () => {
    it('defaultState should be equal to 0', () => {
        const wrappedComponent = shallow(<Counter />);
        expect(wrappedComponent.state('counter')).toEqual(0)
    })

    it('should decrease counter by 1', () => {
        const wrappedComponent = shallow(<Counter />);
        wrappedComponent.find('.counter__button:first-child').simulate('click')
        expect(wrappedComponent.state('counter')).toEqual(-1)
    })

    it('should increase counter by 1', () => {
        const wrappedComponent = shallow(<Counter />);
        wrappedComponent.find('.counter__button:last-child').simulate('click')
        expect(wrappedComponent.state('counter')).toEqual(1)
    })

    it('should assign value to counter - 0', () => {
        const wrappedComponent = shallow(<Counter />);
        wrappedComponent.find('.counter__value').simulate('click')
        expect(wrappedComponent.state('counter')).toEqual(0)
    })
})