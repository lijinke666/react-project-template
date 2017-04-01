const nameInitialState = {}
export default function (state = nameInitialState, action) {
  const {type,data} = action;
  switch (action.type) {
    case "getMusicDetail":
      return {
        data
      }
  }
  return state
}