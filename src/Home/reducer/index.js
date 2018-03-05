import {TEST_ACTION} from "../action"
const defaultState = {
    name:'Dawdler'
}
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