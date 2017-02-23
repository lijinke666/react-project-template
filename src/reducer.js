//TODO  组件过多之后 reducer过多 应该每一个组件一个reducer  然后全部导入到这个文件中实现reducer的拆分
export default function reducer(
  state = { 
    isShow: false,color:"rgb(0,0,0)",size:"400" 
  }, action) {
    const {type,color,size} = action;
    switch (type) {
      case "showPopup":
        return {
          isShow: !state.isShow
        }
      case 'colorChange':
        // {...state,color}  ===>  Object.assign({},state,{color})
        return {
          ...state,
          color
        }
      case 'sizeChange':
        return {
          ...state,
          size
        }
      default:
        return state
    }
}
