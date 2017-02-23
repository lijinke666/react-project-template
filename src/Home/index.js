import React from 'react'
import {Link} from "react-router"

const testImage = require("images/testFileLoader.jpg")

export default class Home extends React.Component{
  render(){
    return(
      <div>
        <h2>首页</h2>
        <Link to="/app/about">关于我们</Link>
        <img src={testImage}/>
      </div>
    )
  }
}
