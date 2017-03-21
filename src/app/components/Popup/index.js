import React from 'react'
import {connect} from 'react-redux'

import "./styles.less"

//redux的第二种写法
// const {PopupAction} = this.state      PopupAction 里面就有当前组件的的reducer里面的所有对象
@connect(
  ({ PopupAction })=>({
    isShow:PopupAction.isShow
  })
)

export default class Popup extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
      const {width,height,text,isShow} = this.props

      const styles = {
        width,
        height
      }
      return (
        <div>
        {
          isShow ?
          <div
            className="popup"
            key="popup"
            style={ styles }
          >
            {text}
          </div>
          : undefined
        }
        </div>
      )
    }
}

// //老写法
// function mapStateToProps( state ){
//     return {
//         isShow:state.isShow,
//     }
// }

// export default connect(
//   mapStateToProps
// )(Popup)
