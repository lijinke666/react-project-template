// import update from "react/lib/update"
const initialState = {
  color: "rgb(0,0,0)",
  size: "400"
}

export default function reducer(state = initialState, action) {
  const { color, size } = action
  switch (action.type) {
    case 'colorChange':
      // {...state,color}  ===>  Object.assign({},state,{color})
      // return update(state,{color})    //react 的一种更新方法
      return {
        ...state,
        color
      }
    case 'sizeChange':
      return {
        ...state,
        size
      }
  }
  return state;
}
