import Root from "app/components/Root"
import App from "app"
import About from "app/components/About"
import Game from "app/components/Game"
import Home from "home"

export default {
  path: "/",
  component: Root,
  childRoutes: [
    {
      path: "app",
      component: App,
      childRoutes: [
        { path: "home", component: Home },
        { path: "about", component: About },
        { path: "game", component: Game }
      ]
    },
  ]
}