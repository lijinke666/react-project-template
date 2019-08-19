import React from "react";
import classNames from "classnames";
import "./index.less";

const Container = props => {
  const { className, ...attr } = props;
  return (
    <div key="container" className="container">
      <div className={classNames("wrap", className)} {...attr}>
        {this.props.children}
      </div>
    </div>
  );
};

export default Container;
