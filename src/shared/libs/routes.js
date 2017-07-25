import NProgress from "nprogress"
import "nprogress/nprogress.css"

//这里引入你的路由
const Root = () => loadRoute(import(/* webpackChunkName:"Root" */ 'app/components/Root'))  //母版
const Home = () => loadRoute(import(/* webpackChunkName:"Home" */ 'Home'))        //主页
const Test = () => loadRoute(import(/* webpackChunkName:"Test" */ 'app/test'))   //测试组件路由

//按需加载路由
const loadRoute = (importFn, name = "default") => {
  NProgress.start()
  return importFn.then((module) => {
    NProgress.done()
    NProgress.remove()
    return module[name]
  })
}

//这里配置路由地址

export default [
  {
    path: "/",
    getComponent: Root,
    indexRoute: {
      getComponent: Home
    },
    childRoutes: [{
        path: "/home",
        getComponent: Home
      }
    ]
  },
  {
    path: "test",
    getComponent: Test
  }

]
