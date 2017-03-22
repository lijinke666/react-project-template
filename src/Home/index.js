import React from 'react'
import { Link } from "react-router"

const testImage = require("images/testFileLoader.jpg")

export default class Home extends React.Component {
  render() {
    return (
      <div key="home">
        <h2>首页</h2>
        <ol>
           <li><Link to="/about">关于我们</Link></li>
           <li><Link to="/game">游戏</Link></li>
           <li><Link to="/music">音乐</Link></li>
        </ol>
        <img src={testImage} />
      </div>
    )
  }
}
