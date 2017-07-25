//项目的 store 注入了 所有的 reducer 和异步中间键
//如不喜欢 react-thunk 可自行修改
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import reducers from "reducers"

const store = createStore(
    reducers,
    compose(                   
        applyMiddleware(thunk)
    )
)


export default store