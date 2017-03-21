const initialState = {
  color: "rgb(0,0,0)", 
  size: "400" 
}

export default function reducer(state = initialState,action) {
    const {color,size} = action
    switch (action.type){
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
    }
    return state;
}
