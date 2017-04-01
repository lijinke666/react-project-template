import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"     //绑定action的函数
import { getMusicData } from "./action"
import {Link} from "react-router"

@connect(
  ({MusicAction}) => ({
     data:MusicAction.musicData
  }),
  (dispatch) => (
    bindActionCreators({
      getMusicData
    }, dispatch)
  )
)
export default class Music extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { data } = this.props;
    return (
      <div className="music-root" key="music">
        {
          data.length>0
            ? <table key="table">
              {
                data.map(item => {
                  let { id, name, category, fans } = item
                  return (
                    <tr key={id}>
                      <td>id:{id}</td>
                      <td>姓名：{name}</td>
                      <td>分类：{category}</td>
                      <td>粉丝：{fans}</td>
                      <td><Link to={`music/${id}`}>查看歌曲信息</Link></td>
                    </tr>
                  )
                })
              }
            </table>
            : <p>加载中。。。</p>
        }
      </div>
    )
  }
  componentWillMount() {
    this.props.getMusicData();
  }

};
