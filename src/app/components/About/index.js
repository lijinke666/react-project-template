import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Popup from '../Popup'

import "./styles.less"
//修饰器  Decorator
//只能写到类的上面 找最近的一个类。。。。
@connect(
  ({isShow})=>({              // 接受一个新的全局状态  然后返回到当前组件 告诉当前组件跟新
    isShow:isShow             // {isShow} = this.state;
  }),
  ( dispatch ) =>({            //绑定当前组件的一些事件 发送dispatch 通知  reducer接受到type 做出相应的处理
    onBtnClick:()=>{           //相当于是 this.props.onBtnClick   
      dispatch({
            type:"showPopup"
        }) 
    }
  })
)

export default class About extends React.Component{
  constructor(props){
    super(props)
  }
  onGoBack = ()=>{
    history.back()
  }
  render(){
      const {onBtnClick} = this.props;
      return (
        <div>
          <h2>关于我们</h2>
          <Link to="" onClick={this.onGoBack}>返回</Link>
          <button onClick= {onBtnClick}>dispatch通知显示弹窗组件</button>
          <Popup
            width={200}
            height={200}
            text="redux练习"
          />
        </div>

      )
    }
}


// function mapStateToProps( state ){
//     return {
//       isShow:state.isShow
//     }
// }

// //处理 UI 组件绑定的一些事件
// //发出 action 让reducer得到相应 返回新的状态
// function mapDispatchToProps ( dispath ) {
//     return {
//         //dispath type字段必须  payload 就是携带的信息
//         onBtnClick:()=>{
//             dispath({
//                 type:"showPopup"
//             })
//         }
//     }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(About)
