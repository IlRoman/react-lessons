import React from "react";
import Auth from "../Auth";
import { shallow } from "enzyme";

describe("<Auth />", () => {
    it("should display Login button if user is logged out", () => {
        const wrappedComponent = shallow(<Auth />);

        expect(wrappedComponent.find('Login').exists()).toBeTruthy();
    });

    it("should display Logout button if user is logged in", () => {
        const wrappedComponent = shallow(<Auth />);
        wrappedComponent.find('Login').prop('onLogin')();
        expect(wrappedComponent.find('Logout').exists()).toBeTruthy();
    });
});