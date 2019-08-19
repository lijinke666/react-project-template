import React, { useCallback } from "react";
import { Divider, Button, message } from "antd";
import errorBoundary from "shared/components/ErrorBoundary";
import "./styles.less";

const Home = () => {
  const goGithub = useCallback(() => {
    message.info("Thank you!");
    location.href = "https://github.com/lijinke666/dawdler.git";
  }, []);
  return (
    <>
      <h2>
        Hey ! Thank you for using
        <strong className="name">dawdler</strong>
      </h2>
      <div className="logo">
        <img src={require("../../logo.png")} alt="" />
      </div>
      <Button icon="github" type="primary" onClick={goGithub}>
        Github
      </Button>
      <Divider>
        {name} By:{" "}
        <a href="https://github.com/lijinke666/dawdler.git" target="_blank">
          dawdler
        </a>
      </Divider>
    </>
  );
};

export default errorBoundary(Home);
