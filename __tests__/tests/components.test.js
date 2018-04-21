/*eslint-disable */
import React from "react";
import assert from "power-assert";
import Root from "../../src/app/components/Root";
import ErrorBoundary from "../../src/shared/components/ErrorBoundary";
import Container from "../../src/shared/components/Container";
import NotFound from "../../src/app/components/NotFound";
import { Alert } from "antd";
import { render, mount, shallow } from "enzyme";

describe("ComponentsTests", () => {
  describe("<Root/>", () => {
    it("should render <Root/>", () => {
      const wrapper = shallow(<Root />);
      expect(wrapper).toMatchSnapshot();
      assert(wrapper.find("div").length >= 1);
    });
  });
  describe("<NotFound/>", () => {
    it("should render <NotFound/>", () => {
      const wrapper = shallow(<NotFound />);
      expect(wrapper).toMatchSnapshot();
      assert(wrapper.find(Alert).length === 1);
    });
  });
  describe("<ErrorBoundary/>", () => {
    it("should render <Alert/> of the <ErrorBoundary/>", () => {
      const MyComponent = ErrorBoundary(Root);
      const wrapper = mount(<MyComponent />);
      wrapper.setState({ errorInfo: "errorInfo", error: "error" });
      assert(wrapper.find(Alert).length === 1);
    });
  });
  describe("<Container/>", () => {
    it("should render children of the <Container/> and have container className", () => {
      const wrapper = shallow((
        <Container>
          <div className="dawdler" />
        </Container>
      ));
      assert( wrapper.contains(<div className="dawdler" />) === true)
      assert( wrapper.find(".container").length === 1)
      assert( wrapper.find(".wrap").length === 1)
    });
  });
});
