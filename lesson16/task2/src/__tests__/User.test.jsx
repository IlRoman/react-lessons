import React from 'react';
import User from '../User';
import { shallow } from 'enzyme';
import { getUserData } from '../usersGateway';

jest.mock('../usersGateway', () => {
    return {
        getUserData: jest.fn(() => Promise.resolve())
    }
});

describe('User', () => {
    it('should not display user', () => {
        const wrappedComponent = shallow(<User />);
        expect(wrappedComponent.find('.user').exists()).toEqual(false);
    });

    it("should display user's data", () => {
        const wrappedComponent = shallow(<User />);
        wrappedComponent.setState({
            userData: {
                avatar: 'https://examrle.com',
                name: 'John',
                location: 'Planet Earth'
            }
        });
        expect(wrappedComponent.find('.user')).toMatchSnapshot();
    });

    it("should display user's data", () => {
        shallow(<User />);
        expect(getUserData).toBeCalled();
    });
});