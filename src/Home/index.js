import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Divider, Button, message, Spin } from "antd";
import errorBoundary from "shared/components/ErrorBoundary";

import sayHello from "./action";
import "./styles.less";

@connect(
  ({ HomeReducer }) => ({
    data: HomeReducer.data,
    loading: HomeReducer.loading
  }),
  dispatch =>
    bindActionCreators(
      {
        sayHello
      },
      dispatch
    )
)
@errorBoundary
export default class Home extends PureComponent {
  constructor(props) {
    super(props);
  }
  goGithub = url => {
    message.info("Thank you!");
    location.href = url;
  };
  render() {
    const {
      loading,
      data: { toolName, name, repository }
    } = this.props;

    return (
      <div key="home" className="home">
        {loading ? (
          <Spin tip={`Welcome to use Dawdler.`} size="large" />
        ) : (
          <>
            <h2>
              Hey ! Thank you for using{" "}
              <strong className="name">{toolName}</strong>
            </h2>
            <div className="logo">
              <img src={require("../../logo.png")} alt="" />
            </div>
            <Button
              icon="github"
              type="primary"
              onClick={() => this.goGithub(repository.git)}
            >
              Github
            </Button>
            <Divider>
              {name} By:{" "}
              <a href={repository.git} target="_blank">
                {toolName}
              </a>
            </Divider>
          </>
        )}
      </div>
    );
  }
  componentDidMount() {
    this.props.sayHello();
  }
}
