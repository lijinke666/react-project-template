//这里引入你所有的 reducer 进行合并

import HomeReducer from "Home/reducer"

import { combineReducers } from "redux"     //reducer的合并

const chatReducer = combineReducers({
  HomeReducer
})

export default chatReducer
