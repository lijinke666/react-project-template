import React from 'react'
import {connect} from 'react-redux'
import Popup from '../Popup'

class About extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
      const {onBtnClick} = this.props;
      return (
        <div>
          <h2>关于我们</h2>
          <button onClick= {onBtnClick}>显示弹窗</button>
          <Popup
            width={200}
            height={200}
            text="redux练习"
          />
        </div>

      )
    }
}


function mapStateToProps( state ){
    return {
      isShow:state.isShow
    }
}

//处理 UI 组件绑定的一些事件
//发出 action 让reducer得到相应 返回新的状态
function mapDispatchToProps ( dispath ) {
    return {
        //dispath type字段必须  payload 就是携带的信息
        onBtnClick:()=>{
            dispath({
                type:"showPopup"
            })
        }
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
