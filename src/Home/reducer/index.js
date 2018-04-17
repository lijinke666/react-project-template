import {TEST_ACTION} from "../action"
const defaultState = {
    loading:true,
    data:{
        toolName:"",
        name:"",
        repository:{}
    }
}
export default function (state = defaultState, action) {
    const {type,data,loading} = action
    switch (type) {
        case TEST_ACTION:
            return {
                ...state,
                data,
                loading
            }
        default:
            return state
    }
}