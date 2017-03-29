const initialState = {
  isShow: false
}

export default function reducer(state = initialState, action) {
  const { isShow } = action;

  switch (action.type) {
    case "showPopup":
      return {
        isShow: !isShow
      }
  }
  return state
}
