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
    data: HomeReducer.data,
  }),
  (dispatch) => (
    bindActionCreators({
      getMyName
    }, dispatch)
  )
)

export default class Home extends PureComponent {
  state = {
    loading: true
  }
  constructor(props){
    super(props)
    this.myGithubAddress = "https://github.com/lijinke666/dawdler"
  }
  goGithub = (url) => {
    message.info('Thank you!')
    location.href = url
  }
  render() {
    const { loading } = this.state
    const { data:{
      toolName,
      name,
      repository
    } } = this.props               //通过 react-redux connect 之后 props 里面有 state 里的 data

    return (
      <>
        <div key="home" className="home">
          {
            loading
              ? <h2><Spin tip="Loading..."></Spin></h2>
              : <h2>Hey ! welcome to use  <strong className="name">{toolName}</strong></h2>
          }
          <Button icon="github" type="primary" onClick={()=> this.goGithub(repository.git)}>Github</Button>
        </div>
        <Divider>{name} By: <a href={repository.git} target="_blank">{toolName}</a></Divider>
      </>
    )
  }
  async componentDidMount() {
      await this.props.getMyName('Dawdler')
      this.setState({loading:false})
  }
}
