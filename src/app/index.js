import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import Routes from "libs/routes"

export default class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory} routes={Routes} />
        )
    }
}
