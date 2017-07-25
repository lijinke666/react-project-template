import {browserHistory} from "react-router"
import {syncHistoryWithStore} from "react-router-redux"
import store from "store"

export default syncHistoryWithStore(browserHistory, store)        //router 与store绑定