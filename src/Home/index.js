import React, { PureComponent, Fragment } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Divider, Button, message } from "antd"

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
  goGithub = () => {
    message.info('谢谢!')
    location.href = "https://github.com/lijinke666"
  }
  render() {
    const { loading } = this.state
    const { name } = this.props               //通过 react-redux connect 之后 props 里面有 name 这个属性
    return (
      <Fragment key="Fragment">
        <div key="home" className="home">
          {
            loading
              ? <Spin tip="Loading..."></Spin>
              : <Fragment>
                <h2>Hello my name is <strong className="name">{name}</strong></h2>
                <span>:)</span>
              </Fragment>
          }
          <Button type="primary" onClick={this.goGithub}>Github</Button>
        </div>
        <Divider>react-project-template</Divider>
      </Fragment>
    )
  }
  componentDidMount() {
    this.setState({ loading: true }, () => {
      setTimeout(() => {
        this.props.getMyName('李金珂')
        this.setState({ loading: false })
      }, 1000)
    })
  }
}
