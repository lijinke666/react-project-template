import React from 'react'
import {connect} from 'react-redux'

class Popup extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
      const {width,height,text,isShow} = this.props
      const styles = {
        width,
        height,
        position:"absolute",
        "backgroundColor":"rgba(0,0,0,.5)",
        "margin":"auto",
        "top":"0",
        "left":"0",
        "right":"0",
        "bottom":"0",
        "display":isShow ? 'block' : 'none'
      }
      return (
        <div className="popup" key="popup" style={ styles } >
          {text}
        </div>
      )
    }
}



function mapStateToProps( state ){
  console.log(state, '123123123')
    return {
        isShow:state.isShow,
    }
}

export default connect(
  mapStateToProps
)(Popup)
