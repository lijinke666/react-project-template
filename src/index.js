//项目入口文件

import React from "react"
import ReactDOM from "react-dom"   
import { Provider } from "react-redux"

//antd3.0 默认英文 需要手动设置为中文
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

import App from "app"
import store from "store"
import "normalize.css"
import "./style.less"

moment.locale('zh-cn')

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <LocaleProvider locale={zhCN}>
                <Component />
            </LocaleProvider>
        </Provider>,
        document.getElementById('root')
    )
}

render(App)
