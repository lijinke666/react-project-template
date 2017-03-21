/**
 * Created by lijinke on 17/1/12.
 */
import React from "react"
//connect   将 视图层 与 状态层 分开
import { connect } from "react-redux"

@connect(
  ({ InputAction })=>({                 //这里箭头函数 {}  会当成一个表达式  但是我们要对象 所以加个括号
    size:InputAction.size,
    color:InputAction.color
  }),
  (dispatch)=>({
        //dispath type字段必须  payload 就是携带的信息
    onSizeChange: (e) => {
      dispatch({
        type: "sizeChange",
        size: e.target.value
      })
    },
    onColorChange: (e) => {
      dispatch({
        type: "colorChange",
        color: e.target.value
      })
    }
  })
)

export default class Input extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {size, onSizeChange, onColorChange, color} = this.props;
    return (
      <div className="index">
        <h2>当前大小 {size}</h2>
        <input type="range" onChange={onSizeChange} value={size} placeholder="请输入大小" step="0.01" max="1000" min="100" />
        <h2>当前颜色 {color}</h2>
        <input type="color" onChange={onColorChange} placeholder="请输入大小" />
      </div>
    )
  }
}



// //将接受到新的state 发送到组件 当成 props
// //组件接受到新的state 就会重新渲染
// //this.props.state.size
// function mapStateToProps(state) {
//   return {
//     size: state.size,
//     color: state.color
//   }
// }


// //处理 UI 组件绑定的一些事件
// //发出 action 让reducer得到相应 返回新的状态
// function mapDispatchToProps(dispath) {
//   return {
//     //dispath type字段必须  payload 就是携带的信息
//     onSizeChange: (e) => {
//       dispath({
//         type: "sizeChange",
//         size: e.target.value
//       })
//     },
//     onColorChange: (e) => {
//       dispath({
//         type: "colorChange",
//         color: e.target.value
//       })
//     }
//   }
// }
// //将 Input UI 组件传进去 会在外面包裹一层 生成一个容器组件
// //容器组件 负责处理逻辑 将数组传递给 UI组件
// //不负责 UI 只负责处理 业务逻辑
// //connect接收两个参数
// /**
//  * mapStateToProps  建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系
//  * mapDispatchToProps  用来建立 UI 组件的参数到store.dispatch方法的映射
//  */

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Input)