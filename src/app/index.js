import React, { PureComponent } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux"; //5.0 移除了 history 需要手动引入 history依赖
import { AnimatedSwitch } from "react-router-transition";
import { Home, Test } from "libs/routes";
import NotFound from "app/components/NotFound";
import history from "libs/history";

import "./styles.less";

class App extends PureComponent {
  render() {
    return (
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/home"
              render={() => <Redirect to="/" />}
              component={Home}
            />
            <Route path="/test" component={Test} />
            <Route path="*" component={NotFound} />
          </AnimatedSwitch>
        </BrowserRouter>
      </ConnectedRouter>
    );
  }
}

export default hot(module)(App);
