import React, { Suspense } from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Skeleton } from 'antd'
import Home from './home'

import './index.less'

const App = () => {
  return (
    <Suspense fallback={<Skeleton active />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route
          path="*"
          render={() => {
            return <Redirect to="/" />
          }}
        />
      </Switch>
    </Suspense>
  )
}

export default hot(App)
