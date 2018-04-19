//项目的 store 注入了 所有的 reducer 和异步中间键
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux"; //新版不再像 之前 syncHistoryWithStore 的用法,而是改成了中间键
import logger from "redux-logger";
import thunk from "redux-thunk";
import history from "libs/history";

//自定义中间键, 按顺序依次执行 (next()) 如果中间键没有调用 next() 则会阻塞
import hello from "./middleware/hello";

//reducers
import reducers from "reducers";

const store = createStore(
  reducers,
  compose(applyMiddleware(routerMiddleware(history), thunk, hello, logger))
);

export default store;
