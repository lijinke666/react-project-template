import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import Root from "app/components/Root"
import About from "app/components/About"
import Game from "app/components/Game"
import Home from "home"
import Music from "app/components/music"

export default class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/game" component={Game} />
                    <Route path="/music" component={Music}/>>
                </Route>
            </Router>
        )
    }
}
