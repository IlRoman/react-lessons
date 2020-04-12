import React from "react";
import { shallow } from 'enzyme';
import Greeting from '../Greeting';

describe('<Greeting />', () => {
    it('should display user greeting if user is logged in', () => {
        const wrappedComponent = shallow(<Greeting isLoggedIn />)
        expect(wrappedComponent.find('UserGreeting').ex)
    })

    it('should display guest greeting if user is not logged in', () => {
        const wrappedComponent = shallow(<Greeting />)
        expect(wrappedComponent.find('UserGreeting').ex)
    })
})
