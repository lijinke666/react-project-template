import React from 'react'
import {connect} from 'react-redux'
import "./styles.less"

class Popup extends React.Component{
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



function mapStateToProps( state ){
    return {
        isShow:state.isShow,
    }
}

export default connect(
  mapStateToProps
)(Popup)
