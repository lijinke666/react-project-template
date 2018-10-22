import { createStore, applyMiddleware } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import history from "libs/history";

const logger = createLogger({
  collapsed: true,
  diff: true
});

import reducers from "reducers";

const configureStore = (initialState = {}) => {
  const middleware = [routerMiddleware(history), thunk, logger];

  return createStore(
    connectRouter(history)(reducers),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
};

export default configureStore();
