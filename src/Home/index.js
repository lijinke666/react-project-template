import React, { PureComponent } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Divider, Button, message,Spin } from "antd"
import errorBoundary from "shared/components/ErrorBoundary"

import sayHello from "./action"
import "./styles.less"

/**
 * 这里绑定 你 自己的 action
 * 每一个路由 对应一个 action 和 reducer  好维护,直观
 * 这里用到了 类的修饰器 比 传统的那种写法 方便直观一些
 */
@connect(
  ({ HomeReducer }) => ({
    data: HomeReducer.data,
    loading:HomeReducer.loading
  }),
  (dispatch) => (
    bindActionCreators({
      sayHello
    }, dispatch)
  )
)
@errorBoundary

export default class Home extends PureComponent {
  constructor(props){
    super(props)
  }
  goGithub = (url) => {
    message.info('Thank you!')
    location.href = url
  }
  render() {
    const { 
      loading,
      data:{
        toolName,
        name,
        repository
    } } = this.props               //通过 react-redux connect 之后 props 里面有 state 里的 data

    return (
        <div key="home" className="home">
        {
          loading
          ? <Spin tip={`Welcome to use Dawdler.`} size="large"></Spin>
          : <>
              <h2>Hey ! Thank you for using  <strong className="name">{toolName}</strong></h2>
              <Button icon="github" type="primary" onClick={()=> this.goGithub(repository.git)}>Github</Button>
              <Divider>{name} By: <a href={repository.git} target="_blank">{toolName}</a></Divider>
            </>
        }
        </div>
    )
  }
  async componentDidMount() {
      await this.props.sayHello()
  }
}
