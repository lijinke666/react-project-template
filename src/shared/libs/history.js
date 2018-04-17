
//选用 HTML5 history api 模式 
import createBrowserHistory from 'history/createBrowserHistory'

export default createBrowserHistory({
  basename: "", // The base URL of the app (see below)
  forceRefresh: false, // Set true to force full page refreshes
})
