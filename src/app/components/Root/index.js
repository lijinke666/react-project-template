import React,{PureComponent} from "react"

export default class Root extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
  componentDidMount() {
    console.log('这个是母版,不会被刷新')
  }
  componentDidCatch(error,info){
    console.log(error,info);
  }
}