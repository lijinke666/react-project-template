import React from 'react'
import { hot } from "react-hot-loader"  
import { Router, browserHistory } from "react-router"
import routes from "shared/libs/routes"
class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory} routes={routes}></Router>
        )
    }
}

export default hot(module)(App)


