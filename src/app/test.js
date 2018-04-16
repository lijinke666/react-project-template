
import React,{PureComponent} from "react"
import Container from "shared/components/Container"

export default class Test extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <Container>Dawdler!</Container>
    )
  }
  componentDidMount() {
    console.log('测试模块路由,写好的组件可以引入到这里测试看效果')
  }
}