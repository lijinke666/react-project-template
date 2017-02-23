import React from 'react'
import {connect} from 'react-redux'

import "./styles.less"

//redux的第二种写法
// const {isShow} = this.state
@connect(
  ({isShow})=>({
    isShow:isShow
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
      console.log(isShow)
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
