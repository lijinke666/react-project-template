import request from "libs/request";
export const TEST_ACTION = "test_action";

/**
 * @param {Any} params  这里可以拿到传过来的参数进行 请求处理
 */
export default (params = {}) => dispatch => {
  setTimeout(async () => {
    const { data } = await request.get("/dawdler.json");
    dispatch({
      type: TEST_ACTION,
      data,
      loading: false
    });
  }, 1000);
};
