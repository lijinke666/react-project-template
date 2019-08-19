import React, { Suspense } from "react";
import { hot } from "react-hot-loader";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NotFound from "app/components/NotFound";
import { routes } from "shared/libs/routes";
import { Spin } from "antd";
import { getAllFlattenRoutes } from "../shared/libs/routes";

import "./styles.less";

const App = () => (
  <Router>
    <Suspense fallback={<Spin tip="loading..." />}>
      <Switch>
        {getAllFlattenRoutes(routes).map(({ path, component }) => (
          <Route exact path={path} component={component} key={path} />
        ))}
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default hot(module)(App);
