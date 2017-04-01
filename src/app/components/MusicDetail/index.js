import React, { Component } from 'react'
import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import getMusicDetail from  "./action"

@connect(
  ({MusicDetailAction})=> ({
    info:MusicDetailAction.data
  }),
  (dispatch)=>(
    bindActionCreators({
      getMusicDetail
    },dispatch)
  )
)

export default class MusicDetail extends Component {
  render() {
    const {info:{info}} = this.props
    return (
      <div>
        <h2>歌曲背景故事</h2>
        <pre>{info}</pre>
        <button onClick={ ()=> history.back()}>返回</button>
      </div>
    )
  }
  componentWillMount() {
    const { params:{id} } = this.props
    this.props.getMusicDetail(id)
  }
  
}