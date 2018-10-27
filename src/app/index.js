import React, { PureComponent, Suspense } from "react";
import { hot } from "react-hot-loader";
import { Redirect, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Home, TestPage } from "libs/routes";
import NotFound from "app/components/NotFound";
import history from "libs/history";
import { Spin } from "antd";

import "./styles.less";

@hot(module)
export default class App extends PureComponent {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Suspense fallback={<Spin tip="loading..." />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/home"
              render={() => <Redirect to="/" />}
              component={Home}
            />
            <Route path="/testPage" component={TestPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </ConnectedRouter>
    );
  }
}
