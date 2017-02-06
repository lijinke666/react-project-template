import React from "react"
import ReactDOM from "react-dom"
import {AppContainer} from "react-hot-loader"

import {createStore} from "redux"
import {Provider} from "react-redux"
import {Router, Route,hashHistory,IndexRoute} from "react-router"

import App from "./app"
import About from "./app/components/About"
import Home from "./Home"

import reducer from "./reducer"
const store = createStore(reducer);

console.log(store, '======');

window.store = store

ReactDOM.render(
    <Provider store={store}>
        <Router history={ hashHistory }>
          <Route path="/" component={App}>        //将所有组件放在App容器中
              <IndexRoute component={Home}/>      //默认加载Home路由
              <Route path="/about" component={About}/>    //访问about  加载对应的about的组件
              <Route path="/home" component={Home}/>
          </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
