import React, { PureComponent } from "react";
import Container from "shared/components/Container";
import { message } from "antd";

export default class Test extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <h2>Dawdler!</h2>
      </Container>
    );
  }
  componentDidMount() {
    message.info("测试模块路由,写好的组件可以引入到这里测试看效果");
  }
}
