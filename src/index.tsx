import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import App from './app'
import './index.less'

import 'moment/locale/zh-cn'

moment.locale('zh-cn')

const render = (Component: React.FC<unknown>) => {
  ReactDOM.render(
    <ConfigProvider locale={zhCN}>
      <Component />
    </ConfigProvider>,
    document.getElementById('root'),
  )
}

render(App)
