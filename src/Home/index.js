import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Divider, Button, message,Spin } from "antd"

import getMyName from "./action"
import "./styles.less"

/**
 * 这里绑定 你 自己的 action
 * 每一个路由 对应一个 action 和 reducer  好维护,直观
 * 这里用到了 类的修饰器 比 传统的那种写法 方便直观一些
 */
@connect(
  ({ HomeReducer }) => ({
    name: HomeReducer.name,
  }),
  (dispatch) => (
    bindActionCreators({
      getMyName
    }, dispatch)
  )
)

export default class Home extends PureComponent {
  state = {
    loading: false
  }
  constructor(props){
    super(props)
    this.myGithubAddress = "https://github.com/lijinke666/dawdler"
  }
  goGithub = () => {
    message.info('Thank you!')
    location.href = this.myGithubAddress
  }
  render() {
    const { loading } = this.state
    const { name } = this.props               //通过 react-redux connect 之后 props 里面有 name 这个属性
    return (
      <>
        <div key="home" className="home">
          {
            loading
              ? <h2><Spin tip="Loading..."></Spin></h2>
              : <h2>Hello my name is <strong className="name">{name}</strong></h2>
          }
          <Button type="primary" onClick={this.goGithub}>Github</Button>
        </div>
        <Divider>react-project-template By:<a href={this.myGithubAddress} target="_blank">Dawdler</a></Divider>
      </>
    )
  }
  componentDidMount() {
    this.setState({ loading: true }, () => {
      setTimeout(() => {
        this.props.getMyName('Dawdler')
        this.setState({ loading: false })
      }, 1000)
    })
  }
}
