import React from 'react'
import { connect } from 'react-redux'

@connect(
  ({ MusicAction }) => ({
    musicData: MusicAction.musicData
  }),
  (dispatch) => ({
    getMusicData: () => {
      dispatch({
        type: "getMusicData"
      })
    }
  })
)
export default class Music extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {musicData} = this.props;
    console.log(musicData);
    return (
      <div className="music-root" key="music">
        {/*<table key="tabel">
          {
            musicData.map(item => {
              let { id, name, category, fans } = item
              return (
                <tr key={id}>
                  <td>id:{id}</td>
                  <td>姓名：{name}</td>
                  <td>分类：{category}</td>
                  <td>粉丝：{fans}</td>
                  <td><a href={`/musicDetail/${id}`}>详情</a></td>
                </tr>
              )
            })
          }
        </table>*/}
      </div>
    )
  }
  componentWillMount() {
    const { getMusicData } = this.props;
    getMusicData();
  }

};
