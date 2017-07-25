import {TEST_ACTION} from "../action"
const defaultState = '李金珂666'
export default function (state = defaultState, action) {
    const {type,name} = action
    switch (type) {
        case TEST_ACTION:
            return {
                ...state,
                name
            }
        default:
            return state
    }
}