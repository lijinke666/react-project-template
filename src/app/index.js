import React from 'react'
import {Link} from 'react-router'

export default class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
      return (
        <div>
          <Link to="/home" activeStyle={{color:'red'}}>首页</Link>
          <Link to="/about" activeStyle={{color:'red'}}>关于我们</Link>
          <section>{this.props.children}</section>
        </div>
      )
    }
}
