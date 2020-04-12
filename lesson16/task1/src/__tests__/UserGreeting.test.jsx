import React from "react";
import UserGreeting from "../UserGreeting";
import { mount } from "enzyme";

describe("<UserGreeting />", () => {
    it("should render correctly user greeting", () => {
        const wrappedComponent = mount(<UserGreeting />);
        expect(wrappedComponent).toMatchSnapshot();
    });
});