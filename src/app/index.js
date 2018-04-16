import React,{PureComponent} from 'react'
import { hot } from "react-hot-loader"  
import { BrowserRouter,Redirect, Route, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { ConnectedRouter } from 'react-router-redux'   //5.0 移除了 history 需要手动引入 history依赖
import routes from "libs/routes"
import history from "libs/history"


class App extends PureComponent {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                <h2>1111222</h2>
                <Switch>
                    <Route exact path="/" component={routes.Home}></Route>
                </Switch>
                </div>
            </ConnectedRouter>
        )
    }
}

export default hot(module)(App)


