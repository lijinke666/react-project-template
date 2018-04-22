import fetch from "libs/fetch";
export const TEST_ACTION = "test_action";

/**
 * @param {Any} params  这里可以拿到传过来的参数进行 请求处理
 */
export default (params = {}) => dispatch => {
  setTimeout(async () => {
    const data = await fetch.getMockJson("/dawdler.json");
    dispatch({
      type: TEST_ACTION,
      data,
      loading: false
    });
  }, 1000);
};
