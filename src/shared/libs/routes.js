import { lazy } from "react";

const Home = lazy(() => import(/* webpackChunkName: "home" */ "Home")); //主页
const TestPage = lazy(() =>
  import(/* webpackChunkName: "testPage" */ "app/testPage")
); //测试组件路由

export { Home, TestPage };
