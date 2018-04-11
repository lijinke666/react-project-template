//项目入口文件

import React from "react"
import ReactDOM from "react-dom"
import { AppContainer as HotLoader } from "react-hot-loader"     //react-hot-loader  热更新可以保存状态  
import { Provider } from "react-redux"

//antd3.0 默认英文 需要手动设置为中文
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

import App from "app"
import store from "store"
import "./style.less"


const render = (Component) => {
    ReactDOM.render(
        <HotLoader>
            <Provider store={store}>
                <LocaleProvider locale={zhCN}>
                    <Component />
                </LocaleProvider>
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