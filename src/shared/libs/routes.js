import {Route, IndexRoute } from "react-router"
import Root from "app/components/Root"
import About from "app/components/About"
import Game from "app/components/Game"
import Home from "home"

const routes =  <Route path="/" component={Root}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/game" component={Game} />
    </Route>;


export default routes