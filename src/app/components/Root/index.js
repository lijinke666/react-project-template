import React,{PureComponent} from "react"

export default class Root extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h2>2222</h2>
        {this.props.children}
      </div>
    )
  }
}