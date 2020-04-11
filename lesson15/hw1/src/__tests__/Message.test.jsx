import React from "react";
import Message from '../Message';
import { shallow } from 'enzyme';

describe('<Message />', () => {
    it('should render text', () => {
        const props = { text: 'Hello world' }
        const wrappedComponent = shallow(<Message {...props} />);
        expect(wrappedComponent).toMatchSnapshot();
    }),

        it('should not render text', () => {
            const props = { text: '' }
            const wrappedComponent = shallow(<Message {...props} />);
            expect(wrappedComponent).toMatchSnapshot();
        })

})