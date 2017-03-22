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
    console.log(musicData)
    return (
      <div className="music-root" key="music">
        111
      </div>
    )
  }
  componentWillMount() {
    this.props.getMusicData();
  }

};
