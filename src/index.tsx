// tslint:disable-next-line: no-var-requires
import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { BrowserRouter as Router } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/zh-cn'

import App from './app'

import 'normalize.css'
import './index.less'

moment.locale('zh-cn')

const render = (Component: any) => {
  ReactDOM.render(
    <ConfigProvider locale={zhCN}>
      <Router>
        <Component />
      </Router>
    </ConfigProvider>,
    document.getElementById('root'),
  )
}

render(App)
