import helper from "libs/helper"
export const TEST_ACTION = "test_action"

/**
 * 
 * @param {Any} parmas  这里可以拿到传过来的参数进行 请求处理 
 */
export default function (parmas = 'Dawdler') {        
    return async function (dispatch) {
        dispatch({
            type: TEST_ACTION,
            name: parmas
        })
    }
}