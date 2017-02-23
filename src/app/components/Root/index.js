import React from "react"
//将所有组件包裹起来  react-router 会根据对应路由加载对应组件
export default class Root extends React.Component {
  render() {
    return this.props.children
  }
}