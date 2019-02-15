import HomeReducer from "Home/reducer";

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const reducers = {
  HomeReducer
};
export default history =>
  combineReducers({
    router: connectRouter(history),
    ...reducers
  });
