
import React from "react"
import Button from "shared/components/Button"
import Message from "shared/components/Message"

export default class Test extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Button type="primary">李金珂真帅!</Button>
      </div>
    )
  }
  componentDidMount() {
    Message.info('这里可以用来导入写好的公用组件来测试!')
    console.log('测试模块路由,写好的组件可以引入到这里测试看效果')
  }
}