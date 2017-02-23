import React from "react"
import ReactDOM from "react-dom"
import { AppContainer as HotLoader } from "react-hot-loader"     //react-hot-loader  热更新可以保存状态  

import { createStore } from "redux"
import { Provider } from "react-redux"

import App from "app"

import reducer from "./reducer"
const store = createStore(reducer);

const render = ( Component ) => {
    ReactDOM.render(
        <HotLoader>
            <Provider store={store}>
                <Component/>
            </Provider>
        </HotLoader>,
        document.getElementById('root')
    )
}
render(App)
//webpack内置对象
if (module.hot) {
    module.hot.accept("app", () => {
        render(App)
    });
}
