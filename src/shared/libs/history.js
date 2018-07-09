//选用 HTML5 history api 模式
import createBrowserHistory from "history/createBrowserHistory";

export default createBrowserHistory({
  basename: "", 
  forceRefresh: false 
});
