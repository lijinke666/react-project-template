import React, { PureComponent } from "react";

export default class Root extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}
