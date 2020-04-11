import React from "react";
import Mailbox from '../Mailbox';
import { shallow } from 'enzyme';

describe('<Mailbox />', () => {
    it('should render count of unread messages', () => {
        const props = { unreadMessages: [1, 2, 3, 4] };
        const wrappedComponent = shallow(<Mailbox {...props} />);
        expect(wrappedComponent).toMatchSnapshot();
    })

    it('should not render unread messages', () => {
        const props = { unreadMessages: [] }
        const wrappedComponent = shallow(<Mailbox {...props} />);
        expect(wrappedComponent).toMatchSnapshot();
    })
})