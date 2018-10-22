import React, { PureComponent } from "react";
import classNames from "classnames";
import "./index.less";

//默认宽度 为1200px 所以将你的html 外面包一个这个 <Container>你的html</Container>

export default class Container extends PureComponent {
  render() {
    const { className, ...attr } = this.props;
    return (
      <div key="container" className="container">
        <div className={classNames("wrap", className)} {...attr}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
