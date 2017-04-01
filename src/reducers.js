import InputAction from "app/components/Input/reducer"
import AboutAction from "app/components/About/reducer"
import MusicAction from "app/components/Music/reducer"
import MusicDetailAction from "app/components/MusicDetail/reducer"

import { combineReducers } from "redux"     //reducer的合并
//TODO  组件过多之后 reducer过多 应该每一个组件一个reducer  然后全部导入到这个文件中实现reducer的拆分

const chatReducer = combineReducers({
  InputAction,
  AboutAction,
  MusicAction,
  MusicDetailAction     
})

export default chatReducer
