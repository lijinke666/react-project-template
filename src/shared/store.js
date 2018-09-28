import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import history from "libs/history";

import hello from "./middleware/hello";

import reducers from "reducers";

const configureStore = (initialState = {}) => {
  const middleware = [routerMiddleware(history), thunk, hello, logger];
  if (process.env.NODE_ENV === "development") {
    const enhancer = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );
    const store = createStore(reducers, compose(middleware), enhancer);
    return store;
  } else {
    const store = createStore(reducers, compose(middleware));
    return store;
  }
};

export default configureStore();
