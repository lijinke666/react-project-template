import React, { PureComponent, Suspense } from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import NotFound from "app/components/NotFound";
import history from "libs/history";
import { routes } from "shared/libs/routes";
import { Spin } from "antd";
import { getAllFlattenRoutes } from "../shared/libs/routes";

import "./styles.less";

@hot(module)
export default class App extends PureComponent {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Suspense fallback={<Spin tip="loading..." />}>
          <Switch>
            {getAllFlattenRoutes(routes).map(({ path, component }) => (
              <Route exact path={path} component={component} key={path} />
            ))}
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </ConnectedRouter>
    );
  }
}
