import helper from "libs/helper"
export const TEST_ACTION = "test_action"

/**
 * @param {Any} parmas  这里可以拿到传过来的参数进行 请求处理 
 */
export default (parmas = {}) => (dispatch) => {        
    setTimeout( async ()=>{
        const data = await helper.getMockJson('/dwadler.json')
        dispatch({
            type: TEST_ACTION,
            data,
            loading:false
        })
    },1000)
}