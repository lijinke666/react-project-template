import { lazy } from "react";

const Home = lazy(() => import(/* webpackChunkName: "home" */ "Home"));

export const routes = [
  {
    path: "/",
    component: Home,
    text: "首页",
    children: []
  }
];

export const getAllFlattenRoutes = (routers = routes) => {
  return routers.reduce((prev, curr) => {
    return prev.concat(
      curr,
      Array.isArray(curr.children) ? getAllFlattenRoutes(curr.children) : []
    );
  }, []);
};
