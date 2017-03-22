import InputAction from "app/components/Input/reducer"
import PopupAction from "app/components/Popup/reducer"
import MusicAction from "app/components/Music/reducer"

import { combineReducers } from "redux"     //reducer的合并
//TODO  组件过多之后 reducer过多 应该每一个组件一个reducer  然后全部导入到这个文件中实现reducer的拆分

const chatReducer = combineReducers({
  InputAction,
  PopupAction,
  MusicAction     
})

export default chatReducer
