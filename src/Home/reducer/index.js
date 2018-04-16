import {TEST_ACTION} from "../action"
const defaultState = {
    data:{
        toolName:"",
        name:"",
        repository:{}
    }
}
export default function (state = defaultState, action) {
    const {type,data} = action
    switch (type) {
        case TEST_ACTION:
            return {
                ...state,
                data
            }
        default:
            return state
    }
}