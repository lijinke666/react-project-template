/**
 * Created by lijinke on 17/1/12.
 */
import React from "react"
import {connect} from "react-redux"

import './styles.less'

@connect(
  ({size,color})=>({                 //这里箭头函数 {}  会当成一个表达式  但是我们要对象 所以加个括号
      size:size,
      color:color
  })
)

export default class RotateBox extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        //这里的size,color  Input组件displath 当前的值 通过reducer返回新的状态  redux让每个组件状态可以获取到
        const {size,color} = this.props
        const outerBorderStyle = {"width":size,"height":size};
        const innerBorderStyle = Object.assign({"borderColor":color},outerBorderStyle);

        return(
            <div className="rotateMain" onMouseOver={this.onMouseOver}  onMouseMove={ this.onMouseMove } onMouseLeave={ this.onMouseLeave }>
                <section className="rotateBox" style={outerBorderStyle} >
                    <div style={innerBorderStyle}></div>
                    <div style={innerBorderStyle}></div>
                </section>
            </div>
        )
    }
    onMouseOver = (e)=>{
        this.moveX = 0;
        this.moveY = 0;
        let mX = e.pageX - e.currentTarget.offsetLeft;
        let mY = e.pageY- e.currentTarget.offsetTop;
        this.moveX = mX;
        this.moveY = mY;
        //TODO 完成移动动画
    }
    onMouseMove = (e)=>{
        e.target.style.transform = `rotateY(${e.pageX - this.moveX}deg) rotateX(${e.pageY - this.moveY}deg)`
    }
    onMouseLeave = (e)=> {
        e.target.style.transform = 'rotateY(0deg) rotateX(0deg)'
    }
    componentDidMount(){
        console.log('RotateBox 渲染完成')
    }
}

// function mapStateToProps( state ){
//     return {
//         color:state.color,
//         size:state.size
//     }
// }

// export default connect(
//     mapStateToProps
// )(RotateBox)